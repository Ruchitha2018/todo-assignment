const express = require("express");
const router = express.Router();

const {  listCategories, addCategory } = require("../controllers/category");

router.get("/list", listCategories);
router.post("/add", addCategory);

//router.param("complainById", complainById);

module.exports = router;
