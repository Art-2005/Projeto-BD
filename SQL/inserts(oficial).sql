
-- Clientes
INSERT INTO cliente (nome, numerocadastro, telefone, historico, servicos, email) VALUES
('Hospital Esperança', 'C001', '8133334444', 'Manutenção de extintores', 'Extintores', 'hospital@esperanca.com.br'),
('Shopping Recife S/A', 'C002', '8133335555', 'Verificação anual', 'Sprinklers', 'contato@shoppingrecife.com.br'),
('UNINASSAU', 'C003', '8133336666', 'Inspeção técnica', 'Hidrantes', 'infra@uninassau.edu.br'),
('UFPE', 'C004', '8133337777', 'Teste de pressão', 'Mangueiras', 'manutencao@ufpe.br'),
('Porto Digital', 'C005', '8133338888', 'Instalação de rede', 'Alarme Incêndio', 'tech@portodigital.org'),
('Escola Modelo', 'C006', '8133339999', 'Revisão semestral', 'Extintores', 'direcao@escolamodelo.edu');

-- Empresas
INSERT INTO empresa (cnpj, nome, nomeFantasia, estado, rua, cep, numero, bairro, chefia) VALUES
('33.541.368/0001-16', 'Companhia Hidro Elétrica do São Francisco', 'CHESF', 'PE', 'Rua Delmiro Gouveia', '50761-901', '333', 'San Martin', 'Rafael Monteiro'),
('10.970.887/0001-02', 'FedEx Brasil Logística e Transporte Ltda', 'FedEx', 'PE', 'Rua Padre Carapuceiro', '51020-280', '858', 'Boa Viagem', 'Luciana Ramos'),
('98.765.432/0001-11', 'Petrobras Distribuidora S/A', 'BR', 'PE', 'Av. Recife', '50780-000', '700', 'Ipsep', 'Rodrigo Siqueira'),
('12.345.678/0001-99', 'Dataprev Tecnologia', 'Dataprev', 'PE', 'Rua da Aurora', '50050-000', '321', 'Boa Vista', 'Tânia Melo');

-- Funcionários
INSERT INTO funcionario (nome, cpf, salario, estado, bairro, cep, rua, numero, gerencia, chefia, cargo, email, telefone) VALUES
('João Silva', '12345678901', 2500.0, 'PE', 'Boa Viagem', '51020-280', 'Rua Padre Carapuceiro', '1200', 'Administrativo', 'Carlos Pinto', 'Chefe de Setor', 'joao.silva@empresa.com', '81999990001'),
('Maria Oliveira', '23456789012', 3200.0, 'PE', 'Casa Forte', '52060-320', 'Rua Igarassu', '450', 'Financeiro', 'Ana Souza', 'Analista Financeira', 'maria.oliveira@empresa.com', '81999990002'),
('Bruno Lima', '34567890123', 2900.0, 'PE', 'Madalena', '50710-000', 'Rua Real da Torre', '50', 'TI', 'Carlos Pinto', 'Suporte Técnico', 'bruno.lima@empresa.com', '81999990003'),
('Carla Mendes', '45678901234', 4100.0, 'PE', 'Derby', '52010-010', 'Av. Agamenon Magalhães', '1000', 'Jurídico', 'Patrícia Rocha', 'Advogada', 'carla.mendes@empresa.com', '81999990004');

-- Manutenções
INSERT INTO manutencao (numeroregistro, data, historico) VALUES
('M101', '2025-06-01', 'Inspeção preventiva de extintores'),
('M102', '2025-06-10', 'Revisão anual de hidrantes'),
('M103', '2025-06-15', 'Teste de mangueiras'),
('M104', '2025-06-20', 'Troca de válvulas de pressão'),
('M105', '2025-06-25', 'Atualização de sinalização de segurança');

-- Comerciais
INSERT INTO comercial (nomeEmpresa, cnpj, telefone, estado, bairro, cep, rua, numero) VALUES
('C001', '11.111.111/0001-11', '8133300001', 'PE', 'Boa Vista', '50070-000', 'Rua das Fronteiras', '234'),
('C002', '22.222.222/0001-22', '8133300002', 'PE', 'Derby', '52010-010', 'Av. Agamenon Magalhães', '900'),
('C004', '44.444.444/0001-44', '8133300004', 'PE', 'Casa Forte', '52060-000', 'Rua Xavier Marques', '18'),
('C005', '55.555.555/0001-66', '8133300006', 'PE', 'Espinheiro', '52020-000', 'Rua da Hora', '120');

-- Residenciais
INSERT INTO residencial (nome_residencial, cnpj, telefone, estado, bairro, cep, rua, numero, fk_Cliente_numerocadastro) VALUES
('Residencial Boa Vida', '33.333.333/0001-33', '8133300003', 'PE', 'Tamarineira', '52051-000', 'Rua Amazonas', '123', 'C001'),
('Condomínio Mar Azul', '66.666.666/0001-66', '8133300007', 'PE', 'Pina', '51011-000', 'Rua República Árabe', '77', 'C002'),
('Condomínio Bosque Verde', '77.777.777/0001-77', '8133300008', 'PE', 'Graças', '52011-000', 'Rua Real', '34', 'C003');

-- Balcões
INSERT INTO balcao (cnpj, telefone, estado, bairro, cep, rua, numero, fk_Cliente_numerocadastro) VALUES
('55.555.555/0001-55', '8133300005', 'PE', 'Madalena', '50710-000', 'Rua Real da Torre', '45', 'C003'),
('66.666.666/0001-66', '8133300006', 'PE', 'Boa Viagem', '51020-000', 'Rua dos Navegantes', '800', 'C001'),
('77.777.777/0001-77', '8133300009', 'PE', 'Cordeiro', '50711-000', 'Rua da Areia', '90', 'C002');

-- Industriais
INSERT INTO industrial (cnpj, telefone, estado, bairro, cep, rua, numero, nomeEmpresa, fk_Cliente_numerocadastro) VALUES
('77.777.777/0001-77', '8133300007', 'PE', 'Cordeiro', '50711-000', 'Rua da Lama', '89', 'Indústria Metalúrgica Boa Vista', 'C001'),
('88.888.888/0001-88', '8133300010', 'PE', 'Afogados', '50760-000', 'Rua Vinte e Quatro de Agosto', '456', 'Metalúrgica Santo Antônio', 'C002'),
('99.999.999/0001-99', '8133300011', 'PE', 'Jardim São Paulo', '50780-100', 'Av. Dois Rios', '300', 'Usina Química Nordeste', 'C003');

-- Requisições
INSERT INTO requisita (id, data, valor, fk_Empresa_CNPJ, fk_Manutencao_numeroregistro) VALUES
('REQ101', '2025-06-01', '180.00', '33.541.368/0001-16', 'M101'),
('REQ102', '2025-06-02', '220.00', '10.970.887/0001-02', 'M102'),
('REQ103', '2025-06-12', '190.00', '98.765.432/0001-11', 'M103'),
('REQ104', '2025-06-22', '300.00', '12.345.678/0001-99', 'M105');
