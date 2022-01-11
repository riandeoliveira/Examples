// Conectando o MongoDB no Node.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/register').then(() => {
    console.log('Conexão bem sucedida!');
}).catch(error => {
    console.log('ERRO! Não foi possível se conectar ao MongoDB ' + error);
});