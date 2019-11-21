import * as sqlite3 from "sqlite3";

export class Column {
  public name: string;
  public type: string;
  public isPrimaryKey: boolean;

  constructor(name: string = '', type: string = '', isPrimaryKey: boolean = false) {
    this.name = name;
    this.type = type;
    this.isPrimaryKey = isPrimaryKey;
  }
}

export class Table {
  public name: string;
  public primaryKey: string | undefined;
  public columns: Column[];

  constructor(name: string) {
    this.name = name;
    this.primaryKey = undefined;
    this.columns = [];
  }
}

export class Schema {
  public tables: Table[];

  constructor() {
    this.tables = [];
  }

  public GetTable(tableName: string) : Table | undefined {
    return this.tables.find((table: Table) => table.name.toLowerCase() == tableName.toLowerCase());
  }
}


export class SqlConnection {
  private db: any;

  constructor(path: string) {
    this.connect(path);
  }

  public connect(path: string): boolean | Error {
    const db = new sqlite3.Database(
      path

    );
    if (!db) {
      return (new Error(`Unable to connect to ${path}`));
    }
    this.db = db;
    return true;
  }

  public insert(values: string) {

    this.db.run("INSERT OR IGNORE INTO Vendor_Components( ComponentId, VendorId ) VALUES " + values, (err: any) => {
      if (err) {
        return console.log(err.message);
      }
    });
  }

  public execute(sql: any) {
    return new Promise((resolve, reject) => {
      if (this.db === undefined) {
        reject(new Error("Not connected"));
      } else {
        this.db.all(sql, [], (err: any, rows: any) => {
          if (err) {
            console.log(`Query error: ${err.message}`);
            resolve(err);
          } else {
            console.log("Rows: ", rows);
            resolve(rows);
          }
        });
      }
    });
  }

  public async GetTableNames(): Promise<string[]> {
    try {
      const tableNames: string[] = [];
      const query = `SELECT name FROM sqlite_master WHERE type='table'`;
      const result: any = await this.execute(query);
      if(result instanceof Error) {
        throw result;
      }
      result.forEach((row: any) => {
          tableNames.push(row.name);
        });
      console.log(tableNames);
      return tableNames;
    }
    catch (err) {
      throw err;
    }
  }

  public async GetSchema() : Promise<Schema> {
    const schema: Schema = new Schema();

    const query = `SELECT * FROM sqlite_master WHERE type='table'`;
    const result: any = await this.execute(query);
    if(result instanceof Error) {
      throw result;
    }
    result.forEach((row: any) => {
      const table: Table = new Table(row['name']);
      const createTableInfo: string = row['sql'];
      //console.log(createTableInfo);
      const regEx = /.*CREATE\s+TABLE\s+(\S+)\s*\((.*)\).*/;

      let tableInfo = createTableInfo.match(regEx);
      console.log("table Info ",tableInfo);

      if(tableInfo && tableInfo.length > 2) {
        const columnsInfo = tableInfo[2].split(/,/);
        //console.log(tableInfo);
        const regEx = /\s*(\S+)\s+(\S+)\s*(.*)/;
        console.log("ColInfo ", columnsInfo);
        columnsInfo.forEach((columnInfo) => {
          const colInfo = columnInfo.match(regEx);
          if(colInfo && colInfo.length > 2) {
            //console.log(colInfo);
            const colName = colInfo[1].replace(/"/g,'');
            const colType = colInfo[2];
            let isPrimaryKey = false;
            if(colInfo.length > 3) {
              isPrimaryKey = colInfo[3].indexOf('PRIMARY KEY') >= 0;
              if(isPrimaryKey) {
                table.primaryKey = colName;
              }
            }
            console.log("colName: ",colName);
            table.columns.push(new Column(colName, colType, isPrimaryKey));
          }
        });
      }
      schema.tables.push(table);
    });

    return schema;
  }

  public createVendorComponentTable(){
    const createTable = `
                        CREATE TABLE IF NOT EXISTS "Vendor_Components" (
                          "VendorId"	INTEGER,
                          "ComponentId"	INTEGER,
                          PRIMARY KEY("VendorId","ComponentId")
                        );`
    this.db.run(createTable, (err: any) => {
      if (err) {
        return console.log(err.message);
      }
    });
  }

  public async GetColNames(tableName: any) {
    console.log(tableName);
    let colNames: any =[];
    await this.execute("PRAGMA table_info" +"("+tableName+")").then((data: any) => {
      data.map((i: any) => {
          colNames.push(i.name);
      });
    });
    console.log("Column Names",colNames);
    return colNames;
  }

  public close() {
    if (this.db) {
      this.db.close();
    }
  }
}
