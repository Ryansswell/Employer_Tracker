const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./db/connection.js");


const start = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'list',
                message: 'What would you like to do:',
                choices: [
                    "Add a Department",
                    "Add a Role",
                    "Add an Employee",
                    "View a Department",
                    "View a Role",
                    "View an Employee",
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
                case "Add an Employee":
                    AddEmployee();
                    break;
                case "View a Department":
                    ViewDepartment();
                    break;
                case "View a Role":
                    ViewRole();
                    break;
                case "View an Employee":
                    ViewEmployee();
                    break;
                case "Exit the Application":
                    quit();
                default:
                    break;
            }
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
};

async function AddDepartment() {
    await inquirer
        .prompt([
            {
                name: 'newDepartment',
                type: 'list',
                message: 'Add a Department:',
                choices: [
                    "Sales",
                    "Legal",
                    "Finance",
                ],
            },
        ])
        .then((data) => {
            const query = 'insert into department(name) value ("${data.newDepartment}")';
            connection.query(query, (err, res) => {
                if (err) throw err;
            })
        })
    console.log('\n');
    console.log("Department Added");
    start();
}

async function AddRole() {
    await inquirer
        .prompt([
            {
                name: 'addRole',
                type: 'list',
                message: 'Add a Role:',
                choices: [
                    "Sales Executive",
                    "Lawyer",
                    "Accountant",
                ],
            },
            {
                name: 'addSalary',
                type: 'input',
                message: 'Add your Salary:',
            },
            {
                name: 'addDepId',
                type: 'input',
                message: 'Add your DepartmentID:',
            },
        ])
        .then((data) => {
            const query = 'insert into role(title, salary, department_id) values ("${data.addRole}", "${data.addSalry}", ${data.addDepId})';
            connection.query(query, (err, res) => {
                if (err) throw err;
            })
        })
    console.log('\n');
    console.log("Role Added");
    start();
}

async function AddEmployee() {
    await inquirer
        .prompt([
            {
                name: 'first',
                type: 'input',
                message: 'Add first name of Employee:',

            },
            {
                name: 'last',
                type: 'input',
                message: 'Add last name of Employee:',

            },
            {
                name: 'ID',
                type: 'list',
                message: 'Choose ID of the Employee:',
                choices: [
                    "4444",
                    "5555",
                    "8888",
                ],

            },
        ])
        .then((data) => {
            const query = 'insert into employee(first_name, last_name, ID) values ("${data.first}", "${data.last}", ${data.ID})';
            connection.query(query, (err, res) => {
                if (err) throw err;
            })
        })


    console.log('\n');
    console.log("Employee Added");
    start();
};



function ViewDepartment() {
    const query = 'Select * From Employer_Tracker.department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log("\n");
        console.table(res);
    })
    start();
}

function ViewRole() {
    const query = 'Select * From Employer_Tracker.role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log("\n");
        console.table(res);
    })
    start();
}

function ViewEmployee() {
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