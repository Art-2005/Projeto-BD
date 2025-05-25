create database esmextintores;
CREATE TABLE cliente (
    numerocadastro VARCHAR(100) primary key,
    nome VARCHAR(100),
    telefone VARCHAR(100),
    historico VARCHAR(100),
    servicos VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE empresa (
    cnpj VARCHAR(100) primary key,
    nome VARCHAR(100),
    nomeFantasia VARCHAR(100),
    estado VARCHAR(100),
    rua VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(100),
    numero VARCHAR(100),
    chefia VARCHAR(100)
);

CREATE TABLE funcionario (
    cpf VARCHAR(100) primary key,
    nome VARCHAR(100),
    cargo VARCHAR(100),
    telefone VARCHAR(100),
    email VARCHAR(100),
    salario VARCHAR(100),
    estado VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(100),
    gerencia VARCHAR(100),
    chefia VARCHAR(100)
);


CREATE TABLE manutencao (
    numeroregistro VARCHAR(100) primary key,
    data VARCHAR(100),
    historico VARCHAR(100)
);

CREATE TABLE balcao (
    cnpj VARCHAR(100) primary key,
    telefone VARCHAR(100),
    estado VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(100),
    fk_Cliente_numerocadastro VARCHAR(100)
);

CREATE TABLE comercial (
    cnpj VARCHAR(100) primary key,
    telefone VARCHAR(100),
    estado VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(100),
    nomeEmpresa VARCHAR(100)
);

CREATE TABLE residencial (
    cnpj VARCHAR(100) primary key,
    telefone VARCHAR(100),
    estado VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(100),
    nome_residencial VARCHAR(100),
    fk_Cliente_numerocadastro VARCHAR(100)
);

CREATE TABLE industrial (
    cnpj VARCHAR(100) primary key,
    telefone VARCHAR(100),
    estado VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(100),
    nomeEmpresa VARCHAR(100),
    fk_Cliente_numerocadastro VARCHAR(100),
    fk_Cliente_numerocadastro_1 VARCHAR(100)
);

CREATE TABLE requisita (
    id VARCHAR(100) primary key,
    data VARCHAR(100),
    valor VARCHAR(100),
    fk_Empresa_CNPJ VARCHAR(100),
    fk_Manutencao_numeroregistro VARCHAR(100)
);


ALTER TABLE comercial ADD CONSTRAINT FK_Comercial_2
    FOREIGN KEY (nomeEmpresa)
    REFERENCES cliente(numerocadastro);


-- Residencial: OK
ALTER TABLE Residencial ADD CONSTRAINT FK_Residencial_2
    FOREIGN KEY (fk_Cliente_numerocadastro)
    REFERENCES Cliente (numerocadastro);

-- Balcao: OK
ALTER TABLE Balcao ADD CONSTRAINT FK_Balcao_2
    FOREIGN KEY (fk_Cliente_numerocadastro)
    REFERENCES Cliente (numerocadastro);

-- Requisita: corrigido nome da coluna para fk_Manutencao_numeroregistro
ALTER TABLE Requisita ADD CONSTRAINT FK_Requisita_1
    FOREIGN KEY (fk_Manutencao_numeroregistro)
    REFERENCES Manutencao (numeroregistro);

-- Industrial: OK
ALTER TABLE Industrial ADD CONSTRAINT FK_Industrial_3
    FOREIGN KEY (fk_Cliente_numerocadastro_1)
    REFERENCES Cliente (numerocadastro);

-- Funcionario: corrigindo apenas se tiver sido criada com G maiúsculo
ALTER TABLE Funcionario
CHANGE COLUMN Gerencia gerencia VARCHAR(100);
