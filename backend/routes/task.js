const express = require("express");
const router = express.Router();

const {  listTaskByCategory, addTask, updateTask, getTask } = require("../controllers/task");

router.get("/list/:catId", listTaskByCategory);
router.post("/add", addTask);
router.put("/update/:taskId", updateTask);
router.get("/get/:taskId", getTask);

module.exports = router;
