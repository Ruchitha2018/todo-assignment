const express = require("express");
const router = express.Router();

const {  listTaskByCategory, addTask } = require("../controllers/task");

router.get("/list/:catId", listTaskByCategory);
router.post("/add", addTask);

module.exports = router;
