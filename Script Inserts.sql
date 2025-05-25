-- 1. Quantidade de empresas por bairro
SELECT bairro, COUNT(*) AS total_empresas
FROM Empresa
GROUP BY bairro
ORDER BY total_empresas DESC;

-- 2. Funcionários por estado
SELECT estado, COUNT(*) AS total_funcionarios
FROM Funcionario
GROUP BY estado
ORDER BY total_funcionarios DESC;

-- 3. Média salarial dos funcionários
SELECT AVG(salario) AS media_salarial
FROM Funcionario;

-- 4. Lista de clientes com mais serviços contratados
SELECT nome, servicos
FROM Cliente
ORDER BY servicos DESC;

-- 5. Empresas com nome fantasia contendo "Hospital"
SELECT * FROM Empresa
WHERE NomeFantasia LIKE '%Hospital%';

-- 6. Últimas manutenções registradas
SELECT * FROM Manutencao
ORDER BY data DESC
LIMIT 10;

-- 7. Total de registros em cada log
SELECT 'empresa' AS entidade, COUNT(*) 
AS total 
FROM log_empresa
UNION
SELECT 'funcionario', COUNT(*) FROM log_funcionario
UNION
SELECT 'cliente', COUNT(*) FROM log_cliente
UNION
SELECT 'manutencao', COUNT(*) FROM log_manutencao
UNION
SELECT 'comercial', COUNT(*) FROM log_comercial
UNION
SELECT 'residencial', COUNT(*) FROM log_residencial
UNION
SELECT 'balcao', COUNT(*) FROM log_balcao
UNION
SELECT 'requisita', COUNT(*) FROM log_requisita
UNION
SELECT 'industrial', COUNT(*) FROM log_industrial;

-- 8. Comerciais ordenados por bairro
SELECT bairro, COUNT(*) AS total_comerciais
FROM Comercial
GROUP BY bairro
ORDER BY total_comerciais DESC;

-- 9. Clientes que possuem residenciais vinculados
SELECT c.nome, COUNT(*) AS total_residenciais
FROM Cliente c
JOIN Residencial r ON r.fk_Cliente_numerocadastro = c.numerocadastro
GROUP BY c.nome;

-- 10. Indústrias com mesmo cliente vinculado duas vezes
SELECT *
FROM Industrial
WHERE fk_Cliente_numerocadastro = fk_Cliente_numerocadastro_1;