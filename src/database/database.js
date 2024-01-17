import * as SQLite from 'expo-sqlite';

const DB_NAME = 'your_database.db';

class DatabaseUtils {
  constructor() {
    this.db = SQLite.openDatabase(DB_NAME);
    this.createTable();
  }

  openDatabase = () => {
    this.db = SQLite.openDatabase(DB_NAME);
  };

  createTable = () => {
    this.db.transaction(
      (tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS matches (' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'winnerTeam TEXT,' +
            'winnerAvatar INTEGER,' +
            'winsWinner INTEGER,' +
            'loserTeam TEXT,' +
            'loserAvatar INTEGER,' +
            'winsLoser INTEGER,' +
            'scoreList TEXT' +
            ')'
        );
      },
      (error) => console.log('Error creating table:', error),
      () => console.log('Table created successfully')
    );
  };

  storeNewRow = (data, callback, errorCallback) => {
    this.db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO matches (winnerTeam, winnerAvatar, winsWinner, loserTeam, loserAvatar, winsLoser, scoreList) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            data.winnerTeam,
            data.winnerAvatar,
            data.winsWinner,
            data.loserTeam,
            data.loserAvatar,
            data.winsLoser,
            JSON.stringify(data.scoreList)
          ],
          (_, resultSet) => callback(resultSet.insertId),
          (_, error) => errorCallback(error)
        );
      },
      (error) => console.log('Error storing new row:', error)
    );
  };

  readAllData = (callback, errorCallback) => {
    this.db.transaction(
      (tx) => {
        tx.executeSql('SELECT * FROM matches', [], (_, { rows }) => {
          const data = rows._array;
          const parsedData = this.parseDatabaseResult(data);
          callback(parsedData);
        });
      },
      (error) => errorCallback(error)
    );
  };

  deleteItem = (id, callback, errorCallback) => {
    this.db.transaction(
      (tx) => {
        tx.executeSql(
          'DELETE FROM matches WHERE id = ?',
          [id],
          (_, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              callback();
            } else {
              errorCallback('Item not found');
            }
          }
        );
      },
      (error) => errorCallback(error)
    );
  };

  resetDatabase = () => {
    this.db.transaction(
      (tx) => {
        tx.executeSql('DROP TABLE IF EXISTS matches');
        this.createTable();
      },
      (error) => console.log('Error resetting database:', error),
      () => console.log('Database reset successfully')
    );
  };

  closeDatabase = () => {
    this.db.closeAsync();
  };

  parseDatabaseResult = (result) => {
    return result.map((item) => {
      const parsedItem = { ...item };
      parsedItem.scoreList = JSON.parse(parsedItem.scoreList);
      return parsedItem;
    });
  };
}

export default new DatabaseUtils();