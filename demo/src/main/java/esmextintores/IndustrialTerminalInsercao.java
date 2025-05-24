package esmextintores;/*package esmextintores;

import esmextintores.model.Industrial;
import esmextintores.repository.IndustrialRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class IndustrialTerminalInsercao implements CommandLineRunner {

    private final IndustrialRepository repository;

    public IndustrialTerminalInsercao(IndustrialRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("📥 INSERÇÃO DE INDUSTRIAL PELO TERMINAL");
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

        System.out.print("Nome da Empresa: ");
        String nomeEmpresa = scanner.nextLine();

        Industrial novoIndustrial = new Industrial(
                cnpj,
                telefone,
                estado,
                bairro,
                cep,
                rua,
                numero,
                nomeEmpresa
        );

        repository.save(novoIndustrial);
    }
}
*/