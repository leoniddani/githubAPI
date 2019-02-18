const mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "PaperClick"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
