-- Nice site to learn different stuff about postgre
-- All commands used below can be found here
postgresqltutorial.com

-- CLI for postgresql
psql terminal on windows

-- Connecting to DB
\c practice - connects current user to specific db

-- GLOBAL COMMANDS
\l - lists all dbs that are created to specific user
\d - lists all tables
\d name - lists all info about products table

-- Creating new db
CREATE DATABASE example1 - creates new db to specific user with name example1

-- Creating new table
Just an example

CREATE TABLE products(
id INT,
name VARCHAR(50),
price INT,
on_sale boolean
);


-- Managing tables
Adding column

ALTER TABLE products ADD COLUMN featured boolean;

Removing column
ALTER TABLE products DROP COLUMN featured;

Removing entire table
DROP TABLE products;