// Crie uma classe, dê atributos e métodos a ela e exiba-os com outra classe, a classe principal.

// Classe principal, com um main. Nela, os valores dos atributos são dados e os métodos são chamados e exibidos.

public class Exemplo1 {
    public static void main(String[] args) {
        Caneta caneta1 = new Caneta();
        caneta1.cor = "Azul";
        caneta1.ponta = 0.5f;
        caneta1.exibeStatus();
        caneta1.rabisca();
        caneta1.tampa();

        // Instância de um segundo objeto da mesma classe. Ele pode receber atributos e
        // métodos da classe Caneta, assim como o primeiro objeto instanciado.
        Caneta caneta2 = new Caneta();
        // NOTA: A cor da caneta1 é azul e a da caneta2 é preta. A alteração de cor pro
        // segundo objeto não interfere em nada o primeiro objeto.
        caneta2.cor = "Preta";
        // NOTA: O primeiro objeto não fez uso do atributo modelo, mas o segundo objeto
        // está fazendo, e isso é algo comum. Em POO, de tudo o que nós temos, usamos
        // apenas o que
        // precisamos em determinado momento e não tudo de uma vez só.
        caneta2.modelo = "BIC";
        caneta2.exibeStatus();
        caneta2.destampa();
    }
}