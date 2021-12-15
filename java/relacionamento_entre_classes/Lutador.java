public class Lutador {
    private float altura;
    private String categoria;
    private int derrotas;
    private int empates;
    private int idade;
    private String nacionalidade;
    private String nome;
    private float peso;
    private int vitorias;

    public void apresenta() {
        System.out.println("========== APRESENTAÇÃO ==========");
        System.out.println("Lutador: " + this.getNome());
        System.out.println("Origem: " + this.getNacionalidade());
        System.out.println("Idade: " + this.getIdade() + " anos");
        System.out.println("Altura: " + this.getAltura() + "m");
        System.out.println("Peso: " + this.getPeso() + " kg");
        System.out.println("Vitórias: " + this.getVitorias());
        System.out.println("Derrotas: " + this.getDerrotas());
        System.out.println("Empates: " + this.getEmpates());
    }

    public void empataLuta() {
        this.setEmpates(this.getEmpates() + 1);
    }

    public void ganhaLuta() {
        this.setVitorias(this.getVitorias() + 1);
    }

    public void exibeStatus() {
        System.out.println("----- " + this.getNome() + " -----");
        System.out.println("Peso: " + this.getCategoria());
        System.out.println("Ganhou: " + this.getVitorias() + " vezes");
        System.out.println("Perdeu: " + this.getDerrotas() + " vezes");
        System.out.println("Empatou: " + this.getEmpates() + " vezes");
    }

    public void perdeLuta() {
        this.setDerrotas(this.getDerrotas() + 1);
    }

    public Lutador(float alt, int der, int emp, int ida, String nac, String nom, float pes, int vit) {
        this.setAltura(alt);
        this.setDerrotas(der);
        this.setEmpates(emp);
        this.setIdade(ida);
        this.setNacionalidade(nac);
        this.setNome(nom);
        this.setPeso(pes);
        this.setVitorias(vit);
    }

    public float getAltura() {
        return this.altura;
    }

    public String getCategoria() {
        return this.categoria;
    }

    public int getDerrotas() {
        return this.derrotas;
    }

    public int getEmpates() {
        return this.empates;
    }

    public int getIdade() {
        return this.idade;
    }

    public String getNacionalidade() {
        return this.nacionalidade;
    }

    public String getNome() {
        return this.nome;
    }

    public float getPeso() {
        return this.peso;
    }

    public int getVitorias() {
        return this.vitorias;
    }

    public void setAltura(float alt) {
        this.altura = alt;
    }

    private void setCategoria() {
        if (this.peso < 52.2)
            this.categoria = "inválido";
        else if (this.peso <= 70.3)
            this.categoria = "Leve";
        else if (this.peso <= 83.9)
            this.categoria = "Médio";
        else if (this.peso <= 120.2)
            this.categoria = "Pesado";
        else
            this.categoria = "Inválido";
    }

    public void setDerrotas(int der) {
        this.derrotas = der;
    }

    public void setEmpates(int emp) {
        this.empates = emp;
    }

    public void setIdade(int ida) {
        this.idade = ida;
    }

    public void setNacionalidade(String nac) {
        this.nacionalidade = nac;
    }

    public void setNome(String nom) {
        this.nome = nom;
    }

    public void setPeso(float pes) {
        this.peso = pes;
        this.setCategoria();
    }

    public void setVitorias(int vit) {
        this.vitorias = vit;
    }
}
