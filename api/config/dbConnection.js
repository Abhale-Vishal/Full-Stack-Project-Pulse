const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const connect = mongoose.connect(process.env.CONNECTION_URL);
    console.log("connection established sucessfulyy");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
