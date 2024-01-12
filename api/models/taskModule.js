const mongoose = require("mongoose");

const task = mongoose.Schema({
  tasktitle: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  status: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Task", task);
