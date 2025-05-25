-- Clientes
INSERT INTO cliente (nome, numerocadastro, telefone, historico, servicos, email) VALUES
('Hospital Esperança', 'C001', '8133334444', 'Manutenção de extintores', 'Extintores', 'hospital@esperanca.com.br'),
('Shopping Recife S/A', 'C002', '8133335555', 'Verificação anual', 'Sprinklers', 'contato@shoppingrecife.com.br'),
('UNINASSAU', 'C003', '8133336666', 'Inspeção técnica', 'Hidrantes', 'infra@uninassau.edu.br');

-- Empresas
INSERT INTO empresa (cnpj, nome, nomeFantasia, estado, rua, cep, numero, bairro, chefia) VALUES
('33.541.368/0001-16', 'Companhia Hidro Elétrica do São Francisco', 'CHESF', 'PE', 'Rua Delmiro Gouveia', '50761-901', '333', 'San Martin', 'Rafael Monteiro'),
('10.970.887/0001-02', 'FedEx Brasil Logística e Transporte Ltda', 'FedEx', 'PE', 'Rua Padre Carapuceiro', '51020-280', '858', 'Boa Viagem', 'Luciana Ramos');

-- Funcionários
INSERT INTO funcionario (nome, cpf, salario, estado, bairro, cep, rua, numero, gerencia, chefia, cargo, email, telefone) VALUES
('João Silva', '12345678901', 2500.0, 'PE', 'Boa Viagem', '51020-280', 'Rua Padre Carapuceiro', '1200', 'Administrativo', 'Carlos Pinto', 'Chefe de Setor', 'joao.silva@empresa.com', '81999990001'),
('Maria Oliveira', '23456789012', 3200.0, 'PE', 'Casa Forte', '52060-320', 'Rua Igarassu', '450', 'Financeiro', 'Ana Souza', 'Analista Financeira', 'maria.oliveira@empresa.com', '81999990002');

-- Manutenções
INSERT INTO manutencao (numeroregistro, data, historico) VALUES
('M101', '2025-06-01', 'Inspeção preventiva de extintores'),
('M102', '2025-06-10', 'Revisão anual de hidrantes');

-- Comerciais
INSERT INTO comercial (nomeEmpresa, cnpj, telefone, estado, bairro, cep, rua, numero) VALUES
('C001', '11.111.111/0001-11', '8133300001', 'PE', 'Boa Vista', '50070-000', 'Rua das Fronteiras', '234'),
('C002', '22.222.222/0001-22', '8133300002', 'PE', 'Derby', '52010-010', 'Av. Agamenon Magalhães', '900');

-- Residenciais
INSERT INTO residencial (nome_residencial, cnpj, telefone, estado, bairro, cep, rua, numero, fk_Cliente_numerocadastro) VALUES
('Residencial Boa Vida', '33.333.333/0001-33', '8133300003', 'PE', 'Tamarineira', '52051-000', 'Rua Amazonas', '123', 'C001');

-- Balcões
INSERT INTO balcao (cnpj, telefone, estado, bairro, cep, rua, numero, fk_Cliente_numerocadastro) VALUES
('55.555.555/0001-55', '8133300005', 'PE', 'Madalena', '50710-000', 'Rua Real da Torre', '45', 'C003');

-- Industriais
INSERT INTO industrial (cnpj, telefone, estado, bairro, cep, rua, numero, nomeEmpresa, fk_Cliente_numerocadastro, fk_Cliente_numerocadastro_1) VALUES
('77.777.777/0001-77', '8133300007', 'PE', 'Cordeiro', '50711-000', 'Rua da Lama', '89', 'Indústria Metalúrgica Boa Vista', 'C001', 'C001');

-- Requisições
INSERT INTO requisita (id, data, valor, fk_Empresa_CNPJ, fk_Manutencao_numeroregistro) VALUES
('REQ101', '2025-06-01', '180.00', '33.541.368/0001-16', 'M101'),
('REQ102', '2025-06-02', '220.00', '10.970.887/0001-02', 'M102');