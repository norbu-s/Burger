const connection = require('./connection.js');

const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create(tableName, colName, value, cb) {
    const queryString = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(query, [tableName, colName, value],
        (err, result) => {
            if (err) throw err;
            cb(result);
        }
    );
},

  update(tableName, colName, colVal, conditionCol, conditionVal, cb) {
    const query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(query, [tableName, colName, colVal, conditionCol, conditionVal],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },

  deleteOne(tableName, conditionCol, conditionVal, cb) {
        const query = 'DELETE FROM ?? WHERE ?? = ?';
        connection.query(query, [tableName, conditionCol, conditionVal],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    }
};

module.exports = orm;