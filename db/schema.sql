CREATE DATABASE if not exists Employer_Tracker;
USE Employer_Tracker;

CREATE TABLE if not exists Department (
    id INT auto_increment NOT NULL,
    name VARCHAR(50),
    primary key (id)
);

CREATE TABLE if not exists Role (
  id INT auto_increment NOT NULL,
  title VARCHAR(30) not NULL,
  salary DECIMAL not null, 
  department_id INT not null,
  PRIMARY KEY (id),
  constraint sk foreign key(department_id) references Department(id)
);

CREATE TABLE if not exists Employee (
    id INT auto_increment NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id int,
    PRIMARY KEY (id),
    constraint rk foreign key(role_id) references Role(id),
    constraint mk foreign key(manager_id) references Employee(id)
);