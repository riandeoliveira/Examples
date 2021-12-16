// Métodos de Numbers.

const methods = [];

const example = 10.12345;

// Tranforma o number em uma string.
methods[0] = example.toString();

// Retorna o número de casas decimais solicitado.
methods[1] = example.toFixed(2);

// Tranforma uma string em um int.
methods[2] = parseInt(example);

// Transforma uma string em um float.
methods[3] = parseFloat(example);



methods.map((item, i) => console.log(`${i}: ${item}`));