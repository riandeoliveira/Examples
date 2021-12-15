package documentation;

public class Condicoes {
    public static void main(String[] args) {
        int v1 = 10;
        int v2 = 0;

        // Estruturas Condicionais

            // Operador ternário
            int r = v2 > 0 ? v1 / v2 : 0; // Se v2 for maior que 0, faça v1 / v2, senão retorne 0

            System.out.println(r);

            // Condição Simples
            if (v2 != 0) {
                r = v1 / v2;
            }

            System.out.println(r);

            // Condição Composta
            if (v2 != 0) {
                r = v1 / v2;
                System.out.println(r);
            } else {
                System.out.println("Divisão impossível!");
            }

            // Condição Aninhada
            int n1 = 10;
            int n2 = 2;
            char op = 'd';

            if (op == 'a') {
                int a = n1 + n2;
                System.out.println("Adição: " + a);
            } else if (op == 's') {
                int s = n1 - n2;
                System.out.println("Subtração: " + s);
            } else if (op == 'm') {
                int m = n1 * n2;
                System.out.println("Multiplicação " + m);
            } else if (op == 'd') {
                int d = n1 / n2;
                System.out.println("Divisão " + d);
            } else {
                System.out.println("Operação não reconhecida!");
            }

            // Condição Múltipla
            switch (op) {
                case 'a':
                    int a = n1 + n2;
                    System.out.println("Adição: " + a);
                    break;
                case 's':
                    int s = n1 - n2;
                    System.out.println("Subtração: " + s);
                    break;
                case 'm':
                    int m = n1 * n2;
                    System.out.println("Multiplicação " + m);
                    break;
                case 'd':
                    int d = n1 / n2;
                    System.out.println("Divisão " + d);
                    break;
                default:
                    System.out.println("Operação não reconhecida!");
            }
    }
}
