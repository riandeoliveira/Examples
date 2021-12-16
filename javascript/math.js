// Métodos de Math.



const methods = [];

// Retorna o valor de pi.
methods[0] = Math.PI;

// Arredonda o número para cima ou para baixo, dependendo de seu valor.
methods[1] = Math.round(4.67);

// Arredonda o número sempre para BAIXO.
methods[2] = Math.floor(3.9);

// Arredonda o número sempre para CIMA.
methods[3] = Math.ceil(11.15);

// Retorna o número absoluto.
methods[4] = Math.abs(-9.34263);

// Recebe n números e retorna o MAIOR deles.
methods[5] = Math.max(7, 100, 600, 20, 3);

// Recebe n números e retorna o MENOR deles.
methods[6] = Math.min(7, 100, 600, 20, 3);

// Retorna um número aleatório entre 0 e 1.
methods[7] = Math.random();

// Retorna a base elevada ao expoente.
methods[8] = Math.pow(10, 2);

// Retorna a raiz quadrada de um número.
methods[9] = Math.sqrt(25);

// Retorna a raiz cúbica de um número.
methods[10] = Math.cbrt(27);



methods.map((item, i) => console.log(`${typeof item} – ${i}: ${item}`));