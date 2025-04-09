import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class EmpresaDAO {

    public void inserirEmpresa(Empresa empresa) {
        String sql = "INSERT INTO empresa (cnpj, nome, nomeFantasia, estado, rua, bairro, cep, numero, chefia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = ConexaoMySQL.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, empresa.getCNPJ());
            stmt.setString(2, empresa.getNome());
            stmt.setString(3, empresa.getNomeFantasia());
            stmt.setString(4, empresa.getEstado());
            stmt.setString(5, empresa.getRua());
            stmt.setString(6, empresa.getBairro());
            stmt.setString(7, empresa.getCEP());
            stmt.setString(8, empresa.getNumero());
            stmt.setString(9, empresa.getChefia());

            stmt.executeUpdate();
            System.out.println("Empresa inserida com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
