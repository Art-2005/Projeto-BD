/*package esmextintores;

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

        System.out.println("\n📋 Lista de todas as empresas:");
        repository.findAll().forEach(emp ->
                System.out.println(emp.getCnpj() + " - " + emp.getNomeFantasia())
        );
    }
}

*/