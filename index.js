import mysql from 'mysql' ;
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const port = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'target',
  password: 'kali', 
  database: 'demodb'
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.post("/", (req, res) => {
  console.log("We got a post!!")
  // TODO handle app logic here
  res.send(JSON.stringify({ok: 1, username: "superadmin"}))
})

// i don't know if i need this now, but i'm too scared to remove it
const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware)
app.listen(port)

// connection.connect()

// connection.query("SHOW TABLES;", 
//   (error, results, fields) => {
//     console.log("errors: ")
//     console.log(error)
//     console.log("results:")
//     console.log(results)
//     console.log("fields: ")
//     console.log(fields)
//   }
// );
//
// connection.end();
