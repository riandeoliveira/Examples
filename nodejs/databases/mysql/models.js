// Models são abstrações que representam tabelas do banco de dados MySQL.

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexão bem sucedida!');
}).catch(() => {
    console.log('ERRO! Falha ao se conectar com o banco de dados.');
});

// Criação de uma tabela.
const User = sequelize.define('users', {
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    email: { type: Sequelize.STRING }
});

// Atribuindo valores para a tabela.
User.create({
    first_name: 'Rian',
    last_name: 'Dias de Oliveira',
    age: 20,
    email: 'riandiasdeoliveira2001@gmail.com'
});

// Sincronizando com o banco (só precisa ser executado UMA única vez).
User.sync();