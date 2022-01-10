const Sequelize = require('sequelize');

const data = {
    database: 'register',
    username: 'root',
    password: '',
    port: 8080,
    options: {
        host: 'localhost',
        dialect: 'mysql',
    }
}

const { database, username, password, port, options: { host, dialect } } = data;

const sequelize = new Sequelize(database, username, password, data.options);

module.exports = { Sequelize, data, sequelize };