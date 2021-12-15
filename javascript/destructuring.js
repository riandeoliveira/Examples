// Desestruturação de objetos em JavaScript.

const brasil = {
    capital: "Brasília",
    expectativaVida: "75 anos",
    idioma: "Português",
    moeda: "Real",
    pais: "Brasil",
    pib: "US$ 1.445 trilhões",
    populacao: "212.6 milhões",
    religiao: {
        catolica: "64.6%",
        espirita: "2.0%",
        nenhuma: "8.0%",
        outras: "3.2%",
        protestante: "22.2%",
    },
    rendaPerCapita: "US$ 6.796,84",
}

// Acessando três valores pela forma padrão:
const moeda = brasil.moeda;
const nenhuma = brasil.religiao.nenhuma;
const rendaPerCapita = brasil.rendaPerCapita;

console.log(moeda);
console.log(nenhuma);
console.log(rendaPerCapita);

// Acessando três valores pelo destructuring:
const { capital, religiao: { outras, protestante }} = brasil;
console.log(capital);
console.log(outras);
console.log(protestante);