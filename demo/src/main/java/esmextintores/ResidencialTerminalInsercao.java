package esmextintores;/*package esmextintores;

import esmextintores.model.Residencial;
import esmextintores.repository.ResidencialRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Scanner;

@Component
public class ResidencialTerminalInsercao implements CommandLineRunner {

    private final ResidencialRepository repository;

    public ResidencialTerminalInsercao(ResidencialRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("🏠 INSERÇÃO DE RESIDENCIAL PELO TERMINAL");

        System.out.print("CNPJ: ");
        String cnpj = scanner.nextLine();

        System.out.print("Nome do Residencial: ");
        String nomeResidencial = scanner.nextLine();

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

        System.out.print("Número de Cadastro do Cliente Vinculado: ");
        String fkCliente = scanner.nextLine();

        Residencial novoResidencial = new Residencial();
        novoResidencial.setCnpj(cnpj);
        novoResidencial.setnome_residencial(nomeResidencial);
        novoResidencial.setTelefone(telefone);
        novoResidencial.setEstado(estado);
        novoResidencial.setBairro(bairro);
        novoResidencial.setCep(cep);
        novoResidencial.setRua(rua);
        novoResidencial.setNumero(numero);
        novoResidencial.setFk_Cliente_numerocadastro(fkCliente);

        repository.save(novoResidencial);

        System.out.println("✅ Residencial salvo com sucesso!");
    }
}
*/