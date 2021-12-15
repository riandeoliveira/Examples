public class Maquina {

    // Atributos da classe Maquina.

    boolean aberto;
    boolean ligado;
    String marca;
    int memoria;
    int qtdJogos;

    // Métodos da classe Maquina.

    void abreMaquina() {
        if (this.ligado) {
            System.out.println("Desligue a máquina antes de poder abri-la");
        } else {
            this.aberto = true;
            System.out.println("A máquina foi aberta, você já pode mexer dentro dela.");
        }
    }

    void aumentaMemoria() {
        if (this.aberto == false) {
            System.out.println("Abra a máquina antes de fazer um upgrade na memória de armazenamento.");
        } else {
            this.memoria += this.memoria;
            System.out.println("Você aumentou a memória da sua máquina em duas vezes!");
        }
    }

    void liga() {
        if (this.ligado) {
            System.out.println("A máquina já está ligada.");
        } else {
            this.ligado = true;
            System.out.println("A máquina foi ligada.");
        }
    }

    void exibeStatus() {
        System.out.println("\n---------- STATUS DA MAQUINA ---------");
        System.out.println("Aberto: " + this.aberto);
        System.out.println("Ligado: " + this.ligado);
        System.out.println("Marca: " + this.marca);
        System.out.println("Memória: " + this.memoria);
        System.out.println("Quantidade de jogos: " + this.qtdJogos);
    }

    void iniciaJogo() {
        if (this.ligado == false) {
            System.out.println("Ligue a máquina antes de poder jogar.");
        } else {
            System.out.println("Um jogo foi aberto");
        }
    }

}