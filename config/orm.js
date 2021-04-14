const connection = require("./connection.js");

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
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(
            queryString, [tableName, colName, value],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },

    update(tableName, colName, value, id, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(
            queryString, [tableName, colName, value, id],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },

    deleteOne(tableName, id, cb) {
        const queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(
            queryString, [tableName, id],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },
};

module.exports = orm;