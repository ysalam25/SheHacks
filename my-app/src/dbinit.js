const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '34.122.117.1',
    user: 'root',
    password: 'shehacks6',
    database: 'findsistersDB'
});

connection.connect();

// --------------------------------------  creating tables and defining primary/foreign key relationships -----------------------------------

connection.query(`DROP TABLE User`
    , (error, rows, fields) => {
        if (error) { console.log(error);}
            else { console.log('User table dropped');}});
/*
connection.query(`DROP TABLE Profile`
    , (error, rows, fields) => {
        if (error) { console.log(error);}
            else { console.log('Profile table dropped');}});
*/

connection.query(`DROP TABLE Tags`
    , (error, rows, fields) => {
        if (error) { console.log(error);}
            else { console.log('Tag table dropped');}});
/*
connection.query(`DROP TABLE TagRelationship`
            , (error, rows, fields) => {
                if (error) { console.log(error);}
                    else { console.log('TagRelationship table dropped');}});
*/

// creating User table
connection.query(`  CREATE TABLE User (
                    username varchar(20) NOT NULL,
                    password varchar(20),
                    PRIMARY KEY (username));`
    , (error, rows, fields) => {
        if (error) {console.log(error);}
            else { console.log('User Table Created'); } });

// creating Profile table
connection.query(` CREATE TABLE Profile (
                    studentID int NOT NULL,
                    email varchar(20),
                    firstName varchar(20),
                    lastName varchar(20),
                    linkedIn varchar(20),
                    facebook varchar(20),
                    instagram varchar(20),
                    twitter varchar(20),
                    university varchar(20),
                    matchPref int(1),
                    profilePhoto varchar(500),
                    createdBy varchar(20),
                    CONSTRAINT prof_pk PRIMARY KEY (studentID),
                    CONSTRAINT prof_fk FOREIGN KEY (createdBy) REFERENCES User(username));`
    , (error, rows, fields) => {
        if (error) { console.log(error); }
            else { console.log('Profile Table Created'); } });

// creating Tags table
connection.query(`  CREATE TABLE TagRelationship (
    profile varchar(20) NOT NULL,
    bigLittle int(1) NOT NULL,
    tag varchar(20) NOT NULL,
    CONSTRAINT tags_pk PRIMARY KEY (profile, bigLittle, tag),
    CONSTRAINT tags_fk1 FOREIGN KEY (profile) REFERENCES Profile(studentID),
    CONSTRAINT tags_fk2 FOREIGN KEY (tag) REFERENCES Tags(name)
    );`
        , (error, rows, fields) => {
            if (error) {console.log(error);}
                else { console.log('TagsRelationship Table Created'); } });


// creating TagsRelationship table 
connection.query(`  CREATE TABLE Tags (
    tagId varchar(20) NOT NULL,
    name varchar(20),
    CONSTRAINT tagsrel_pk PRIMARY KEY (tagId));`
        , (error, rows, fields) => {
            if (error) {console.log(error);}
                else { console.log('Tags Table Created'); } });



// ------------------------------------ inserting default values into each table ---------------------------------------
connection.query(`INSERT INTO User VALUES(
    "janedoe2022",
    "password" );`
, (error, rows, fields) => {
if (error) {
    console.log(error);
}
else {
    console.log('Jane doe user login inserted');
}
});

connection.query(` INSERT INTO Profile VALUES(
                        12345,
                        "janedoe@gmail.com",
                        "Jane",
                        "Doe",
                        "JaneDoe",
                        "Jane Doe",
                        "@janesinsta",
                        "@janestwitter",
                        "Western University",
                        1,
                        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-breeds-russian-blue-1588187842.jpg",
                        "janedoe2022");`
                    , (error, rows, fields) => {
                        if (error) { console.log(error); }
                        else { console.log('Jane Doe Profile Inserted');} });








connection.end();
