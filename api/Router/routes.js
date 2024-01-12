const express = require("express");
const router = express.Router();
const expressErrorHandler = require("express-async-handler");
const Task = require("../models/taskModule");

//get
router.route("/").get(
  expressErrorHandler(async (req, res) => {
    const data = await Task.find();
    console.log(data);
    res.status(200).json(data);
  })
);

//get by id
router.route("/:id").get(
  expressErrorHandler(async (req, res) => {
    const data = await Task.findById(req.params.id);

    res.status(200).json(data);
  })
);

//create data
router.route("/").post(
  expressErrorHandler(async (req, res) => {
    const newtask = await req.body;

    if (!req.body) {
      res.status(500);
      throw new Error("All fileds are mandatory!");
    }

    const taskss = await Task.create(newtask);

    res.status(200).json(taskss);
  })
);

//update based on id
router.route("/:id").put(
  expressErrorHandler(async (req, res) => {
    const data = await Task.findById(req.params.id);
    if (!data) {
      res.status(404);
      throw new Error("Data not Found");
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updatedTask);
  })
);

//delete based on id
router.route("/:id").delete(
  expressErrorHandler(async (req, res) => {
    const data = await Task.findById(req.params.id);
    if (!data) {
      res.status(404);
      throw new Error("Data not Found");
    }
    await Task.deleteOne();
    res.status(201).json({ message: "data deleted successfully!" });
  })
);

module.exports = router;
