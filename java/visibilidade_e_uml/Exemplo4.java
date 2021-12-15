// NOTA: A partir desta atividade, para todas atividades posteriores:
// Sempre informe os modificadores de visibilidade nos atributos e métodos.
// Crie uma representação em UML de cada atividade feita e salve-a como uma imagem.

// Crie um objeto e classifique-o. Não esqueça da visibilidade e do UML.

public class Exemplo4 {
    public static void main(String[] args) {
        Celular motoG7Play = new Celular();

        motoG7Play.bateria = 93;
        motoG7Play.ligado = true;
        motoG7Play.marca = "Motorola";
        motoG7Play.memoria = 16;
        motoG7Play.numContatos = 40;

        motoG7Play.adicionaContato();
        motoG7Play.desliga();
        motoG7Play.liga();
        motoG7Play.telefona();
        motoG7Play.exibeStatus();
    }
}