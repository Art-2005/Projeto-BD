package esmextintores;/*package esmextintores;

import esmextintores.model.Manutencao;
import esmextintores.repository.ManutencaoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Scanner;

@Component
public class ManutencaoTerminalInsercao implements CommandLineRunner {

    private final ManutencaoRepository repository;

    public ManutencaoTerminalInsercao(ManutencaoRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("📥 INSERÇÃO DE MANUTENÇÃO PELO TERMINAL");
        System.out.print("Número de Registro: ");
        String numeroregistro = scanner.nextLine();

        System.out.print("Data (AAAA-MM-DD): ");
        String dataInput = scanner.nextLine();
        LocalDate data = LocalDate.parse(dataInput);

        System.out.print("Histórico: ");
        String historico = scanner.nextLine();

        Manutencao novaManutencao = new Manutencao(
                numeroregistro,
                data,
                historico
        );

        repository.save(novaManutencao);
    }
}
*/