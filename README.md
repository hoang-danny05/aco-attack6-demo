# aco-attack6-demo
code needed to create a SQL server that is vulnerable to SQL Injection + to make a server that is not vulnerable

## How To Use
Prerequisites: Have git, npm, and node installed 
1) Install mysql (should already be installed on Kali)
```bash
sudo apt update;
sudo apt install default-mysql-server
```
2) Enable mysql
```bash
sudo service mysql start;
#optional: check if it's started with
sudo service mysql status;
```
3) clone this repository
```bash
git clone https://github.com/hoang-danny05/aco-attack6-demo.git;
cd aco-attack6-demo
```
5) get into the mysql cli
```bash
sudo mysql;
```
6) Either run the .sql file or type in the commands as follows
Running the sql file:
```sql
source /[CURRENT DIRECTORY]/init.sql
```
Running each command at once:
```sql
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
```
To know what each command does, you can refer to [This google doc LINK](https://docs.google.com/document/d/1LFoV0VA2Wu-L5ZlOirz-u3NIaR7S3qmOJ-nnMB7DLU4/edit?usp=sharing). 
<br/>
7) Install all node packges
```bash
npm i
```
8) Now, you should be able to run the server. Nodemon is there for development purposes.
```bash
npx nodemon index.js
```
9) Visit [http://localhost:8080](http://localhost:8080) on your virtual machine to view the login page. To verify, any default login should display an error, while the login username "admin" with password "supersecret11" should display a success message. 
![image](https://github.com/hoang-danny05/aco-attack6-demo/assets/110684682/489bf2b0-f634-418b-aaf4-f2115b010f23)
![image](https://github.com/hoang-danny05/aco-attack6-demo/assets/110684682/73e6ce75-f82d-487f-9b0e-1a4b5f2da576)
