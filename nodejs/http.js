// Hypertext Transfer Protocol (HTTP) é o protocolo responsável pela comunicação de sites na web.

const express = require('express');
const app = express();

// Lê.
app.get('/cursos', (req, res) => {
    res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
});

// Cria.
app.post('/cursos', (req, res) => {
    res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

// Atualiza.
app.put('/cursos/:id', (req, res) => {
    res.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

// Exclui.
app.delete('/cursos/:id', (req, res) => {
    res.json([
        "Curso 6",
        "Curso 2",
        "Curso 4"
    ]);
});

app.listen(8080);