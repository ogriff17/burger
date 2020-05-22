var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'burger_db',
    user: 'root',
    password: 'Wingchuncat123',
});

connection.connect(function(err){
    if (err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;







