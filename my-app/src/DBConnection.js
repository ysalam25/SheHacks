const mysql = require('mysql');


    let newConnection = mysql.createConnection({
        host: '34.122.117.1',
        user: 'root',
        password: 'shehacks6',
        database: 'findsistersDB'
    });

module.exports = newConnection;