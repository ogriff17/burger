var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'pqxt96p7ysz6rn1f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    database: 'kmzixrcp6r22mycs',
    user: 'jh3lbtdb34smwh30',
    password:'qh0otv4dyqpkx7zq',
});

connection.connect(function(err){
    if (err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;







