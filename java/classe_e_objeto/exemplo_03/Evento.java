public class Evento {
    String dataInicio;
    int diasDuracao;
    boolean finalizado;
    String local;
    String nomeCompleto;

    void acompanha() {
        if (this.finalizado) {
            System.out.println("O evento já terminou, portanto não é possível acompanhá-lo.");
        } else {
            System.out.println("Acompanhando o evento.");
        }
    }

    void baixa() {
        if (this.diasDuracao == 0) {
            System.out.println("O evento foi cancelado, portanto não é possível baixá-lo.");
        } else {
            System.out.println("O evento foi baixado da internet.");
        }
    }

    void cancela() {
        if (this.finalizado) {
            System.out.println("O evento já terminou, portanto ele não pode ser cancelado.");
        } else {
            this.dataInicio = "CANCELADO";
            this.diasDuracao = 0;
            this.local = "CANCELADO";
            System.out.println("O evento foi cancelado!");
        }
    }

    void exibeStatus() {
        System.out.println("\n---------- STATUS DO EVENTO ----------");
        System.out.println("Data de início: " + this.dataInicio);
        System.out.println("Dias de duração: " + this.diasDuracao);
        System.out.println("Finalizado: " + this.finalizado);
        System.out.println("Local: " + this.local);
        System.out.println("Nome completo: " + this.nomeCompleto);
    }

    void extende() {
        if (this.finalizado) {
            System.out.println("O evento já terminou, portanto ele não pode ser extendido.");
        } else {
            this.diasDuracao++;
            System.out.println("O evento foi extendido em um dia!");
        }
    }
}
