public class Mouse {
    private int DPI;
    private boolean ligado;
    private String marca;

    // Retorna o valor do atributo DPI.
    public int getDPI() {
        return this.DPI;
    }

    // Recebe um valor do parâmetro dpi e o armazena no atributo DPI.
    public void setDPI(int dpi) {
        this.DPI = dpi;
    }

    // Os métodos abaixo fazem a mesma coisa que os dois acima, porém com atributos
    // diferentes.

    public boolean getLigado() {
        return this.ligado;
    }

    public void setLigado(boolean lgd) {
        this.ligado = lgd;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String mrc) {
        this.marca = mrc;
    }

    // Exibe os valores atuais dos atributos. De preferência, sua posição vai após
    // todos os métodos.
    public void exibeStatus() {
        System.out.println("\n---------- STATUS DO MOUSE ----------");
        System.out.println("DPI: " + this.getDPI());
        System.out.println("Ligado: " + this.getLigado());
        System.out.println("Marca: " + this.getMarca());
    }
}