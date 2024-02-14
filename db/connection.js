const mysql = require("mysql");

const pool = mysql.createPool({
    host: "192.168.56.56",
    user: "homestead",
    password: "secret",
    database: "nodejs",
    connectionLimit: 10
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("#Não foi possível conectar a base de dados:", err);
        return;
    }
    console.log("#Conectado a base de dados!");
    connection.release();
});

module.exports = pool;
