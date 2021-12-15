public class MousePad {
    private String cor;
    private String marca;
    private boolean RGB;

    // O constructor com os parâmetros economiza muitas linhas na classe principal.
    public MousePad(String cr, String mrc, boolean rgb) {
        this.setCor(cr);
        this.setMarca(mrc);
        this.setRGB(rgb);
    }

    public String getCor() {
        return this.cor;
    }

    public void setCor(String cr) {
        this.cor = cr;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String mrc) {
        this.marca = mrc;
    }

    public boolean getRGB() {
        return this.RGB;
    }

    public void setRGB(boolean rgb) {
        this.RGB = rgb;
    }

    public void exibeStatus() {
        System.out.println("---------- STATUS DO MOUSEPAD ----------");
        System.out.println("Cor: " + this.getCor());
        System.out.println("Marca: " + this.getMarca());
        System.out.println("RGB: " + this.getRGB());
    }
}
