public class Teclado {
    private String marca;
    private int numTeclas;
    private boolean RGB;

    // Método contructor, ele recebe o mesmo nome da classe, não possui tipo de dado
    // indicado e, de preferência, sua posição fica logo abaixo dos atributos.
    public Teclado() {
        this.setMarca("C3Tech");
        this.setNumTeclas(101);
        this.setRGB(false);
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String mrc) {
        this.marca = mrc;
    }

    public int getNumTeclas() {
        return this.numTeclas;
    }

    public void setNumTeclas(int nTcl) {
        this.numTeclas = nTcl;
    }

    public boolean getRGB() {
        return this.RGB;
    }

    public void setRGB(boolean rgb) {
        this.RGB = rgb;
    }

    public void exibeStatus() {
        System.out.println("---------- STATUS DO TECLADO ----------");
        System.out.println("Marca: " + this.getMarca());
        System.out.println("Número de teclas: " + this.getNumTeclas());
        System.out.println("RGB: " + this.getRGB());
    }
}
