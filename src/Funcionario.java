public class Funcionario {
    private String nome;
    private String CPF;
    private float salario;
    private String estado;
    private String bairro;
    private String CEP;
    private String rua;
    private String numero;
    private String Gerencia;
    private String chefia;

    public Funcionario(String nome, String CPF, float salario, String estado, String bairro, String CEP, String rua, String numero, String chefia){
        this.nome = nome;
        this.CPF = CPF;
        this.salario = salario;
        this.estado = estado;
        this.bairro = bairro;
        this.CEP = CEP;
        this.rua = rua;
        this.numero = numero;
        this.Gerencia = Gerencia;
        this.chefia = chefia;
    }
}
