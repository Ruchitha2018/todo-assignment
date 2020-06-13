const Task = require("../models/task");

exports.listTaskByCategory  = (req, res) => {
    console.log(req.params.catId);
    Task.findAll({where:{cat_id:req.params.catId}}).then(tasks => {
        return res.json(tasks);
    }).catch(err => {
       res.send(err);
    });
}

