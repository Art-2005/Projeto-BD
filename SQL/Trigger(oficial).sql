-- Logs
CREATE TABLE IF NOT EXISTS log_empresa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cnpj VARCHAR(100),
    acao VARCHAR(50),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_funcionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numerocadastro VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_manutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numeroregistro VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_comercial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_residencial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_balcao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_industrial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS log_requisita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave_primaria VARCHAR(100),
    acao VARCHAR(20),
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

-- EMPRESA
CREATE TRIGGER trg_empresa_insert AFTER INSERT ON empresa
FOR EACH ROW BEGIN
    INSERT INTO log_empresa (cnpj, acao) VALUES (NEW.cnpj, 'INSERIDO');
END//

CREATE TRIGGER trg_empresa_update AFTER UPDATE ON empresa
FOR EACH ROW BEGIN
    INSERT INTO log_empresa (cnpj, acao) VALUES (NEW.cnpj, 'ALTERADO');
END//

CREATE TRIGGER trg_empresa_delete AFTER DELETE ON empresa
FOR EACH ROW BEGIN
    INSERT INTO log_empresa (cnpj, acao) VALUES (OLD.cnpj, 'REMOVIDO');
END//

-- FUNCIONARIO
CREATE TRIGGER trg_funcionario_insert AFTER INSERT ON funcionario
FOR EACH ROW BEGIN
    INSERT INTO log_funcionario (cpf, acao) VALUES (NEW.cpf, 'INSERIDO');
END//

CREATE TRIGGER trg_funcionario_update AFTER UPDATE ON funcionario
FOR EACH ROW BEGIN
    INSERT INTO log_funcionario (cpf, acao) VALUES (NEW.cpf, 'ALTERADO');
END//

CREATE TRIGGER trg_funcionario_delete AFTER DELETE ON funcionario
FOR EACH ROW BEGIN
    INSERT INTO log_funcionario (cpf, acao) VALUES (OLD.cpf, 'REMOVIDO');
END//

-- CLIENTE
CREATE TRIGGER trg_cliente_insert AFTER INSERT ON cliente
FOR EACH ROW BEGIN
    INSERT INTO log_cliente (numerocadastro, acao) VALUES (NEW.numerocadastro, 'INSERIDO');
END//

CREATE TRIGGER trg_cliente_update AFTER UPDATE ON cliente
FOR EACH ROW BEGIN
    INSERT INTO log_cliente (numerocadastro, acao) VALUES (NEW.numerocadastro, 'ALTERADO');
END//

CREATE TRIGGER trg_cliente_delete AFTER DELETE ON cliente
FOR EACH ROW BEGIN
    INSERT INTO log_cliente (numerocadastro, acao) VALUES (OLD.numerocadastro, 'REMOVIDO');
END//

-- MANUTENCAO
CREATE TRIGGER trg_manutencao_insert AFTER INSERT ON manutencao
FOR EACH ROW BEGIN
    INSERT INTO log_manutencao (numeroregistro, acao) VALUES (NEW.numeroregistro, 'INSERIDO');
END//

DELIMITER //
CREATE TRIGGER trg_manutencao_update AFTER UPDATE ON manutencao
FOR EACH ROW BEGIN
    INSERT INTO log_manutencao (numeroregistro, acao) VALUES (NEW.numeroregistro, 'ALTERADO');
END
DELIMITER //

CREATE TRIGGER trg_manutencao_delete AFTER DELETE ON manutencao
FOR EACH ROW BEGIN
    INSERT INTO log_manutencao (numeroregistro, acao) VALUES (OLD.numeroregistro, 'REMOVIDO');
END//

-- COMERCIAL
CREATE TRIGGER trg_comercial_insert AFTER INSERT ON comercial
FOR EACH ROW BEGIN
    INSERT INTO log_comercial (chave_primaria, acao) VALUES (NEW.cnpj, 'INSERIDO');
END//

CREATE TRIGGER trg_comercial_update AFTER UPDATE ON comercial
FOR EACH ROW BEGIN
    INSERT INTO log_comercial (chave_primaria, acao) VALUES (NEW.cnpj, 'ALTERADO');
END//

CREATE TRIGGER trg_comercial_delete AFTER DELETE ON comercial
FOR EACH ROW BEGIN
    INSERT INTO log_comercial (chave_primaria, acao) VALUES (OLD.cnpj, 'REMOVIDO');
END//

-- RESIDENCIAL
CREATE TRIGGER trg_residencial_insert AFTER INSERT ON residencial
FOR EACH ROW BEGIN
    INSERT INTO log_residencial (chave_primaria, acao) VALUES (NEW.cnpj, 'INSERIDO');
END//

CREATE TRIGGER trg_residencial_update AFTER UPDATE ON residencial
FOR EACH ROW BEGIN
    INSERT INTO log_residencial (chave_primaria, acao) VALUES (NEW.cnpj, 'ALTERADO');
END//

CREATE TRIGGER trg_residencial_delete AFTER DELETE ON residencial
FOR EACH ROW BEGIN
    INSERT INTO log_residencial (chave_primaria, acao) VALUES (OLD.cnpj, 'REMOVIDO');
END//

-- BALCAO
CREATE TRIGGER trg_balcao_insert AFTER INSERT ON balcao
FOR EACH ROW BEGIN
    INSERT INTO log_balcao (chave_primaria, acao) VALUES (NEW.cnpj, 'INSERIDO');
END//

CREATE TRIGGER trg_balcao_update AFTER UPDATE ON balcao
FOR EACH ROW BEGIN
    INSERT INTO log_balcao (chave_primaria, acao) VALUES (NEW.cnpj, 'ALTERADO');
END//

CREATE TRIGGER trg_balcao_delete AFTER DELETE ON balcao
FOR EACH ROW BEGIN
    INSERT INTO log_balcao (chave_primaria, acao) VALUES (OLD.cnpj, 'REMOVIDO');
END//

-- INDUSTRIAL
CREATE TRIGGER trg_industrial_insert AFTER INSERT ON industrial
FOR EACH ROW BEGIN
    INSERT INTO log_industrial (chave_primaria, acao) VALUES (NEW.cnpj, 'INSERIDO');
END//

CREATE TRIGGER trg_industrial_update AFTER UPDATE ON industrial
FOR EACH ROW BEGIN
    INSERT INTO log_industrial (chave_primaria, acao) VALUES (NEW.cnpj, 'ALTERADO');
END//

CREATE TRIGGER trg_industrial_delete AFTER DELETE ON industrial
FOR EACH ROW BEGIN
    INSERT INTO log_industrial (chave_primaria, acao) VALUES (OLD.cnpj, 'REMOVIDO');
END//

-- REQUISITA
CREATE TRIGGER trg_requisita_insert AFTER INSERT ON requisita
FOR EACH ROW BEGIN
    INSERT INTO log_requisita (chave_primaria, acao) VALUES (NEW.id, 'INSERIDO');
END//

CREATE TRIGGER trg_requisita_update AFTER UPDATE ON requisita
FOR EACH ROW BEGIN
    INSERT INTO log_requisita (chave_primaria, acao) VALUES (NEW.id, 'ALTERADO');
END//

CREATE TRIGGER trg_requisita_delete AFTER DELETE ON requisita
FOR EACH ROW BEGIN
    INSERT INTO log_requisita (chave_primaria, acao) VALUES (OLD.id, 'REMOVIDO');
END//

DELIMITER ;
