create database esmextintores;

CREATE TABLE Empresa (
    CNPJ varchar(100) PRIMARY KEY,
    Nome varchar(100),
    NomeFantasia varchar(100),
    estado varchar(100),
    rua varchar(100),
    CEP varchar(100),
    numero varchar(100),
    bairro varchar(100),
    chefia varchar(100)
);

CREATE TABLE Funcionario (
    nome varchar(100),
    CPF varchar(100) PRIMARY KEY,
    salario float,
    estado varchar(100),
    bairro varchar(100),
    CEP varchar(100),
    rua varchar(100),
    numero varchar(100),
    Gerencia varchar(100),
    chefia varchar(100)
);

CREATE TABLE Cliente (
    nome varchar(100),
    numerocadastro varchar(100) PRIMARY KEY,
    telefone char,		
    historico varchar(100),
    servicos varchar(100),
    email varchar(100)
);

CREATE TABLE Manuntencao (
    data date,
    numeroregistro varchar(100) PRIMARY KEY,
    historico varchar(100)
);

CREATE TABLE Comercial (
    nome_empresa varchar(100),
    CNPJ varchar(100) PRIMARY KEY,
    telefone char,
    estado varchar(100),
    bairro varchar(100),
    CEP varchar(100),
    rua varchar(100),
    numero varchar(100)
);

CREATE TABLE Residencial (
    nome_residencial varchar(100),
    CNPJ varchar(100) PRIMARY KEY,
    telefone char,
    estado varchar(100),
    bairro varchar(100),
    CEP varchar(100),
    rua varchar(100),
    numero varchar(100),
    fk_Cliente_numerocadastro varchar(100)
);

CREATE TABLE Balcao (
    CNPJ varchar(100) PRIMARY KEY,
    telefone char,
    estado varchar(100),
    bairro varchar(100),
    CEP varchar(100),
    rua varchar(100),
    numero varchar(100),
    fk_Cliente_numerocadastro varchar(100)
);

CREATE TABLE Requisita (
    fk_Manuntencao_numeroregistro varchar(100),
    fk_Empresa_CNPJ varchar(100),
    valor varchar(100),
    data date,
    PRIMARY KEY (fk_Manuntencao_numeroregistro, fk_Empresa_CNPJ)
);

CREATE TABLE Industrial (
    CNPJ varchar(100) PRIMARY KEY,
    telefone char,
    estado varchar(100),
    bairro varchar(100),
    CEP varchar(100),
    rua varchar(100),
    numero varchar(100),
    fk_Cliente_numerocadastro varchar(100),
    nome_empresa varchar(100),
    fk_Cliente_numerocadastro_1 varchar(100)
);

ALTER TABLE Comercial ADD CONSTRAINT FK_Comercial_2
    FOREIGN KEY (nome_empresa)
    REFERENCES Cliente (numerocadastro);

ALTER TABLE Residencial ADD CONSTRAINT FK_Residencial_2
    FOREIGN KEY (fk_Cliente_numerocadastro)
    REFERENCES Cliente (numerocadastro);

ALTER TABLE Balcao ADD CONSTRAINT FK_Balcao_2
    FOREIGN KEY (fk_Cliente_numerocadastro)
    REFERENCES Cliente (numerocadastro);

ALTER TABLE Requisita ADD CONSTRAINT FK_Requisita_1
    FOREIGN KEY (fk_Manuntencao_numeroregistro)
    REFERENCES Manuntencao (numeroregistro);

ALTER TABLE Requisita ADD CONSTRAINT FK_Requisita_2
    FOREIGN KEY (fk_Empresa_CNPJ)
    REFERENCES Empresa (CNPJ);

ALTER TABLE Industrial ADD CONSTRAINT FK_Industrial_3
    FOREIGN KEY (fk_Cliente_numerocadastro_1)
    REFERENCES Cliente (numerocadastro);

INSERT INTO empresa (CNPJ, Nome, NomeFantasia, estado, rua, CEP, numero, bairro, chefia) VALUES
('12.345.678/0001-01', 'Recife Tecnologia LTDA', 'Recife Tech', 'PE', 'Rua do Sol', '50030-230', '120', 'Boa Vista', 'João Silva'),
('23.456.789/0001-02', 'Casa do Sertão Alimentos', 'Sertão Alimentos', 'PE', 'Rua das Mangueiras', '52041-450', '45', 'Casa Amarela', 'Maria Oliveira'),
('34.567.890/0001-03', 'Shopping Recife S/A', 'Shopping Recife', 'PE', 'Av. Domingos Ferreira', '51021-040', '1000', 'Boa Viagem', 'Carlos Souza'),
('45.678.901/0001-04', 'Gráfica Pernambuco LTDA', 'Pernambuco Gráfica', 'PE', 'Rua da Aurora', '50050-000', '210', 'Santo Amaro', 'Fernanda Lima'),
('56.789.012/0001-05', 'Hospital Boa Saúde', 'HBS', 'PE', 'Av. Conde da Boa Vista', '50060-004', '800', 'Boa Vista', 'Dr. Ricardo Alves'),
('67.890.123/0001-06', 'Construções Nordestinas LTDA', 'Nordeste Construtora', 'PE', 'Rua Gervásio Pires', '50050-070', '350', 'Santo Amaro', 'Juliana Castro'),
('78.901.234/0001-07', 'Pernambuco Logística S/A', 'PE Logística', 'PE', 'Av. Recife', '50721-000', '1500', 'Areias', 'Roberto Menezes'),
('89.012.345/0001-08', 'Mercado Bom Preço', 'Bom Preço', 'PE', 'Rua da Palma', '50010-080', '99', 'São José', 'Ana Beatriz'),
('90.123.456/0001-09', 'Engarrafadora do Agreste', 'Água Agreste', 'PE', 'Rua do Progresso', '55002-000', '400', 'Centro', 'Gabriel Ramos'),
('11.234.567/0001-10', 'Tecnologia do Futuro LTDA', 'Tech Futuro', 'PE', 'Rua Real da Torre', '50711-240', '765', 'Madalena', 'Larissa Pontes'),
('22.345.678/0001-11', 'Agroindustrial do Sertão', 'Agro Sertão', 'PE', 'Rua Nova', '56302-100', '50', 'Centro', 'Diego Martins'),
('33.456.789/0001-12', 'Confecções Olindense', 'Olinda Fashion', 'PE', 'Rua do Amparo', '53120-090', '22', 'Amparo', 'Renata Farias'),
('44.567.890/0001-13', 'Autopeças Recife LTDA', 'Recife Autopeças', 'PE', 'Av. Norte', '52120-001', '1234', 'Torreão', 'Eduardo Gomes'),
('55.678.901/0001-14', 'Farmácia Popular PE', 'Popular Farma', 'PE', 'Rua dos Navegantes', '51021-010', '321', 'Boa Viagem', 'Cláudia Rocha'),
('66.789.012/0001-15', 'Laticínios Agreste LTDA', 'Agreste Leite', 'PE', 'Rua do Comércio', '55100-000', '88', 'Centro', 'Paulo Araújo');


