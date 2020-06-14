const Category = require("../models/category");
const Task = require("../models/Task");

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

exports.updateCategory = (req, res) => {
    const categoryData = {
        cat_name : req.body.cat_name,
        cat_desc : req.body.cat_desc
    }
    
    Category.update({categoryData},{where:{id:req.params.catId}}).then((data) => {
        return res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

exports.deleteCategory = (req, res) => {
    Category.destroy({where:{id:req.params.catId}}).then(() => {
        return res.json("Done");
    }).catch(err => {
        res.send(err);
    });
    Task.destroy({where:{cat_id:req.params.catId}}).then(() => {
        return res.json("Done");
    }).catch(err => {
        res.send(err);
    });

};

