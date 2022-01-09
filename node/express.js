// Framework Node.js que fornece recursos mínimos e flexíveis para construção de servidores web. Para baixar o Express basta usar os comandos: npm init -y para criar um package.json e em seguida um npm install express --save para instalar o Express.

const express = require('express');
const app = express();

const port = 8080;

// A chamada da porta deve ser a ÚLTIMA linha do código.
app.listen(port, () => {
    console.log(`Servidor rodando na URL: http://localhost:${port}`);
});