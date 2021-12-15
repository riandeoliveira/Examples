// Quando uma função cria um objeto, ela é chamada de factory function (função de fábrica) ou de constructor function (função de construtor). Ambas fazem a mesma coisa, porém possuem algumas características difentes.

// Factory function que cria um objeto contendo valores correspondentes para cada propriedade através de parâmetros, neste caso, peças de hardware de um Computador.
function createDesktopComputer(hardDiskDrive, motherboard, processor, powerSupply, ramMemory, solidStateDrive, videoCard) {
    return {
        hardDiskDrive,
        motherboard,
        processor,
        powerSupply,
        ramMemory,
        solidStateDrive,
        videoCard,
    }
}

const enteredData = createDesktopComputer("Seagate External 1TB", "Biostar A320M", "AMD Ryzen 3 3200G", "Mancer Thunder 400", "Team Group T-Force Vulcan Pichau 8GB DDR4", "Lexar 128GB", "Nvidia GTX 660 2GB");
console.log(enteredData);

// Constructor function que cria um novo objeto a partir da palavra chave new.
function DesktopComputerGamer(hardDiskDrive, motherboard, processor, powerSupply, ramMemory, solidStateDrive, videoCard) {
    this.hardDiskDrive = hardDiskDrive,
        this.motherboard = motherboard,
        this.processor = processor,
        this.powerSupply = powerSupply,
        this.ramMemory = ramMemory,
        this.solidStateDrive = solidStateDrive,
        this.videoCard = videoCard
}

const desktopComputerGamer = new DesktopComputerGamer("Seagate 2TB", "Gigabyte Aorus AX370", "AMD Ryzen 5 5600X", "Corsair CV650", "Kingston Fury Beast 32GB DDR4", "Kingston 480GB", "Nvidia RTX 2080 8GB");
console.log(desktopComputerGamer);

// Optar por utilizar apenas factory functions na maioria dos casos!