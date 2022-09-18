// Array Methods

const names = ["Rick", "Jane", "Michelle", "Richard"];
const numbers = [45, 4, 9, 16, 25];

names.includes("Rick"); // true
names.indexOf("Michelle"); // 2
names.join(" – "); // Rick – Jane – Michelle – Richard
names.lastIndexOf("Jane"); // 1
names.pop(); // ["Rick", "Jane", "Michelle"]
names.push("Nancy"); // ["Rick", "Jane", "Michelle", "Richard", "Nancy"]
names.shift(); // ["Jane", "Michelle", "Richard"]
names.slice(1, 3); // ["Jane", "Michelle"]
names.sort(); // ["Jane", "Michelle", "Richard", "Rick"]
names.splice(0, 2); // ["Rick", "Jane"]
names.toString(); // Rick,Jane,Michelle,Richard
names.unshift("Joseph"); // ["Joseph", "Rick", "Jane", "Michelle", "Richard"]
numbers.every((item) => item > 20); // false
numbers.filter((item) => item < 20); // [ 16, 9, 4 ]
numbers.find((item) => item === 16); // 16
numbers.findIndex((item) => item === 16); // 3
numbers.map((item) => item * 2); // [ 50, 32, 18, 8, 90 ]
numbers.reduce((accumulator, item) => accumulator + item, 0); // 99
numbers.reverse(); // ["Richard", "Michelle", "Jane", "Rick"]
numbers.some((item) => item > 20); // true
