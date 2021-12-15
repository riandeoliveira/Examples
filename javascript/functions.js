// Funções são ações executadas assim que são chamadas ou em decorrência de um evento.
// Uma função pode receber parâmetros e retornar um resultado.

/* Explicação mais detalhada do exemplo abaixo para uma melhor compreensão:

   A função recebe o parâmetro "n", ele é usado dentro dela, mas até que ela seja chamada, o parâmetro continuará sem valor.
   O console.log na última linha está fazendo 3 coisas:
   1 - Chamando a função parImp.
   2 - Atribuindo um parâmetro para ela, no caso 11 (11 para n).
   3 - Exibindo o resultado (retorno da função) no console, de acordo com a condição imposta, no caso ímpar. */

   function parImp(n) {
       // Função que verifica se um número é par ou ímpar.
       if (n % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
console.log(parImp(11));

// Os valores dos parâmetros de uma função são definidos depois do bloco dela! Numa chamada posterior por exemplo.
// Se todos os parâmetros não forem chamados a função não retornará a soma, então é possível dar um valor a eles antes, como no exemplo abaixo (= 0). O parâmetro que não receber um valor na chamada será considerado como zero.
function soma(n1 = 0, n2 = 0) {
    // Função que soma dois números.
    return n1 + n2;
}
console.log(soma(2, 5));

let v = function(x) {
    // Função dentro de uma variável.
    return x * 2;
}
console.log(v(5));

// Função que calcula o fatorial de um número
function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}
console.log(fatorial(5));

// Função que calcula o fatorial de um número, porém com recursividade (a função chama ela mesma).
function fator(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * fator(num - 1);
    }
}
console.log(fator(5));