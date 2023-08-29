INSERT INTO departments (department)
VALUES ("Finance"),
       ("Marketing"),
       ("Development"),
       ("HR"),
       ("Reception");

INSERT INTO roles (job_title, department_id, salary)
VALUES ("Finance Manager", 1, 100000),
       ("Marketing Manager", 2, 100000),
       ("Development Manager", 3, 100000),
       ("HR Manager", 4, 100000),
       ("Reception Manager", 5, 100000),
       ("CFO", 1, 150000),
       ("Analyst", 1, 80000),
       ("Social Media Coordinator", 2, 60000),
       ("Print Media Specialist", 2, 60000),
       ("Advertising Supervisor", 2, 85000),
       ("Recruiter", 3, 50000),
       ("Onboarding Specialist", 4, 70000),
       ("HR Intern", 4, 30000),
       ("Receptionist", 5, 40000);

INSERT INTO employees (first_name, last_name, role_id, department_id, manager_id)
VALUES ("Princess", "Nielsen", 1, 1, 6),
       ("Tru", "Wilkins", 2, 2, NULL),
       ("Amalia", "Colon", 3, 3, NULL),
       ("Bruce", "Baxter", 4, 4, NULL),
       ("Lara", "Gonzalez", 5, 5, NULL),
       ("Ethan", "Carey", 6, 1, NULL),
       ("Alora", "Maynard", 7, 1, 6),
       ("Landry", "Ashley", 8, 2, 2),
       ("Khalani", "Cummings", 9, 2, 2),
       ("Raiden", "Wright", 10, 2, 2),
       ("Lily", "Levy", 11, 3, 3),
       ("Harold", "Christian", 12, 4, 4),
       ("Anahi", "Burke", 13, 4, 4),
       ("Jax", "Hunt", 14, 5, 5),
       ("Genevieve", "Roy", 13, 4, 4),
       ("Marcelo", "Potter", 14, 5, 5),
       ("Rory", "Banks", 8, 2, 2);