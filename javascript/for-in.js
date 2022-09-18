const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
};

const colors = ["red", "green", "blue"];

for (const key in person) console.log(key); // firstName, lastName, age
for (const key in person) console.log(person[key]); // John, Doe, 20
for (const color in colors) console.log(color); // 0, 1, 2
for (const color in colors) console.log(colors[color]); // red, green, blue
