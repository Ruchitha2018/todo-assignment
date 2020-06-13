const express = require("express");
const router = express.Router();

const {  listTaskByCategory } = require("../controllers/task");

router.get("/list/:catId", listTaskByCategory);


module.exports = router;
