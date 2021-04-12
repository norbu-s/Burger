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
    connection.query(queryString, [tableName, colName, value],
        (err, result) => {
            if (err) throw err;
            cb(result);
        }
    );
},

  update(tableName, colName, condition, cb) {
    const queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableName, colName, condition, cb],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },

  deleteOne(tableName, colName, condition, cb) {
        const queryString = 'DELETE FROM ?? WHERE ?? = ?';
        connection.query(queryString, [tableName, colName, condition, cb],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    }
};

module.exports = orm;