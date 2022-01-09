// Passagem de parâmetro para rotas.

const express = require('express');
const app = express();

// Parâmetros obrigatórios inseridos pelo cliente e enviados para o servidor através de uma requisição HTTP, retornando um JSON com as informações.
app.get('/ola/:nome/:cargo', (req, res) => {
    res.send(req.params);
});

const port = 8080;

app.listen(port, () => {
    console.log(`Servidor rodando na URL: http://localhost:${port}`);
});