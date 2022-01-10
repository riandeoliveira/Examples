// Exemplo de formulário simples, com Bootstrap 5, Node.js e MySQL.

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/database');
const User = require('./models/User');

const app = express();

// Lib para lidar com dados enviados pelo cliente.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize.authenticate().then(() => {
    console.log('Conexão bem sucedida!');

    app.listen(db.data.port, () => {
        console.log(`Servidor rodando na URL: http://${db.data.options.host}:${db.data.port}/cadastro`);
    });
}).catch(error => {
    console.log('ERRO! Falha ao se conectar com o banco de dados. ' + error);
});

app.get('/cadastro', (req, res) => res.sendFile('C:/Users/riand/OneDrive/Programação/examples/node.js/form/index.html'));
app.post('/usuario', (req, res) => {
    res.send(`Os dados ${req.body.email} e ${req.body.password} foram recebidos pelo banco de dados com sucesso!`);

    User.create({
        email: req.body.email,
        password: req.body.password
    });
});