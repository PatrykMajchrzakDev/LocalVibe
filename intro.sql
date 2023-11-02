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


-- ============ Managing tables ============

-- Adding column
ALTER TABLE products ADD COLUMN featured boolean;

-- Removing column
ALTER TABLE products DROP COLUMN featured;

-- Removing entire table
DROP TABLE products;

-- create new table
-- id is gonna be incremented always by 1 and it always has to be set
CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL,
    name VARCHAR(25) NOT NULL,
    location VARCHAR(25) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);


-- Manual insertion
INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonalds', 'leszno', 3);

-- adding new constraints to specific table column
ALTER TABLE restaurants ADD CONSTRAINT price_range CHECK(price_range >=1 and price_range <=5);

-- renaming constraint of exisiting column
ALTER TABLE restaurants RENAME CONSTRAINT id TO pk_restaurants;