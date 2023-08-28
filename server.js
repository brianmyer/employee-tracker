const { log } = require('console');
const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'positions_db'
    },
    console.log(`Connected to the positions_db database.`)
);

inquirerPrompt();

function inquirerPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee', 'Quit']
            }
        ])
        .then((response) => {
            if (response.action === 'View all departments') {
                console.log(`You chose: ${response.action}`);
                getDepartments();
                inquirerPrompt();
            }

            if (response.action === 'View all roles') {
                console.log(`You chose: ${response.action}`);
                getRoles();
                inquirerPrompt();
            }
            if (response.action === 'View all employees') {
                console.log(`You chose: ${response.action}`);
                getEmployees();
                inquirerPrompt();
            }
            if (response.action === 'Add a department') {
                console.log(`You chose: ${response.action}`);
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the name of the new department?',
                            name: 'name'
                        }
                    ])
                    .then((response) => {
                       const sql = `INSERT INTO departments (department)
                       VALUES (?);`;
                       const params = [response.name]
                   
                       db.query(sql, params, function (err, results) {
                            console.log(`Successfully added ${params}!`)
                           getDepartments();
                           inquirerPrompt();
                       });
                    })

            }
            if (response.action === 'Add a role') {
                console.log(`You chose: ${response.action}`);
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the name of the new role?',
                            name: 'name'
                        },
                        {
                            type: 'input',
                            message: 'What is the salary of the new role?',
                            name: 'salary'
                        },
                        {
                            type: 'list',
                            message: 'Which department does the new role belong to?',
                            name: 'department',
                            choices: [
                                {
                                    name: "Finance",
                                    value: 1 
                                },
                                {
                                    name: "Marketing",
                                    value: 2 
                                },
                                {
                                    name: "Development",
                                    value: 3
                                },
                                {
                                    name: "HR",
                                    value: 4 
                                },
                                {
                                    name: "Reception",
                                    value: 5 
                                }]
                        }
                    ])
                    .then((response) => {
                       const sql = `INSERT INTO roles (job_title, salary, department_id)
                       VALUES (?, ?, ?);`;
                       const params = [response.name, response.salary, response.department]
                   
                       db.query(sql, params, function (err, results) {
                            console.log(`Successfully added ${params[0]}!`)
                           getRoles();
                           inquirerPrompt();
                       });
                    })
            }
            if (response.action === 'Add an employee') {
                console.log(`You chose: ${response.action}`)
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the first name of the new employee?',
                            name: 'first_name'
                        },
                        {
                            type: 'input',
                            message: 'What is the last name of the new employee?',
                            name: 'last_name'
                        },
                        {
                            type: 'list',
                            message: 'Which role does the new role belong to?',
                            name: 'role',
                            choices: [
                                {
                                    name: "Finance Manager",
                                    value: 1 
                                },
                                {
                                    name: "Marketing Manager",
                                    value: 2 
                                },
                                {
                                    name: "Development Manager",
                                    value: 3
                                },
                                {
                                    name: "HR Manager",
                                    value: 4 
                                },
                                {
                                    name: "Reception Manager",
                                    value: 5 
                                },
                                {
                                    name: "CFO",
                                    value: 6 
                                },
                                {
                                    name: "Analyst",
                                    value: 7 
                                },
                                {
                                    name: "Social Media Coordinator",
                                    value: 8 
                                },
                                {
                                    name: "Print Media Specialist",
                                    value: 9 
                                },
                                {
                                    name: "Advertising Supervisor",
                                    value: 10 
                                },
                                {
                                    name: "Recruiter",
                                    value: 11 
                                },
                                {
                                    name: "Onboarding Specialist",
                                    value: 12 
                                },
                                {
                                    name: "HR Intern",
                                    value: 13 
                                },
                                {
                                    name: "Receptionist",
                                    value: 14 
                                }
                            ]
                        },
                        {
                            type: 'list',
                            message: 'Which department does the new employee belong to?',
                            name: 'department',
                            choices: [
                                {
                                    name: "Finance",
                                    value: 1 
                                },
                                {
                                    name: "Marketing",
                                    value: 2 
                                },
                                {
                                    name: "Development",
                                    value: 3
                                },
                                {
                                    name: "HR",
                                    value: 4 
                                },
                                {
                                    name: "Reception",
                                    value: 5 
                                }]
                        },
                        {
                            type: 'list',
                            message: 'Who does the new employee report to?',
                            name: 'manager',
                            choices: ["Ethan Carey", "Tru Wilkins", "Amalia Colon", "Bruce Baxter", "Lara Gonzalez", "N/A"]
                        }
                    ])
                    .then((response) => {
                       const sql = `INSERT INTO employees (first_name, last_name, role_id, department_id, reports_to)
                       VALUES (?, ?, ?, ?, ?);`;
                       const params = [response.first_name, response.last_name, response.role, response.department, response.manager]
                   
                       db.query(sql, params, function (err, results) {
                            console.log(`Successfully added ${params[0]} ${params[1]}!`)
                            console.log(params[2])
                           getEmployees();
                           inquirerPrompt();
                       });
                    })
            }
            if (response.action === 'Update an employee') {
                console.log(`You chose: ${response.action}`)
                inquirer
                    .prompt([
                        {
                            type: 'list',
                            message: 'Which employee would you like to update?',
                            name: 'name',
                            choices: [
                                {
                                    name: "Princess Nielsen",
                                    value: 1 
                                },
                                {
                                    name: "Tru Wilkins",
                                    value: 2 
                                },
                                {
                                    name: "Amalia Colon",
                                    value: 3
                                },
                                {
                                    name: "Bruce Baxter",
                                    value: 4 
                                },
                                {
                                    name: "Lara Gonzalez",
                                    value: 5 
                                },
                                {
                                    name: "Ethan Carey",
                                    value: 6 
                                },
                                {
                                    name: "Alora Maynard",
                                    value: 7 
                                },
                                {
                                    name: "Landry Ashley",
                                    value: 8 
                                },
                                {
                                    name: "Khalani Cummings",
                                    value: 9 
                                },
                                {
                                    name: "Raiden Wright",
                                    value: 10 
                                },
                                {
                                    name: "Lily Levy",
                                    value: 11 
                                },
                                {
                                    name: "Harold Christian",
                                    value: 12 
                                },
                                {
                                    name: "Anahi Burke",
                                    value: 13 
                                },
                                {
                                    name: "Jax Hunt",
                                    value: 14 
                                },
                                {
                                    name: "Genevieve Roy",
                                    value: 15
                                },
                                {
                                    name: "Marcelo Potter",
                                    value: 16 
                                },
                                {
                                    name: "Rory Banks",
                                    value: 17 
                                }
                            ]
                        },
                        {
                            type: 'list',
                            message: 'Which role would you like to the employee to be updated to?',
                            name: 'role',
                            choices: [
                                {
                                    name: "Finance Manager",
                                    value: 1 
                                },
                                {
                                    name: "Marketing Manager",
                                    value: 2 
                                },
                                {
                                    name: "Development Manager",
                                    value: 3
                                },
                                {
                                    name: "HR Manager",
                                    value: 4 
                                },
                                {
                                    name: "Reception Manager",
                                    value: 5 
                                },
                                {
                                    name: "CFO",
                                    value: 6 
                                },
                                {
                                    name: "Analyst",
                                    value: 7 
                                },
                                {
                                    name: "Social Media Coordinator",
                                    value: 8 
                                },
                                {
                                    name: "Print Media Specialist",
                                    value: 9 
                                },
                                {
                                    name: "Advertising Supervisor",
                                    value: 10 
                                },
                                {
                                    name: "Recruiter",
                                    value: 11 
                                },
                                {
                                    name: "Onboarding Specialist",
                                    value: 12 
                                },
                                {
                                    name: "HR Intern",
                                    value: 13 
                                },
                                {
                                    name: "Receptionist",
                                    value: 14 
                                }
                            ]
                        }
                    ])
                    .then((response) => {
                       const sql = `UPDATE employees SET role_id = ? WHERE id = ?;`;
                       const params = [response.role, response.name]
                   
                       db.query(sql, params, function (err, results) {
                            console.log(`Successfully added ${params}!`)
                           getEmployees();
                           inquirerPrompt();
                       });
                    })
            }
            if (response.action === 'Quit') {
                process.exit();
            }
            return
        }
        );
}

function getDepartments() {
    const sql = `SELECT id, department FROM departments;`;

    db.query(sql, function (err, results) {
        console.table(results);
    });

};

function getRoles() {
    const sql = `SELECT roles.id as id, job_title, department, salary
    FROM roles
    INNER JOIN departments ON departments.id = department_id;`;

    db.query(sql, function (err, results) {
        console.table(results);
    });
}

function getEmployees() {
    const sql = `SELECT employees.id, first_name, last_name, job_title, department, salary, reports_to
    FROM employees
    INNER JOIN roles ON role_id = roles.id
    INNER JOIN departments ON employees.department_id = departments.id;`;

    db.query(sql, function (err, results) {
        console.table(results);
    });
}

function addDepartment() {
    const sql = `INSERT INTO departments (department)
    VALUES (?);`;
    const params = [response.name]

    db.query(sql, params, function (err, results) {
        console.table(results);
    });
}
