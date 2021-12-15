// Array's (vetores) são variáveis compostas, que podem armazenar vários elementos. Cada elemento é comsposto por seu valor e uma chave de identificação.

// Posições: 0, 1 e 2.
// 0 para 5, 1 para 8 e 2 para 4. Sempre começa em zero!
let num = [5, 8, 4];

// Exibindo o array.
console.log(`O array completo é ${num}`);
console.log(`O seu primeiro valor é ${num[0]}`);

// Adicionando um elemento no array. Ele só foi criado até o 2, então o JavaScript cria o 3.
num[3] = 6;
console.log(`O array agora é ${num}`);

// Adicionando um elemento no final do array.
num.push(7);
console.log(`O array agora é ${num}`);

// Contando os elementos dentro do array.
console.log(`O array possui ${num.length} elementos`);

// Colocando os elementos do array em ordem crescente.
num.sort();
console.log(`O array em ordem crescente é ${num}\n`);

// Exibindo um array enorme com números aleatórios e os ordenando, utilizando uma estrutura de repetição para economizar linhas de código.
let randomNum = [7, 4, 2, 8, 4, 0, 1, 1, 2, 9, 5, 8, 1, 3, 5, 6, 3, 7, 9, 2];
console.log(`Este array maior possui ${randomNum.length} elementos.`);
randomNum.sort();
console.log("Eles estão em ordem crescente abaixo:");
for (let pos = 0; pos < randomNum.length; pos++) {
    console.log(`O valor ${randomNum[pos]} está na posição ${pos}`);
}

console.log("\nForma simplificada de escrever o for, para array's.");
// For simplificado para variáveis compostas.
// Ambos os for's possuem a mesma funcionalidade neste contexto!
// Se lê: "Para cada posição dentro da variável composta, execute o bloco de código."
for (let posi in randomNum) {
    console.log(`A posição ${posi} possui o valor ${randomNum[posi]}`);
}

// Acessando elementos dentro do array.
// Se lê: "Busque o primeiro elemento 4 e me retorne a posição atual dele."
console.log(randomNum.indexOf(4));