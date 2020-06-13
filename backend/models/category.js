const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define('categories', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cat_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cat_desc: {
        type: Sequelize.STRING
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
