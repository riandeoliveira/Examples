// Conectando o banco de dados MySQL com o Node.

const Sequelize = require('sequelize');

// Nome do DB, usuário, senha, JSON.
const sequelize = new Sequelize('nodedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão bem sucedida!');
}).catch(() => {
    console.log('ERRO! Falha ao se conectar com o banco de dados.');
});