// Métodos de Arrays.

const methods = [];

const example1 = ["Rian", 20, true, 15.12];
const example2 = ["Giullianno", "Márcia", "Jamile", "Gustavo"];
const example3 = [45, 4, 9, 16, 25];

// Transforma todo o array em uma string.
methods[0] = example1.toString();

// Transforma todo o array em uma string e separa os elementos pelo caractere desejado.
methods[1] = example1.join(" – ");

// Retorna o indíce (posição) do elemento desejado.
methods[2] = example1.indexOf(15.12);

// Remove o último item do array, ALTERANDO ele.
methods[3] = example1.pop();

// Remove o primeiro item do array, ALTERANDO ele.
methods[4] = example1.shift();

// Adiciona um item no final do array, ALTERANDO ele.
methods[5] = example1.push(15.12);

// Adiciona um item no início do array, ALTERANDO ele.
methods[6] = example1.unshift("Rian");

// Recebe um indíce e a quantidade de itens a serem removidos e os deleta do array, ALTERANDO ele.
methods[7] = example1.splice(1, 2);

// Concatena um array com outro array.
methods[8] = example1.concat(example2);

// Ordena o array em ordem alfabética, ALTERANDO ele.
methods[9] = example2.sort();

// Inverte a ordem do array.
methods[10] = example1.reverse();

// Mapeia o array, executando uma função para cada um dos itens, gerando um novo array com os resultados.
methods[11] = example3.map(item => item * 2);

// Filtra um array, adicionando o elemento verificado em um novo array se ele for true.
methods[12] = example3.filter(item => item < 20 ? true : false);

// Retorna true se a condição desejada for verdadeira para todos os itens do array, senão retorna false.
methods[13] = example3.every(item => item > 20 ? true : false);

// Retorna true se a condição desejada for verdadeira para pelo menos um item do array, senão retorna false.
methods[14] = example3.some(item => item > 20 ? true : false);

// Procura um item no array e o retorna se encontrar.
methods[15] = example3.find(item => item === 16 ? true : false);

// Procura um item no array e retorna o indíce dele se o encontrar.
methods[16] = example3.findIndex(item => item === 16 ? true : false);



methods.map((item, i) => console.log(`${i}: ${item}`));