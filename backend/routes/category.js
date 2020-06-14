const express = require("express");
const router = express.Router();

const {  listCategories, addCategory, deleteCategory, updateCategory, getCategory } = require("../controllers/category");

router.get("/list", listCategories);
router.post("/add", addCategory);
router.delete("/delete/:catId", deleteCategory);
router.put("/update/:catId", updateCategory);
router.get("/get/:catId", getCategory);

module.exports = router;
