import * as SQLite from 'expo-sqlite';

const DB_NAME = 'truco.db';

class DatabaseUtils {
  constructor() {
    this.db = SQLite.openDatabase(DB_NAME);
    this.createTable();
  }

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
            'scoreList TEXT,' +
            'time TEXT' +
            ')'
        );
      },
      (error) => console.log('Error creating table:', error),
      () => console.log('Table created successfully')
    );
  };

  storeNewRow = (data, callback, errorCallback) => {
    const trimData = {
      ...data,
      winnerTeam: data.winnerTeam.trim(),
      loserTeam: data.loserTeam.trim()
    };

    this.db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO matches (winnerTeam, winnerAvatar, winsWinner, loserTeam, loserAvatar, winsLoser, scoreList, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [
            trimData.winnerTeam,
            trimData.winnerAvatar,
            trimData.winsWinner,
            trimData.loserTeam,
            trimData.loserAvatar,
            trimData.winsLoser,
            JSON.stringify(trimData.scoreList),
            trimData.time
          ],
          (_, resultSet) => callback(resultSet.insertId),
          (_, error) => errorCallback(error)
        );
      },
      (error) => console.log('Error storing new row:', error)
    );
  };

  readDataOffset = (page, offset, callback, errorCallback) => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            'SELECT * FROM matches ORDER BY id DESC LIMIT ? OFFSET ?',
            [offset, (page - 1) * offset],
            (_, { rows }) => {
              const data = rows._array;
              const parsedData = this.parseDatabaseResult(data);
              callback(parsedData);
              resolve(parsedData);
            },
            (_, error) => {
              errorCallback(error);
              reject(error);
            }
          );
        },
        (error) => {
          errorCallback(error);
          reject(error);
        }
      );
    });
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

  getItem = (id, callback, errorCallback) => {
    return new Promise((resolve, reject) => {
      this.db.transaction(
        (tx) => {
          tx.executeSql(
            'SELECT * FROM matches WHERE id = ?',
            [id],
            (_, { rows }) => {
              if (rows._array.length !== 1) {
                console.log('data error', rows._array.length);
                return undefined;
              }
              const data = rows._array;
              const parsedData = this.parseDatabaseResult(data);
              callback(parsedData[0]);
              resolve(parsedData[0]);
            },
            (_, error) => {
              errorCallback(error);
              reject(error);
            }
          );
        },
        (error) => {
          errorCallback(error);
          reject(error);
        }
      );
    });
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
