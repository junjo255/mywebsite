const express = require("express");
const app = express();
const parser = require("body-parser");
// const db = require('../database');
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000


app.use(cors());
app.use(parser.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname + "/../dist")));




app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });


app.listen(port, () => {
    console.log(`connected to the server:${port}`);
});


