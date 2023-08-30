const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Aminebougassas007',
  database : 'JHDB'
});

connection.connect((err)=>{
 err ? console.log(err) : console.log("all good so far");
})


module.exports = connection;