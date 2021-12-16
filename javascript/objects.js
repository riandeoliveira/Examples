// Métodos de Objetos.



const methods = [];

const person = {
    age: 90,
    firstName: "Rian",
    lastName: "Oliveira",
    single: true
}

// Retorna um array com as propriedades do objeto.
methods[0] = Object.keys(person);

// Retorna um array com os valores do objeto.
methods[1] = Object.values(person);

// Retorna um array contendo arrays correspondentes para cada item, informando suas propriedades e valores.
methods[2] = Object.entries(person);



methods.map(item => {
    console.log(item);
    console.log();
});