const { Sequelize } = require('sequelize');

// dados de conexão
const sequelize = new Sequelize('fc_challenge', 'root', '12345678', {
    host: 'database',
    dialect: 'mysql',
    retry: {
        match: [Sequelize.ConnectionError, Sequelize.ConnectionRefusedError, Sequelize.TimeoutError],
    }
});

// criação de model
const People = sequelize.define('People', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = { sequelize, People };