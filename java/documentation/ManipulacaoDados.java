package documentation;

import java.util.Scanner; // Importação de classe

public class ManipulacaoDados {
    public static void main(String[] args) {
        // Manipulação com Dados
        
            // Entrada de Dados
            Scanner teclado = new Scanner(System.in); // Cria um novo objeto, usando a classe importada e leva como parâmetro a entrada do dispositivo
            System.out.print("Qual é o nome do aluno? ");
            String nomeAluno = teclado.nextLine();
            System.out.printf("Qual é a nota de %s? ", nomeAluno);
            float notaAluno = teclado.nextFloat();
            System.out.printf("O aluno %s tem %.1f pontos", nomeAluno, notaAluno);

            // Saída de Dados
            int a = 10;
            boolean b = true;
            float c = 12.17f;
            String nome = "Rian";
            System.out.print("\nO resultado é " + a + "\n"); // Imprime algo na tela
            System.out.println("O resultado é " + b); // Imprime algo na tela e quebra a linha
            System.out.printf("O resultado de %s é %.3f", nome, c); // Imprime algo na tela com formatação. NOTA: Me lembra um pouco as template strings do JS
            System.out.format("\nOs resultados são: %d, %b, %.2f, %s", a, b, c, nome); // Faz a mesma coisa que a linha acima
    }
}
