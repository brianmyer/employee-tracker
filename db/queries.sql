 SELECT *
FROM departments;

 SELECT roles.id as id, job_title, department, salary
FROM roles
INNER JOIN departments ON departments.id = department_id;

 SELECT employees.id, first_name, last_name, job_title, department, salary, reports_to
FROM employees
INNER JOIN roles ON roles.id = role_id
INNER JOIN departments ON departments.id = employees.department_id;

INSERT INTO departments (department)
VALUES (?);

INSERT INTO roles (job_title, salary, department_id)
VALUES (?, ?, ?);

INSERT INTO employees (first_name, last_name, role_id, department_id,  reports_to)
VALUES (?, ?, ?, ?, ?);

UPDATE employees SET role_id = ? WHERE id = ?