 SELECT *
FROM departments;

 SELECT roles.id as id, job_title, department, salary
FROM roles
INNER JOIN departments ON departments.id = department_id;

 SELECT e.id, e.first_name, e.last_name, job_title, department, salary, CONCAT(m.first_name,' ',m.last_name) AS Manager
    FROM employees e
    LEFT JOIN employees m ON m.id = e.manager_id
    INNER JOIN roles ON e.role_id = roles.id
    INNER JOIN departments ON e.department_id = departments.id;

INSERT INTO departments (department)
VALUES (?);

INSERT INTO roles (job_title, salary, department_id)
VALUES (?, ?, ?);

INSERT INTO employees (first_name, last_name, role_id, department_id, manager_id)
VALUES (?, ?, ?, ?, ?);

UPDATE employees SET role_id = ?, department_id = ?, manager_id = ? WHERE id = ?;