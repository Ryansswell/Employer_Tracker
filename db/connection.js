const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',

    password: 'password1',
    database: 'Employer_Tracker',
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;