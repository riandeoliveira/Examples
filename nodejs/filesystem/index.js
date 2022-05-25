// File System: API do Node.js para lidar com arquivos e diretórios

const fs = require("fs");

// Lê o conteúdo de um arquivo.
fs.readFile("./user.json", (error, data) => {
  if (error) throw error;

  console.log(JSON.parse(data)); // { id: 1, name: 'Rian Oliveira', age: 21 }
});

// Escreve em um arquivo, o criando se não existir e substituindo o conteúdo do mesmo se existir.
fs.writeFile("example.js", "console.log('Hello, World!');", (error) => {
  if (error) throw error;

  console.log("Data saved!"); // Data saved!
});

// Escreve em um arquivo, adicionando o conteúdo se o arquivo existir ao invés de substituir.
fs.appendFile("example.js", "\nconsole.log('Bye bye, World!');", (error) => {
  if (error) throw error;

  console.log("Data saved!"); // Data saved!
});

setTimeout(() => {
  // Remove apenas arquivos.
  fs.unlink("./example.js", (error) => {
    if (error) throw error;

    console.log("Data deleted!"); // Data deleted!
  });
}, 10000);

// Retorna um array dos diretórios e arquivos da pasta solicitada.
fs.readdir(__dirname, (error, data) => {
  if (error) throw error;

  console.log(data); // [ 'example.js', 'index.js', 'user.json' ]
});

// Cria um novo diretório.
fs.mkdir(`${__dirname}/new-dir`, (error) => {
  if (error) throw error;

  console.log("Directory created!"); // Directory created!
});

setTimeout(() => {
  // Remove um diretório.
  fs.rmdir("./example", (error) => {
    if (error) throw error;

    console.log("Directory deleted!"); // Directory deleted!
  });
}, 10000);

setTimeout(() => {
  // Renomeia arquivos e diretórios.
  fs.rename("./new-dir", "example", (error) => {
    if (error) throw error;

    console.log("Directory renamed!"); // Directory renamed!
  });
}, 5000);

// Retorna verdadeiro se um arquivo ou diretório existe, senão retorna falso.
fs.existsSync("./index.js")
  ? console.log("The file exists!") // The file exists!
  : console.log("The file doesn't exists!");
