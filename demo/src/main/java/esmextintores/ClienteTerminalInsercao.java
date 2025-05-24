package esmextintores;/*package esmextintores;

import esmextintores.model.Cliente;
import esmextintores.repository.ClienteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class ClienteTerminalInsercao implements CommandLineRunner {

    private final ClienteRepository repository;

    public ClienteTerminalInsercao(ClienteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("📥 INSERÇÃO DE CLIENTE PELO TERMINAL");
        System.out.print("Número de Cadastro: ");
        String numerocadastro = scanner.nextLine();

        System.out.print("Nome: ");
        String nome = scanner.nextLine();

        System.out.print("Telefone: ");
        String telefone = scanner.nextLine();

        System.out.print("Histórico: ");
        String historico = scanner.nextLine();

        System.out.print("Serviços: ");
        String servicos = scanner.nextLine();

        System.out.print("Email: ");
        String email = scanner.nextLine();

        Cliente novoCliente = new Cliente(
                numerocadastro,
                nome,
                telefone,
                historico,
                servicos,
                email
        );

        repository.save(novoCliente);

    }
}
*/