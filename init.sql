CREATE USER 'target'@'localhost' IDENTIFIED BY 'kali';

CREATE DATABASE demodb;

GRANT ALL PRIVILEGES ON demodb.* TO 'target'@'localhost';

USE DATABASE demodb;

CREATE TABLE logins (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO logins (id, name, password)
VALUES 
  (1, "admin", "supersecret11"),
  (2, "superuser", "whitetankmountains"),
  (3, "backupadmin", "mandoandbabyyoga");

SELECT * FROM logins;
