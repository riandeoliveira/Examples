const number = 20.22;

Number.isFinite(number); // true
Number.isInteger(number); // false
Number.isNaN(number); // false
Number.parseInt(number); // 20
number.toFixed(3); // 20.220
number.toLocaleString(); // 20,22 -> pt-BR (Brazil)
number.toString(); // "20.22"
