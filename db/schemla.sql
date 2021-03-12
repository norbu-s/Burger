CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
    id INT NOT NULL auto_increment,
    burger_name varchar(30),
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);