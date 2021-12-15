// Identifique dois objetos conceituais do seu dia-a-dia e classifique-os.

public class Exemplo3 {
    public static void main(String[] args) {
        Evento imersaoDev = new Evento();

        imersaoDev.dataInicio = "10/09/2021";
        imersaoDev.diasDuracao = 10;
        imersaoDev.finalizado = true;
        imersaoDev.local = "Online";
        imersaoDev.nomeCompleto = "Imersão Dev da Alura - 3ª Edição";

        imersaoDev.acompanha();
        imersaoDev.baixa();
        imersaoDev.cancela();
        imersaoDev.extende();

        Evento TGA2021 = new Evento();

        TGA2021.dataInicio = "09/12/2021";
        TGA2021.diasDuracao = 1;
        TGA2021.finalizado = false;
        TGA2021.local = "Microsoft Theater, Los Angeles";
        TGA2021.nomeCompleto = "The Game Awards 2021";

        TGA2021.acompanha();
        TGA2021.baixa();
        TGA2021.cancela();
        TGA2021.extende();

        imersaoDev.exibeStatus();
        TGA2021.exibeStatus();
    }
}