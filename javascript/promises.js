// Promises



// Código SÍNCRONO

const sumNumbers = () => {
    let result = 1 + 1;
    result == 2 ? sucessCallback() : errorCallback();
}

const sucessCallback = () => console.log("Yeah! Number 2");

const errorCallback = () => console.log("Oops! Something wrong.");

sumNumbers();

// Código ASSÍNCRONO

const promise = new Promise((resolve, reject) => {
    let result = 1 + 1;
    result == 2 ? resolve("Sucess") : reject("Failed");
});

promise.then(message => console.log("This is in the then " + message))
    .catch(err => console.log("This is in the catch " + err));