import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoMySQL {
    public static Connection getConnection() {
        String url = "jdbc:mysql://localhost:3306/esm extintores";
        String usuario = "root";
        String senha = "12345";

        try {
            return DriverManager.getConnection(url, usuario, senha);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao conectar: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        Connection conn = getConnection();
        System.out.println("Conexão realizada com sucesso!");
    }
}
