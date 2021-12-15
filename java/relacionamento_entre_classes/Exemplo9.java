public class Exemplo9 {
    public static void main(String[] args) {
        Lutador lutador[] = new Lutador[6];

        lutador[0] = new Lutador(1.75f, 2, 1, 31, "França", "Pretty Boy", 68.9f, 11);

        lutador[1] = new Lutador(1.68f, 2, 3, 29, "Brasil", "Putscript", 57.8f, 14);

        lutador[2] = new Lutador(1.65f, 2, 1, 33, "EUA", "Snapshadow", 80.9f, 12);

        lutador[3] = new Lutador(1.93f, 0, 2, 28, "Austrália", "Dead Code", 81.6f, 13);

        lutador[4] = new Lutador(1.70f, 4, 3, 37, "Brasil", "Ufocobol", 119.3f, 5);

        lutador[5] = new Lutador(1.81f, 2, 4, 30, "EUA", "Nerdaard", 105.7f, 12);

        Luta UEC01 = new Luta();
        UEC01.marcaLuta(lutador[0], lutador[1]);
        UEC01.luta();
    }
}