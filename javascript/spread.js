// Operador Spread.



const results = [];

// Em arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combinando os dois arrays e acrescentando mais valores.
results[0] = [...array1, ...array2, 7, 8, 9, 10];

// Em objects.

const object1 = {
    age: 20,
    name: "Rian",
}

results[1] = {
    ...object1,
    single: true
}

// Em functions.

const addInfo = info => {
    const newInfo = {
        ...info,
        stats: 0,
        token: "yt6g7h"
    };
    return newInfo;
}

results[2] = addInfo({ firstName: "User", lastName: "Test" });



results.map(item => console.log(item));