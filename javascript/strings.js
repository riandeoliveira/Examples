// Métodos de Strings.



const methods = [];

const example = " Este é um exemplo de string";

// Retorna o indíce (posição) do caractere passado na string desejada.
methods[0] = example.indexOf("é");

// Retorna todos os elementos entre uma posição e a outra.
methods[1] = example.slice(0, 10);

// Substitui uma parte da string por outra.
methods[2] = example.replace("é", "era");

// Transforma toda a string em maiúsculo.
methods[3] = example.toUpperCase();

// Transforma toda a string em minúsculo.
methods[4] = example.toLowerCase();

// Remove todos os espaços vazios da string, tanto do começo quanto do final.
methods[5] = example.trim();

// Retorna o caractere do indíce (posição) passado na string desejada.
methods[6] = example.charAt(6);

// Transforma a string em um array e a separa em um novo elemento de acordo com o caractere especificado.
methods[7] = example.split(" ");

// Verifica se algo está incluído dentro de alguma coisa.
methods[8] = example.includes("é");

// Repete algo em um número x de vezes informado.
methods[9] = example.repeat(3);



methods.map((item, i) => console.log(`${typeof item} – ${i}: ${item}`));