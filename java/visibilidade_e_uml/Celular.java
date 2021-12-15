public class Celular {
    public int bateria;
    public boolean ligado;
    public String marca;
    public int memoria;
    public int numContatos;

    public void adicionaContato() {
        if (this.ligado == false) {
            System.out.println("Ligue o celular para poder adicionar um contato.");
        } else {
            this.numContatos++;
            System.out.println("Um novo contato foi adicionado na sua agenda!");
        }
    }

    public void desliga() {
        if (this.ligado == false) {
            System.out.println("O celular já está desligado.");
        } else {
            this.ligado = false;
            System.out.println("O celular foi desligado.");
        }
    }

    public void exibeStatus() {
        System.out.println("\n---------- STATUS CELULAR ----------");
        System.out.println("Bateria: " + this.bateria + "%");
        System.out.println("Ligado: " + this.ligado);
        System.out.println("Marca: " + this.marca);
        System.out.println("Memória: " + this.memoria + " GB");
        System.out.println("Nº de contatos: " + this.numContatos);
    }

    public void liga() {
        if (this.ligado) {
            System.out.println("O celular já está ligado.");
        } else {
            this.ligado = true;
            System.out.println("O celular foi ligado.");
        }
    }

    public void telefona() {
        if (this.ligado == false) {
            System.out.println("Ligue seu celular para poder fazer uma chamada");
        } else {
            System.out.println("Você fez uma ligação.");
        }
    }
}
