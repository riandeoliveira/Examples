package documentation;

public class Operadores {
    public static void main(String[] args) {
        int v1 = 100;
        int v2 = 200;

        // Operadores

            // Atribuição
            int idade = 20; // Variável do tipo número inteiro de 32 bits recebe 20
            v1 += v2; // v1 = v1 + v2
            v2 -= v1; // v2 = v2 - v1
            v1 *= v2; // v1 = v1 * v2
            v2 /= v1; // v2 = v2 / v1
            v2 %= v1; // v2 = v2 % v1

            System.out.println(idade);

            // Aritméticos
            int r1 = v1 + v2; // Adição
            int r2 = v2 - v1; // Subtração
            int r3 = v1 * v2; // Multiplicação
            int r4 = v2 / v1; // Divisão
            int r5 = v2 % v1; // Módulo
            
            System.out.println("Soma: " + r1); // 200
            System.out.println("Subtração: " + r2); // -400
            System.out.println("Multiplicação " + r3); // -30000
            System.out.println("Divisão: " + r4); // 0
            System.out.println("Resto da divisão: " + r5); // -100
            
            // Incremento

                // Pré-fixo
                int r6 = ++v1; // 301

                // Pró-fixo
                int r7 = v2++; // -100

                System.out.println("Incremento pré-fixo: " + r6);
                System.out.println("Incremento pós-fixo: " + r7);

            // Decremento

                // Pré-fixo
                int r8 = ++v1; // 302

                // Pós-fixo
                int r9 = v2++; // -99

                System.out.println("Decremento pré-fixo: " + r8);
                System.out.println("Decremento pós-fixo: " + r9);

            // Lógicos

            boolean a = true;
            boolean b = false;

            boolean c = a && b; // false
            boolean d = a || b; // true

            System.out.println(c);
            System.out.println(d);

            // Relacionais

            boolean r10 = v1 > v2; // Maior que
            boolean r11 = v1 >= v2; // Maior ou igual a
            boolean r12 = v1 < v2; // Menor
            boolean r13 = v1 <= v2; // Menor ou igual a

            System.out.println(r10);
            System.out.println(r11);
            System.out.println(r12);
            System.out.println(r13);

            // Igualdade

            boolean r14 = v1 == v2; // Igual a
            boolean r15 = v1 != v2; // Diferente de

            System.out.println(r14);
            System.out.println(r15);
    }
}
