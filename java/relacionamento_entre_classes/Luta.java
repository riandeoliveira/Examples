// REGRAS DA LUTA
// Só pode ser marcada entre lutadores da mesma categoria.
// Desafiado e desafiante devem ser lutadores diferentes.
// Só pode acontecer se estiver aprovada.
// Só pode ter como resultado a vitória de um dos lutadores ou o empate.

import java.util.Random;

public class Luta {
    private boolean aprovada;

    // Atributos com tipos abstratos de dados (instância de Lutador).

    private Lutador desafiado;
    private Lutador desafiante;

    private int rounds;

    public void luta() {
        if (this.getAprovada()) {
            this.getDesafiado().apresenta();
            this.getDesafiante().apresenta();
            Random aleatorio = new Random();
            int vencedor = aleatorio.nextInt(3);
            switch (vencedor) {
                case 0:
                    this.getDesafiado().empataLuta();
                    this.getDesafiante().empataLuta();
                    System.out.println("EMPATE!");
                    break;
                case 1:
                    this.getDesafiado().ganhaLuta();
                    this.getDesafiante().perdeLuta();
                    System.out.println(this.getDesafiado().getNome() + " VENCEU!");
                    break;
                case 2:
                    this.getDesafiante().ganhaLuta();
                    this.getDesafiado().perdeLuta();
                    System.out.println(this.getDesafiante().getNome() + " VENCEU!");
                    break;
                default:
                    break;
            }

        } else
            System.out.println("A luta não pode acontecer.");
    }

    public void marcaLuta(Lutador l1, Lutador l2) {
        if (l1.getCategoria().equals(l2.getCategoria()) && l1 != l2) {
            this.setAprovada(true);
            this.setDesafiado(l1);
            this.setDesafiante(l2);
        } else {
            this.setAprovada(false);
            this.setDesafiado(null);
            this.setDesafiante(null);
        }
    }

    public boolean getAprovada() {
        return this.aprovada;
    }

    public Lutador getDesafiado() {
        return this.desafiado;
    }

    public Lutador getDesafiante() {
        return this.desafiante;
    }

    public int getRounds() {
        return this.rounds;
    }

    public void setAprovada(boolean apr) {
        this.aprovada = apr;
    }

    public void setDesafiado(Lutador dfd) {
        this.desafiado = dfd;
    }

    public void setDesafiante(Lutador dft) {
        this.desafiante = dft;
    }

    public void setRounds(int rou) {
        this.rounds = rou;
    }
}
