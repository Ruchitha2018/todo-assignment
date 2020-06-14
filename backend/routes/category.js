const express = require("express");
const router = express.Router();

const {  listCategories, addCategory, deleteCategory, updateCategory } = require("../controllers/category");

router.get("/list", listCategories);
router.post("/add", addCategory);
router.delete("/delete/:catId", deleteCategory);
router.put("/update/:catId", updateCategory);

//router.param("complainById", complainById);

module.exports = router;
