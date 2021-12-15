// Classe Caneta. Nela é dado o tipo dos atributos e o que os métodos farão.

public class Caneta {
    int carga;
    String cor;
    String modelo;
    float ponta;
    boolean tampada;

    void destampa() {
        // O this seria o nome do objeto que chamou na classe principal. Uma referência
        // ao próprio objeto que chamou.
        // Sempre ao modificar um atributo usando um método usa-se o this na frente. Por
        // exemplo, se o this não for usado e houver mais de um objeto, a alteração do
        // atributo valerá para todos objetos, e não apenas para aquele que foi chamado.
        if (this.tampada == false) {
            System.out.println("A caneta já está destampada.");
        } else {
            this.tampada = false;
            System.out.println("A caneta foi destampada.");
        }
    }

    // Método para exibir os valores de todos atributos atuais da classe Caneta.
    void exibeStatus() {
        System.out.println("\n---------- STATUS DA CANETA ---------- ");
        System.out.println("Carga: " + this.carga);
        System.out.println("Cor: " + this.cor);
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Tampada: " + this.tampada);
    }

    void rabisca() {
        if (this.tampada) {
            System.out.println("A caneta está tampada, portanto ela não pode rabiscar.");
        } else {
            System.out.println("A caneta rabiscou.");
        }
    }

    void tampa() {
        if (this.tampada) {
            System.out.println("A caneta já está tampada.");
        } else {
            this.tampada = true;
            System.out.println("A caneta foi tampada.");
        }
    }
}