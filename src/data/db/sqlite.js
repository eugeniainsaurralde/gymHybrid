import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("session.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS initSesion (localId TEXT NOT NULL,email TEXT NOT NULL,idToken TEXT NOT NULL)",
        [],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
  return promise;
};

export const insertSession = ({ localId, email, idToken }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO initSesion (localId,email,idToken) VALUES (?,?,?)",
        [localId, email, idToken],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM initSesion",
        [],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM initSesion",
        [],
        (_, result) => resolve(result),
        (_, result) => reject(result)
      );
    });
  });
  return promise;
};
