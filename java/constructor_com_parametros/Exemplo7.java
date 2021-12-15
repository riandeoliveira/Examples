// Crie três objetos, com três atributos privados e interaja com eles usando constructor com parâmetros.

public class Exemplo7 {
    public static void main(String[] args) {

        // As intâncias de objetos levam parâmetros. Cada um direcionando para um
        // atributo, de acordo com o objeto.

        MousePad mousePad1 = new MousePad("Vermelho", "Logitech", false);
        MousePad mousePad2 = new MousePad("Azul", "Corsair", false);
        MousePad mousePad3 = new MousePad("Preto", "Preto", true);

        // Abaixo os objetos são exibidos. O método para exibir também poderia ter sido
        // usado dentro do constructor, porém aparecia uma mensagem dizendo que os
        // objetos não estavam sendo utilizados, apesar de eles estarem funcionando sem
        // nenhum erro.

        mousePad1.exibeStatus();
        mousePad2.exibeStatus();
        mousePad3.exibeStatus();
    }
}