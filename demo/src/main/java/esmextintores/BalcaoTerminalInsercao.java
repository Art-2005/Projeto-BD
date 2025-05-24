package esmextintores;/*package esmextintores;

import esmextintores.model.Balcao;
import esmextintores.repository.BalcaoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class BalcaoTerminalInsercao implements CommandLineRunner {

    private final BalcaoRepository repository;

    public BalcaoTerminalInsercao(BalcaoRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("📥 INSERÇÃO DE BALCÃO PELO TERMINAL");
        System.out.print("CNPJ: ");
        String cnpj = scanner.nextLine();

        System.out.print("Telefone: ");
        String telefone = scanner.nextLine();

        System.out.print("Estado: ");
        String estado = scanner.nextLine();

        System.out.print("Bairro: ");
        String bairro = scanner.nextLine();

        System.out.print("CEP: ");
        String cep = scanner.nextLine();

        System.out.print("Rua: ");
        String rua = scanner.nextLine();

        System.out.print("Número: ");
        String numero = scanner.nextLine();

        Balcao novoBalcao = new Balcao(
                cnpj,
                telefone,
                estado,
                bairro,
                cep,
                rua,
                numero
        );

        repository.save(novoBalcao);

    }
}
*/