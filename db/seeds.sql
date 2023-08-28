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

INSERT INTO employees (first_name, last_name, role_id, department_id, reports_to)
VALUES ("Princess", "Nielsen", 1, 1, "Ethan Carey"),
       ("Tru", "Wilkins", 2, 2, ""),
       ("Amalia", "Colon", 3, 3, ""),
       ("Bruce", "Baxter", 4, 4, ""),
       ("Lara", "Gonzalez", 5, 5, ""),
       ("Ethan", "Carey", 6, 1, ""),
       ("Alora", "Maynard", 7, 1, "Ethan Carey"),
       ("Landry", "Ashley", 8, 2, "Tru Wilkins"),
       ("Khalani", "Cummings", 9, 2, "Tru Wilkins"),
       ("Raiden", "Wright", 10, 2, "Tru Wilkins"),
       ("Lily", "Levy", 11, 3, "Amalia Colon"),
       ("Harold", "Christian", 12, 4, "Bruce Baxter"),
       ("Anahi", "Burke", 13, 4, "Bruce Baxter"),
       ("Jax", "Hunt", 14, 5, "Lara Gonzalez"),
       ("Genevieve", "Roy", 13, 4, "Bruce Baxter"),
       ("Marcelo", "Potter", 14, 5, "Lara Gonzalez"),
       ("Rory", "Banks", 8, 2, "Tru Wilkins");