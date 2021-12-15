// Crie três objetos da mesma classe, com três atributos privados e interaja com eles somente usando getter e setter. Exiba os valores finais de cada um dos objetos no console.

public class Exemplo5 {
    public static void main(String[] args) {
        Mouse mouse1 = new Mouse();

        // O atributo marca não pode ser trocado sem um método acessor (setDPI()),
        // pois ele está privado. Isso vale para todos os demais privados.
        // mouse1.dpi = 3600;

        // Os parâmetros são passados para os objetos. Na Classe Mouse eles são
        // armazenados nos atributos.

        mouse1.setDPI(2400);
        mouse1.setLigado(true);
        mouse1.setMarca("Multilaser");
        mouse1.exibeStatus();

        Mouse mouse2 = new Mouse();

        mouse2.setDPI(7200);
        mouse2.setLigado(false);
        mouse2.setMarca("Redragon");
        mouse2.exibeStatus();

        Mouse mouse3 = new Mouse();

        mouse3.setDPI(20000);
        mouse3.setLigado(false);
        mouse3.setMarca("Razer");
        mouse3.exibeStatus();
    }
}