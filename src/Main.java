import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        EmpresaDAO empresaDAO = new EmpresaDAO();

        System.out.print("CNPJ: ");
        String cnpj = sc.nextLine();

        System.out.print("Nome: ");
        String nome = sc.nextLine();

        System.out.print("Nome Fantasia: ");
        String nomeFantasia = sc.nextLine();

        System.out.print("Estado: ");
        String estado = sc.nextLine();

        System.out.print("Rua: ");
        String rua = sc.nextLine();

        System.out.print("Bairro: ");
        String bairro = sc.nextLine();

        System.out.print("CEP: ");
        String cep = sc.nextLine();

        System.out.print("Número: ");
        String numero = sc.nextLine();

        System.out.print("Chefia: ");
        String chefia = sc.nextLine();

        Empresa empresa = new Empresa(cnpj, nome, nomeFantasia, estado, rua, bairro, cep, numero, chefia);
        empresaDAO.inserirEmpresa(empresa);
    }
}
