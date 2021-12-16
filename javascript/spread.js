// Operador Spread.

// Em arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combinando os dois arrays e acrescentando mais valores.
const combination = [...array1, ...array2, 7, 8, 9, 10];

// Em objects.

const object1 = {
    age: 20,
    name: "Rian",
}

const object2 = {
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

const addInfoArgs = addInfo({ firstName: "User", lastName: "Test" });

console.log(combination);
console.log(object2);
console.log(addInfoArgs);