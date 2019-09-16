import * as sqlite3 from "sqlite3";

const db: sqlite3.Database = new sqlite3.Database(
  "./sample.db",
  sqlite3.OPEN_READONLY
);
if (!db) {
  console.log("Error");
}

async function execute(sql: any) {
  return new Promise((resolve, reject) => {
    if (db === undefined) {
      reject(new Error("Not connected"));
    } else {
      db.all(sql, [], (err: any, rows: any) => {
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

export { execute, db };
