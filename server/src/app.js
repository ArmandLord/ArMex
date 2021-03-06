const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const server = express();
const https = require('https');
const fs = require('fs');

if(process.env.NODE_ENV === "production"){
  let credentials = {
    key : fs.readFileSync('ca-key.pem'),
    cert : fs.readFileSync('ca-cert.pem')
  }
  const https = https.createServer(credentials,server).listen(process.env.HTTPS_PORT,function(){
    console.log('escuchando en el puerto',process.env.HTTPS_PORT)
  })
};

server.name = "API";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

/* server.use(cors(corsOptions)); */

server.use("/", routes);



// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = server;