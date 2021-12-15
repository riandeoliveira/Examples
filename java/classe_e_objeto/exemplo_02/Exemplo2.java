// Identifique dois objetos físicos do seu ambiente e classifique-os.

public class Exemplo2 {
    public static void main(String[] args) {
        // Instância do primeiro objeto da classe Maquina.
        Maquina computador = new Maquina();

        // Atributos usados pelo primeiro objeto.

        computador.aberto = false;
        computador.ligado = true;
        computador.marca = "BIOSTAR GROUP";
        computador.memoria = 1000;
        computador.qtdJogos = 37;

        // Métodos usados pelo primeiro objeto.

        computador.abreMaquina();
        computador.aumentaMemoria();
        computador.liga();
        computador.iniciaJogo();

        // Instância do segundo objeto da classe Maquina.
        Maquina console = new Maquina();

        // Atributos usados pelo segundo objeto.

        console.aberto = false;
        console.ligado = false;
        console.marca = "Sony";
        console.memoria = 500;
        console.qtdJogos = 75;

        // Métodos usados pelo segundo objeto.

        console.abreMaquina();
        console.aumentaMemoria();
        console.liga();
        console.iniciaJogo();

        // Métodos para exibir os status dos dois objetos, um de cada objeto.

        computador.exibeStatus();
        console.exibeStatus();
    }
}