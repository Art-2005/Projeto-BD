DELIMITER //

CREATE PROCEDURE proc_dashboard_esm (
    IN entidade VARCHAR(20),
    IN metrica VARCHAR(20)
)
BEGIN
    -- EMPRESA
    IF entidade = 'empresa' THEN
        CASE
            WHEN metrica = 'quantidade' THEN
                SELECT COUNT(*) AS total_empresas FROM Empresa;

            WHEN metrica = 'por_bairro' THEN
                SELECT bairro, COUNT(*) AS total
                FROM Empresa
                GROUP BY bairro
                ORDER BY total DESC;

            WHEN metrica = 'por_chefia' THEN
                SELECT chefia, COUNT(*) AS total
                FROM Empresa
                GROUP BY chefia
                ORDER BY total DESC;
        END CASE;

    -- CLIENTE
    ELSEIF entidade = 'cliente' THEN
        CASE
            WHEN metrica = 'quantidade' THEN
                SELECT COUNT(*) AS total_clientes FROM Cliente;

            WHEN metrica = 'por_servico' THEN
                SELECT servicos, COUNT(*) AS total
                FROM Cliente
                GROUP BY servicos
                ORDER BY total DESC;
        END CASE;

    -- FUNCIONARIO
    ELSEIF entidade = 'funcionario' THEN
        CASE
            WHEN metrica = 'quantidade' THEN
                SELECT COUNT(*) AS total_funcionarios FROM Funcionario;

            WHEN metrica = 'media_salario' THEN
                SELECT AVG(salario) AS media_salarial FROM Funcionario;

            WHEN metrica = 'por_estado' THEN
                SELECT estado, COUNT(*) AS total
                FROM Funcionario
                GROUP BY estado;
        END CASE;

    -- MANUTENÇÃO
    ELSEIF entidade = 'manutencao' THEN
        CASE
            WHEN metrica = 'quantidade' THEN
                SELECT COUNT(*) AS total_manutencoes FROM Manutencao;

            WHEN metrica = 'ultimas' THEN
                SELECT * FROM Manutencao ORDER BY data DESC LIMIT 10;
        END CASE;
    END IF;
END;
//

DELIMITER ;
