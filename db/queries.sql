 SELECT *
FROM departments;

 SELECT roles.id as id, job_title, department, salary
FROM roles
INNER JOIN departments ON departments.id = department_id;

 SELECT employees.id, first_name, last_name, job_title, department, salary, reports_to
FROM employees
INNER JOIN roles ON roles.id = role_id
INNER JOIN departments ON departments.id = employees.department_id;

SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;
      