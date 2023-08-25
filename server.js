const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee']
        }
    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );









// Query database
db.query('SELECT * FROM course_names', function (err, results) {
    console.table(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
