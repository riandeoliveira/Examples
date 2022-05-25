const path = require("path");

// Retorna um objeto contendo informações do caminho selecionado.
console.log(path.parse(__filename));

// Retorna a extensão do arquivo selecionado.
console.log(path.extname(__filename));

// Retorna o nome do arquivo selecionado.
console.log(path.basename(__filename));
