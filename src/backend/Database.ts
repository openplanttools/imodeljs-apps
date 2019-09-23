import * as sqlite3 from "sqlite3";

export class SqlConnection {
  private db: any;

  constructor(path: string) {
    this.connect(path);
  }

  public connect(path: any): boolean | Error {
    const db = new sqlite3.Database(
      path,
      sqlite3.OPEN_READONLY
    );
    if (!db) {
      return (new Error(`Unable to connect to ${path}`));
    }
    this.db = db;
    return true;
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
            resolve(rows);
          }
        });
      }
    });
  }

  public close() {
    if (this.db) {
      this.db.close();
    }
  }
}
