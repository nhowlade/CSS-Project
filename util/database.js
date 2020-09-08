const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "wenKESdeB2",
    database: "nadeem",
});

module.exports = pool.promise();
