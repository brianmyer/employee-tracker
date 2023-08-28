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
            console.log(`You chose: ${response.action}`)
            getDepartments()
        }

        if (response.action === 'View all roles') {
            console.log(`You chose: ${response.action}`)
        }
        if (response.action === 'View all employees') {
            console.log(`You chose: ${response.action}`)
        }
        if (response.action === 'Add a department') {
            console.log(`You chose: ${response.action}`)
        }
        if (response.action === 'Add a role') {
            console.log(`You chose: ${response.action}`)
        }
        if (response.action === 'Add an employee') {
            console.log(`You chose: ${response.action}`)
        }
        if (response.action === 'Update an employee') {
            console.log(`You chose: ${response.action}`)
        }
        if (response.action === 'Quit') {
            process. exit(); 
        }
    return
    }
    );

 function getDepartments () {
    const sql = `SELECT id, department FROM departments;`;
  
   db.query(sql, function (err, results) {
        console.table(results); 
      });
    
    };








// // Query database
// db.query('SELECT * FROM course_names', function (err, results) {
//     console.table(results);
// });