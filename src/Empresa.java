public class Empresa {
    private String CNPJ;
    private String Nome;
    private String NomeFantasia;
    private String estado;
    private String rua;
    private String bairro;
    private String CEP;
    private String numero;
    private String chefia;

    public Empresa(String CNPJ, String Nome, String NomeFantasia, String estado, String rua, String bairro, String CEP, String numero, String chefia){
        this.CNPJ = CNPJ;
        this.Nome = Nome;
        this.NomeFantasia = NomeFantasia;
        this.estado = estado;
        this.rua = rua;
        this.bairro = bairro;
        this.CEP = CEP;
        this.numero = numero;
        this.chefia = chefia;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public String getNome() {
        return Nome;
    }

    public String getNomeFantasia() {
        return NomeFantasia;
    }

    public String getEstado() {
        return estado;
    }

    public String getRua() {
        return rua;
    }

    public String getBairro() {
        return bairro;
    }

    public String getCEP() {
        return CEP;
    }

    public String getNumero() {
        return numero;
    }

    public String getChefia() {
        return chefia;
    }
}
