// Desestruturação de Objetos.



const myComputer = {
    cpu: "AMD Ryzen 3 3200G",
    gpu: "NVIDIA GTX 660 2GB",
    powerSupply: {
        brand: "Mancer",
        watts: 400,
    }
}

const { cpu, gpu, powerSupply: { brand, watts } } = myComputer;



console.log(watts);