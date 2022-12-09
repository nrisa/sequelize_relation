const mysql = require("mysql")

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    // database: "sequelize_test"
})

const sql = "CREATE DATABASE sequelize_relasi" 
// const sql = `CREATE TABLE user
//     (
//       id int NOT NULL AUTO_INCREMENT,
//       name VARCHAR(255),
//       hobi VARCHAR(255),
//       PRIMARY KEY (id)  
//     )`

// db.connect(err => {
//     err ?  console.error(err) : console.log("Connected to database!");
// })

db.query(sql, (err, result) => {
    if(err) throw err
    console.log("Database Created!");
})
// db.query(sql, (err, result) => {
//     if (err) throw err

//     console.log("Table Created!");
// })

