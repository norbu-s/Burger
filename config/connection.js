const mysql = require("mysql");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "yourRootPassword",
  database: "burgers_db",
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
  });
  
module.exports = connection;
