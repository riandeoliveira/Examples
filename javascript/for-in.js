// O laço for...in interage sobre propriedades enumeradas de um objeto.

const person = {
    name: "Rian",
 // key: value 
    age: 20
}

// Exibe as chaves dentro do objeto.
for (let key in person) {
    console.log(key);
}

const colors = ["Vermelho", "Verde", "Azul"];

// Exibe os indíces dentro do array.
for (let index in colors) {
    console.log(index)
}