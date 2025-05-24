package esmextintores;/*package esmextintores;

import esmextintores.model.Empresa;
import esmextintores.repository.EmpresaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class EmpresaTerminalInsercao implements CommandLineRunner {

    private final EmpresaRepository repository;

    public EmpresaTerminalInsercao(EmpresaRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        boolean continuar = true;

        while (continuar) {
            System.out.println("📥 GESTÃO DE EMPRESAS PELO TERMINAL");
            System.out.println("Escolha uma opção:");
            System.out.println("1. Inserir Empresa");
            System.out.println("2. Remover Empresa");
            System.out.println("3. Editar Empresa");
            System.out.println("4. Sair");
            System.out.print("Opção: ");
            int opcao = Integer.parseInt(scanner.nextLine());

            switch (opcao) {
                case 1:
                    inserirEmpresa(scanner);
                    break;
                case 2:
                    removerEmpresa(scanner);
                    break;
                case 3:
                    editarEmpresa(scanner);
                    break;
                case 4:
                    continuar = false;
                    System.out.println("Saindo do sistema...");
                    break;
                default:
                    System.out.println("Opção inválida!");
                    break;
            }
        }
    }

    private void inserirEmpresa(Scanner scanner) {
        System.out.println("📥 INSERÇÃO DE EMPRESA PELO TERMINAL");

        System.out.print("CNPJ: ");
        String cnpj = scanner.nextLine();

        System.out.print("Nome: ");
        String nome = scanner.nextLine();

        System.out.print("Nome Fantasia: ");
        String nomeFantasia = scanner.nextLine();

        System.out.print("Estado: ");
        String estado = scanner.nextLine();

        System.out.print("Rua: ");
        String rua = scanner.nextLine();

        System.out.print("Bairro: ");
        String bairro = scanner.nextLine();

        System.out.print("CEP: ");
        String cep = scanner.nextLine();

        System.out.print("Número: ");
        String numero = scanner.nextLine();

        System.out.print("Chefia: ");
        String chefia = scanner.nextLine();

        Empresa novaEmpresa = new Empresa(
                cnpj,
                nome,
                nomeFantasia,
                estado,
                rua,
                bairro,
                cep,
                numero,
                chefia
        );

        repository.save(novaEmpresa);
        System.out.println("\n✅ Empresa inserida com sucesso!");

        listarEmpresas();
    }

    private void removerEmpresa(Scanner scanner) {
        System.out.println("📤 REMOÇÃO DE EMPRESA PELO TERMINAL");

        System.out.print("Digite o CNPJ da empresa a ser removida: ");
        String cnpj = scanner.nextLine();

        Empresa empresa = repository.findByCnpj(cnpj);

        if (empresa != null) {
            repository.delete(empresa);
            System.out.println("\n✅ Empresa removida com sucesso!");
        } else {
            System.out.println("\n❌ Empresa não encontrada com esse CNPJ.");
        }

        listarEmpresas();
    }

    private void editarEmpresa(Scanner scanner) {
        System.out.println("✏️ EDIÇÃO DE EMPRESA PELO TERMINAL");

        System.out.print("Digite o CNPJ da empresa a ser editada: ");
        String cnpj = scanner.nextLine();

        Empresa empresa = repository.findByCnpj(cnpj);

        if (empresa != null) {
            System.out.println("Digite os novos dados ou pressione Enter para manter o valor atual.");

            System.out.print("Novo Nome: ");
            String nome = scanner.nextLine();
            if (!nome.isEmpty()) empresa.setNome(nome);

            System.out.print("Novo Nome Fantasia: ");
            String nomeFantasia = scanner.nextLine();
            if (!nomeFantasia.isEmpty()) empresa.setNomeFantasia(nomeFantasia);

            System.out.print("Novo Estado: ");
            String estado = scanner.nextLine();
            if (!estado.isEmpty()) empresa.setEstado(estado);

            System.out.print("Nova Rua: ");
            String rua = scanner.nextLine();
            if (!rua.isEmpty()) empresa.setRua(rua);

            System.out.print("Novo Bairro: ");
            String bairro = scanner.nextLine();
            if (!bairro.isEmpty()) empresa.setBairro(bairro);

            System.out.print("Novo CEP: ");
            String cep = scanner.nextLine();
            if (!cep.isEmpty()) empresa.setCep(cep);

            System.out.print("Novo Número: ");
            String numero = scanner.nextLine();
            if (!numero.isEmpty()) empresa.setNumero(numero);

            System.out.print("Nova Chefia: ");
            String chefia = scanner.nextLine();
            if (!chefia.isEmpty()) empresa.setChefia(chefia);

            repository.save(empresa);
            System.out.println("\n✅ Empresa editada com sucesso!");
        } else {
            System.out.println("\n❌ Empresa não encontrada com esse CNPJ.");
        }

        listarEmpresas();
    }

    private void listarEmpresas() {
        System.out.println("\n📋 Lista de todas as empresas:");
        repository.findAll().forEach(emp ->
                System.out.println(emp.getCnpj() + " - " + emp.getNomeFantasia())
        );
    }
}
*/