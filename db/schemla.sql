CREATE DATABASE burgers_db;

CREATE TABLE burger(
    id INT NOT NULL auto_increment,
    burger_name varchar(30),
    devoured INT NULL,
    PRIMARY KEY (id)
);