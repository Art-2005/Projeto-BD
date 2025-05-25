

DELIMITER //

CREATE PROCEDURE proc_dashboard_esm (
    IN metrica VARCHAR(50)
)
BEGIN
    -- 1. Empresas por bairro
    IF metrica = 'empresas_bairro' THEN
        SELECT bairro AS categoria, COUNT(*) AS total
        FROM empresa
        GROUP BY bairro
        ORDER BY total DESC;

    -- 2. Média salarial por bairro
    ELSEIF metrica = 'salario_bairro' THEN
        SELECT bairro AS categoria, 
               ROUND(AVG(CAST(salario AS DECIMAL(10,2))), 2) AS total
        FROM funcionario
        GROUP BY bairro
        ORDER BY total DESC;

    -- 3. Clientes por tipo de serviço
    ELSEIF metrica = 'clientes_servico' THEN
        SELECT servicos AS categoria, COUNT(*) AS total
        FROM cliente
        GROUP BY servicos
        ORDER BY total DESC;

    -- 4. Requisições por Empresa (corrigido)
    ELSEIF metrica = 'requisicoes_empresa' THEN
        SELECT e.nomeFantasia AS categoria, COUNT(*) AS total
        FROM requisita r
        JOIN empresa e ON r.fk_Empresa_CNPJ = e.cnpj
        GROUP BY e.nomeFantasia
        ORDER BY total DESC;

    -- 5. Manutenções por mês (usa data de manutencao)
    ELSEIF metrica = 'manutencoes_mes' THEN
        SELECT DATE_FORMAT(STR_TO_DATE(data, '%Y-%m-%d'), '%Y-%m') AS categoria, COUNT(*) AS total
        FROM manutencao
        GROUP BY categoria
        ORDER BY categoria DESC;

    -- 6. Funcionários por estado
    ELSEIF metrica = 'funcionarios_estado' THEN
        SELECT estado AS categoria, COUNT(*) AS total
        FROM funcionario
        GROUP BY estado
        ORDER BY total DESC;

    -- 7. Residenciais por bairro
    ELSEIF metrica = 'residenciais_bairro' THEN
        SELECT bairro AS categoria, COUNT(*) AS total
        FROM residencial
        GROUP BY bairro
        ORDER BY total DESC;

    -- 8. Valor total por empresa (corrigido)
    ELSEIF metrica = 'valor_total_empresa' THEN
        SELECT e.nomeFantasia AS categoria, 
               SUM(CAST(r.valor AS DECIMAL(10,2))) AS total
        FROM requisita r
        JOIN empresa e ON r.fk_Empresa_CNPJ = e.cnpj
        GROUP BY e.nomeFantasia
        ORDER BY total DESC;

    -- 9. Total por tipo de estabelecimento
    ELSEIF metrica = 'total_estabelecimentos' THEN
        SELECT 'Comercial' AS categoria, COUNT(*) AS total FROM comercial
        UNION
        SELECT 'Residencial', COUNT(*) FROM residencial
        UNION
        SELECT 'Balcao', COUNT(*) FROM balcao
        UNION
        SELECT 'Industrial', COUNT(*) FROM industrial;

    -- 10. Clientes com mais vínculos
    ELSEIF metrica = 'clientes_vinculos' THEN
        SELECT c.nome AS categoria, COUNT(*) AS total
        FROM cliente c
        LEFT JOIN residencial r ON r.fk_Cliente_numerocadastro = c.numerocadastro
        LEFT JOIN balcao b ON b.fk_Cliente_numerocadastro = c.numerocadastro
        LEFT JOIN industrial i ON i.fk_Cliente_numerocadastro = c.numerocadastro
        GROUP BY c.nome
        ORDER BY total DESC;

    -- Métrica inválida
    ELSE
        SELECT 'Métrica inválida' AS categoria, 0 AS total;
    END IF;
END;
//

DELIMITER ;