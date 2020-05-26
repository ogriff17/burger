var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'burgers_db',
    user: 'root',
    password:'',
});

connection.connect(function(err){
    if (err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;







