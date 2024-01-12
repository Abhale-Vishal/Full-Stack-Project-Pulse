const express = require("express");
const app = express();
const router = require("./Router/routes");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
connectDB();
app.use("/api/", require("./Router/routes"));

app.listen(port, () => {
  console.log("server connected successfully on port :" + `${port}`);
});
