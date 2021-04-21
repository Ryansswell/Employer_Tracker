const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./db/connection.js");


const start = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'list',
                message: 'pick an option',
                choices: [
                   "Add a Department",
                   "Add a Role",
                   "Add a Employee",
                   "Exit the Application"
                ],
            }
        ]).then((answers) => {
            switch (answers.name) {
                case "Add a Department":
                    AddDepartment();
                    break;
                case "Add a Role":
                    AddRole();
                    break;
                case "Add a Employee":
                    AddEmployee();
                    break;
                case "Exit the Application":
                    quit();
                default:
                    break;
            }
        })
};

function AddDepartment() {
    const query = 'Select * From Employer_Tracker.department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach;
        console.log(res);
    })
    start();
}

function AddRole() {
    const query = 'Select * From Employer_Tracker.role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach;
        console.log(res);
    })
    start();
}

function AddEmployee() {
    const query = 'Select * From Employer_Tracker.employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach;
        console.log(res);
    })
    start();
}

const quit = () => {
    connection.end();
    console.log('BYE!');
    process.exit();
};

start();