const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u883623029_appuni', 'u883623029_appuni', 'u4mY8UakzI*', {
    host: '217.21.90.52',
    dialect: 'mysql'
});

module.exports = sequelize; 
