DROP DATABASE IF EXISTS banana_db;

-- Create the database banana and specified it for use.
CREATE DATABASE banana_db;
USE banana_db;

-- Create the table bananers .
CREATE TABLE bananers (
  id int AUTO_INCREMENT,
  banana_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);


