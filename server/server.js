const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  //db connection
});

app.get("/", (req, res) => {
  return res.json("Response from Server");
});

app.listen(8081, () => {
  console.log("listening");
});
