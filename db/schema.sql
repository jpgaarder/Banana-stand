-- Create the database banana and specified it for use.
CREATE DATABASE banana_db;
USE banana_db;

-- Create the table bananers .
CREATE TABLE bananers (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY(id)
);


