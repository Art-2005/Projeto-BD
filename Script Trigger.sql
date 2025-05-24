CREATE TABLE IF NOT EXISTS log_empresa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cnpj VARCHAR(100),
    acao VARCHAR(50),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE TRIGGER trg_empresa_insert
AFTER INSERT ON Empresa
FOR EACH ROW
BEGIN
    INSERT INTO log_empresa (cnpj, acao)
    VALUES (NEW.CNPJ, 'INSERIDO');
END;
//

DELIMITER ;

DELIMITER //
CREATE TRIGGER trg_empresa_update
AFTER UPDATE ON Empresa
FOR EACH ROW
BEGIN
    INSERT INTO log_empresa (cnpj, acao)
    VALUES (NEW.CNPJ, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_empresa_delete
AFTER DELETE ON Empresa
FOR EACH ROW
BEGIN
    INSERT INTO log_empresa (cnpj, acao)
    VALUES (OLD.CNPJ, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Funcionario
CREATE TABLE IF NOT EXISTS log_funcionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_funcionario_insert
AFTER INSERT ON Funcionario
FOR EACH ROW
BEGIN
    INSERT INTO log_funcionario (cpf, acao)
    VALUES (NEW.CPF, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_funcionario_update
AFTER UPDATE ON Funcionario
FOR EACH ROW
BEGIN
    INSERT INTO log_funcionario (cpf, acao)
    VALUES (NEW.CPF, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_funcionario_delete
AFTER DELETE ON Funcionario
FOR EACH ROW
BEGIN
    INSERT INTO log_funcionario (cpf, acao)
    VALUES (OLD.CPF, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Cliente
CREATE TABLE IF NOT EXISTS log_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_cliente_insert
AFTER INSERT ON Cliente
FOR EACH ROW
BEGIN
    INSERT INTO log_cliente (numerocadastro, acao)
    VALUES (NEW.numerocadastro, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_cliente_update
AFTER UPDATE ON Cliente
FOR EACH ROW
BEGIN
    INSERT INTO log_cliente (numerocadastro, acao)
    VALUES (NEW.numerocadastro, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_cliente_delete
AFTER DELETE ON Cliente
FOR EACH ROW
BEGIN
    INSERT INTO log_cliente (numerocadastro, acao)
    VALUES (OLD.numerocadastro, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Manutencao
CREATE TABLE IF NOT EXISTS log_manutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_manutencao_insert
AFTER INSERT ON Manutencao
FOR EACH ROW
BEGIN
    INSERT INTO log_manutencao (numeroregistro, acao)
    VALUES (NEW.numeroregistro, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_manutencao_update
AFTER UPDATE ON Manutencao
FOR EACH ROW
BEGIN
    INSERT INTO log_manutencao (numeroregistro, acao)
    VALUES (NEW.numeroregistro, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_manutencao_delete
AFTER DELETE ON Manutencao
FOR EACH ROW
BEGIN
    INSERT INTO log_manutencao (numeroregistro, acao)
    VALUES (OLD.numeroregistro, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Comercial
CREATE TABLE IF NOT EXISTS log_comercial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_comercial_insert
AFTER INSERT ON Comercial
FOR EACH ROW
BEGIN
    INSERT INTO log_comercial (cnpj, acao)
    VALUES (NEW.CNPJ, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_comercial_update
AFTER UPDATE ON Comercial
FOR EACH ROW
BEGIN
    INSERT INTO log_comercial (cnpj, acao)
    VALUES (NEW.CNPJ, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_comercial_delete
AFTER DELETE ON Comercial
FOR EACH ROW
BEGIN
    INSERT INTO log_comercial (cnpj, acao)
    VALUES (OLD.CNPJ, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Residencial
CREATE TABLE IF NOT EXISTS log_residencial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_residencial_insert
AFTER INSERT ON Residencial
FOR EACH ROW
BEGIN
    INSERT INTO log_residencial (cnpj, acao)
    VALUES (NEW.CNPJ, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_residencial_update
AFTER UPDATE ON Residencial
FOR EACH ROW
BEGIN
    INSERT INTO log_residencial (cnpj, acao)
    VALUES (NEW.CNPJ, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_residencial_delete
AFTER DELETE ON Residencial
FOR EACH ROW
BEGIN
    INSERT INTO log_residencial (cnpj, acao)
    VALUES (OLD.CNPJ, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Balcao
CREATE TABLE IF NOT EXISTS log_balcao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_balcao_insert
AFTER INSERT ON Balcao
FOR EACH ROW
BEGIN
    INSERT INTO log_balcao (cnpj, acao)
    VALUES (NEW.CNPJ, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_balcao_update
AFTER UPDATE ON Balcao
FOR EACH ROW
BEGIN
    INSERT INTO log_balcao (cnpj, acao)
    VALUES (NEW.CNPJ, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_balcao_delete
AFTER DELETE ON Balcao
FOR EACH ROW
BEGIN
    INSERT INTO log_balcao (cnpj, acao)
    VALUES (OLD.CNPJ, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Requisita
CREATE TABLE IF NOT EXISTS log_requisita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_requisita_insert
AFTER INSERT ON Requisita
FOR EACH ROW
BEGIN
    INSERT INTO log_requisita (id, acao)
    VALUES (NEW.id, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_requisita_update
AFTER UPDATE ON Requisita
FOR EACH ROW
BEGIN
    INSERT INTO log_requisita (id, acao)
    VALUES (NEW.id, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_requisita_delete
AFTER DELETE ON Requisita
FOR EACH ROW
BEGIN
    INSERT INTO log_requisita (id, acao)
    VALUES (OLD.id, 'REMOVIDO');
END;
//
DELIMITER ;


-- Tabela de log para Industrial
CREATE TABLE IF NOT EXISTS log_industrial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger INSERT
DELIMITER //
CREATE TRIGGER trg_industrial_insert
AFTER INSERT ON Industrial
FOR EACH ROW
BEGIN
    INSERT INTO log_industrial (cnpj, acao)
    VALUES (NEW.CNPJ, 'INSERIDO');
END;
//
DELIMITER ;

-- Trigger UPDATE
DELIMITER //
CREATE TRIGGER trg_industrial_update
AFTER UPDATE ON Industrial
FOR EACH ROW
BEGIN
    INSERT INTO log_industrial (cnpj, acao)
    VALUES (NEW.CNPJ, 'ALTERADO');
END;
//
DELIMITER ;

-- Trigger DELETE
DELIMITER //
CREATE TRIGGER trg_industrial_delete
AFTER DELETE ON Industrial
FOR EACH ROW
BEGIN
    INSERT INTO log_industrial (cnpj, acao)
    VALUES (OLD.CNPJ, 'REMOVIDO');
END;
//
DELIMITER ;