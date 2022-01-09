const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '34.122.117.1',
    user: 'root',
    password: 'shehacks6',
    database: 'findsistersDB'
});

connection.connect();

connection.query(`
        DROP TABLE User
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('User Table Dropped');
        }
});
connection.query(`
        DROP TABLE Profile
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Profile table Dropped');
        }
});


connection.query(`
        CREATE TABLE User (
            username varchar(20),
            password varchar(20)
    );
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('User Table Created');
        }
});

connection.query(`
        CREATE TABLE Profile (
            studentID int,
            firstName varchar(20),
            lastName varchar(20),
            email varchar(20),
            university varchar(20),
            preference tinyint,
            photo varchar(500)
    );
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Profile Table Created');
        }
});

connection.query(`
        INSERT INTO Profile VALUES(
            12345,
            "Jane",
            "Doe",
            "janedoe@gmail.com",
            "Western University",
            1,
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-breeds-russian-blue-1588187842.jpg"
    );
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Jane Doe Profile Inserted');
        }
});

connection.query(`
        INSERT INTO User VALUES(
            "janedoe2022",
            "iloveshehacks"
    );
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Jane doe user login inserted');
        }
});



// connection.query(`
//         CREATE TABLE BigSisterTag (
         
//     );
//     `
//     , (error, rows, fields) => {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log('BigSisterTag Table Created');
//         }
// });

// connection.query(`
//         CREATE TABLE LittleSisterTag (
            
            
//             );
//     `
//     , (error, rows, fields) => {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log('LittleSisterTag Table Created');
//         }
// });

connection.end();
