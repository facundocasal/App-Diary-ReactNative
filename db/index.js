import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("location.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists memoriesPrueba5 (id integer primary key not null, userEmail text not null, title text not null, description text not null, date text not null, image text not null , place text not null, lat real not null, lng real not null);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertMemories = (
  userEmail,
  title,
  description,
  date,
  image,
  place,
  lat,
  lng
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into memoriesPrueba5 (userEmail,title, description, date, image, place, lat, lng) VALUES(?,?,?,?,?,?,?,?);",
        [userEmail, title, description, date, image, place, lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
export const fetchMemories = (userEmail) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM memoriesPrueba5 WHERE userEmail = ?",
        [userEmail],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const deleteItem = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM memoriesPrueba5 WHERE id = ?",
        [id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise
};
