const mysql = require("mysql2");

const pool = mysql.createPoll({
    host: "localhost",
    user: "root",
    database: "nadeem",
});

module.exports = pool.promise();
