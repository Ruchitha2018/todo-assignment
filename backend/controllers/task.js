const Task = require("../models/task");

exports.listTaskByCategory  = (req, res) => {
    console.log(req.params.catId);
    Task.findAll({where:{cat_id:req.params.catId}}).then(tasks => {
        return res.json(tasks);
    }).catch(err => {
        res.send(err);
    });
}

exports.addTask = (req, res) => {
    const todayDate = new Date();
    const taskData = {
        task_title : req.body.task_title,
        task_level : req.body.task_level,
        task_status : req.body.task_status,
        task_deadline:req.body.task_deadline,
        cat_id : req.body.cat_id,
        created: todayDate
    }
    Task.create(taskData).then(data => {
        return res.json(data);
    });
}

