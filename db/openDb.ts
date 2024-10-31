import { Platform } from "react-native";
import * as SQLite from "expo-sqlite/next";

async function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = await SQLite.openDatabaseAsync("db.db");
  db.withTransactionSync(() => {
    db.runSync(
      `create table if not exists items (id integer primary key not null, done int, value text);`
    );
  });
  return db;
}

export default openDatabase;
