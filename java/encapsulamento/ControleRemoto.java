// Classe que implementa a interface Controlador.
public class ControleRemoto implements Controlador {
    // Atributos.

    private boolean ligado;
    private boolean tocando;
    private int volume;

    // Métodos especiais.

    // Método constructor.
    public ControleRemoto() {
        this.setLigado(false);
        this.setTocando(false);
        this.setVolume(50);
    }

    // Métodos getter.

    private boolean getLigado() {
        return this.ligado;
    }

    private boolean getTocando() {
        return this.tocando;
    }

    private int getVolume() {
        return this.volume;
    }

    // Métodos setter.

    private void setLigado(boolean lgd) {
        this.ligado = lgd;
    }

    private void setTocando(boolean tcd) {
        this.tocando = tcd;
    }

    private void setVolume(int vlm) {
        this.volume = vlm;
    }

    // Métodos Abstratos

    @Override
    public void liga() {
        this.setLigado(true);
    }

    @Override
    public void desliga() {
        this.setLigado(false);
    }

    @Override
    public void abreMenu() {
        System.out.println("========== MENU ==========");
        System.out.println("Ligado: " + this.getLigado());
        System.out.println("Tocando: " + this.getTocando());
        System.out.print("Volume: " + this.getVolume());
        for (int i = 0; i <= this.getVolume(); i++) {
            System.out.print("|");
        }
    }

    @Override
    public void fechaMenu() {
        System.out.println("Fechando Menu...");
    }

    @Override
    public void aumentaVolume() {
        if (this.getLigado())
            this.setVolume(this.getVolume() + 1);
    }

    @Override
    public void diminuiVolume() {
        if (this.getLigado())
            this.setVolume(this.getVolume() - 1);
    }

    @Override
    public void ligaMudo() {
        if (this.getLigado() && this.getVolume() > 0)
            this.setVolume(0);
    }

    @Override
    public void desligaMudo() {
        if (this.getLigado() && this.getVolume() == 0)
            this.setVolume(50);
    }

    @Override
    public void play() {
        if (this.getLigado() && !(this.getTocando()))
            this.setTocando(true);
    }

    @Override
    public void pause() {
        if (this.getLigado() && this.getTocando())
            this.setTocando(false);
    }
}