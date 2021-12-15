// A conversão entre tipos pode gerar incompatibilidade, por isso são usadas classes invólucros.

package documentation;

public class ConversaoTipos {
    public static void main(String[] args) {
        // Conversão de Tipos Primitivos

        // Jeito ERRADO
        // int idade = 20;
        // String valor = idade;

        // Jeito CERTO
        int idade = 20;
        String valor = Integer.toString(idade);
    }
}
