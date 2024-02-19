const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
require("dotenv").config({ path: "data.env" });
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
const userRoutes = require('./src/routes/user');
const BookRoutes = require('./src/routes/books')
let ans = mongoose.connect("mongodb://127.0.0.1:27017/MERNProject");

// let ans = mongoose.connect("mongodb://127.0.0.1:27017/MERNProject", { useNewUrlParser: true, useUnifiedTopology: true });

if (ans) {
  console.log("connected to the mongodb server");}
  else{
  console.log("no mongodb server");
}

app.use("/api",userRoutes);
app.use("/api",BookRoutes)
app.listen(3344, () => {
    console.log("The Server is running on port 3344");
  });
  