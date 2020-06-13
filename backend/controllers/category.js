const Category = require("../models/category");

exports.listCategories  = (req, res) => {
    Category.findAll().then(users => {
        return res.json(users);
    }).catch(err => {
       res.send(err);
    });
}

exports.addCategory  = (req, res) => {
    const todayDate = new Date();
    const categoryData = {
        cat_name : req.body.cat_name,
        cat_desc : req.body.cat_desc,
        created: todayDate
    }
    Category.create(categoryData).then(data => {
        return res.json(data);
    });
}
