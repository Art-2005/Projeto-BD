/*package esmextintores;

import esmextintores.model.Funcionario;
import esmextintores.repository.FuncionarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class FuncionarioTerminalInsercao implements CommandLineRunner {

    private final FuncionarioRepository repository;

    public FuncionarioTerminalInsercao(FuncionarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("📥 INSERÇÃO DE FUNCIONÁRIO PELO TERMINAL");
        System.out.print("CPF: ");
        String cpf = scanner.nextLine();

        System.out.print("Nome: ");
        String nome = scanner.nextLine();

        System.out.print("Cargo: ");
        String cargo = scanner.nextLine();

        System.out.print("Telefone: ");
        String telefone = scanner.nextLine();

        System.out.print("Email: ");
        String email = scanner.nextLine();

        Funcionario novoFuncionario = new Funcionario(
                cpf,
                nome,
                cargo,
                telefone,
                email
        );

        repository.save(novoFuncionario);
    }
}*/
