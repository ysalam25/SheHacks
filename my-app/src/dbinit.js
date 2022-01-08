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
            console.log('Profile Table Dropped');
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
            preference varchar(20),
            photo varchar(20),
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
        CREATE TABLE BigSisterTag (
         
    );
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('BigSisterTag Table Created');
        }
});

connection.query(`
        CREATE TABLE LittleSisterTag (
            
            
            );
    `
    , (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('LittleSisterTag Table Created');
        }
});

connection.end();
