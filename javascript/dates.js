// Métodos de Dates.



const methods = [];

// Data atual, sem argumentos.
const date1 = new Date();

// Data definida, com argumentos de NUMBERS. OBS: o mês começa em ZERO.
const date2 = new Date(2001, 04, 27, 02, 30, 55, 10);

// Data definida, com argumentos de STRINGS. OBS: o mês começa em UM.
const date3 = new Date("2021-12-16 10:02:24");

// Retorna uma data detalhada.
methods[0] = date1;

// Tranforma a data em uma string.
methods[1] = date1.toString();

// Retorna uma data resumida.
methods[2] = date1.toDateString();

// Pega o ano.
methods[3] = date1.getFullYear();

// Pega o mês.
methods[4] = date1.getMonth();

// Pega o dia do mês.
methods[5] = date1.getDate();

// Pega o número do dia da semana.
methods[6] = date1.getDay();

// Pega as horas.
methods[7] = date1.getHours();

// Pega os minutos.
methods[8] = date1.getMinutes();

// Pega os segundos.
methods[9] = date1.getSeconds();

// Pega os milissegundos.
methods[10] = date1.getMilliseconds();

// Retorna em milissegundos o tempo decorrido de 01/01/1970 até a data especificada.
methods[11] = date1.getTime();

// OBS: Para todos os métodos acima, é possível usar "set" ao invés de "get" e alterar a data.



methods.map((item, i) => console.log(`${typeof item} – ${i}: ${item}`));