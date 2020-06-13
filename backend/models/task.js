const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define('tasks', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    task_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cat_id: {
        type: Sequelize.INTEGER
    },
    task_level: {
        type: Sequelize.STRING,
        defaultValue: -1
    },
    task_status: {
        type: Sequelize.STRING,
        defaultValue: -1
    },
    created:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},
{
    timestamps:false
}
)
