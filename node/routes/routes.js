// Rotas de um site.

const express = require('express');
const app = express();

// As rotas são usadas para enviar arquivos HTML correspondentes para o cliente.

app.get('/', (req, res) => {
    res.send('Seja bem-vindo ao meu app!');
});

app.get('/sobre', (req, res) => {
    res.send('Esta é a página SOBRE.');
});

app.get('/blog', (req, res) => {
    res.send('Esta é a página BLOG.');
});

const port = 8080;

// A chamada da porta deve ser a ÚLTIMA linha do código.
app.listen(port, () => {
console.log(`Servidor rodando na URL: http://localhost:${port}`);
});