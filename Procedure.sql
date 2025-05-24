DELIMITER //

CREATE PROCEDURE proc_dashboard_esm (
    IN metrica VARCHAR(50)
)
BEGIN
    -- 1. Empresas por bairro
    IF metrica = 'empresas_bairro' THEN
        SELECT bairro AS categoria, COUNT(*) AS total
        FROM Empresa
        GROUP BY bairro
        ORDER BY total DESC;

    -- 2. Média salarial por bairro
    ELSEIF metrica = 'salario_bairro' THEN
        SELECT bairro AS categoria, ROUND(AVG(salario), 2) AS total
        FROM Funcionario
        GROUP BY bairro
        ORDER BY total DESC;

    -- 3. Clientes por tipo de serviço
    ELSEIF metrica = 'clientes_servico' THEN
        SELECT servicos AS categoria, COUNT(*) AS total
        FROM Cliente
        GROUP BY servicos
        ORDER BY total DESC;

    -- 4. Requisições de manutenção por empresa
	ELSEIF metrica = 'requisicoes_empresa' THEN
	    SELECT e.NomeFantasia AS categoria, COUNT(*) AS total
	    FROM Requisita r
	    JOIN Empresa e ON r.empresa_cnpj = e.CNPJ
	    GROUP BY e.NomeFantasia
	    ORDER BY total DESC;



    -- 5. Manutenções por mês
    ELSEIF metrica = 'manutencoes_mes' THEN
        SELECT DATE_FORMAT(data, '%Y-%m') AS categoria, COUNT(*) AS total
        FROM Manutencao
        GROUP BY categoria
        ORDER BY categoria DESC;

    -- 6. Funcionários por estado
    ELSEIF metrica = 'funcionarios_estado' THEN
        SELECT estado AS categoria, COUNT(*) AS total
        FROM Funcionario
        GROUP BY estado
        ORDER BY total DESC;

    -- 7. Residenciais por bairro
    ELSEIF metrica = 'residenciais_bairro' THEN
        SELECT bairro AS categoria, COUNT(*) AS total
        FROM Residencial
        GROUP BY bairro
        ORDER BY total DESC;

    -- 8. Valor total requisitado por empresa
    ELSEIF metrica = 'valor_total_empresa' THEN
        SELECT e.NomeFantasia AS categoria, 
               SUM(CAST(r.valor AS DECIMAL(10,2))) AS total
        FROM Requisita r
        JOIN Empresa e ON r.fk_Empresa_CNPJ = e.CNPJ
        GROUP BY e.NomeFantasia
        ORDER BY total DESC;

    -- 9. Total de estabelecimentos por tipo
    ELSEIF metrica = 'total_estabelecimentos' THEN
        SELECT 'Comercial' AS categoria, COUNT(*) AS total FROM Comercial
        UNION
        SELECT 'Residencial', COUNT(*) FROM Residencial
        UNION
        SELECT 'Balcao', COUNT(*) FROM Balcao
        UNION
        SELECT 'Industrial', COUNT(*) FROM Industrial;

    -- 10. Clientes com maior número de vínculos
    ELSEIF metrica = 'clientes_vinculos' THEN
        SELECT c.nome AS categoria, COUNT(*) AS total
        FROM Cliente c
        LEFT JOIN Residencial r ON r.fk_Cliente_numerocadastro = c.numerocadastro
        LEFT JOIN Balcao b ON b.fk_Cliente_numerocadastro = c.numerocadastro
        LEFT JOIN Industrial i ON i.fk_Cliente_numerocadastro = c.numerocadastro
        GROUP BY c.nome
        ORDER BY total DESC;

    -- Caso inválido
    ELSE
        SELECT 'Métrica inválida' AS categoria, 0 AS total;
    END IF;
END;
//

DELIMITER ;