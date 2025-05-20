import React from 'react';

export default function CadastroEmpresa({
  novaEmpresa,
  handleChangeEmpresa,
  handleSubmitEmpresa,
  empresas,
  deletarEmpresa,
}) {
  return (
    <div className="form-box">
          <h2>Cadastro de Empresas</h2>
          <form onSubmit={handleSubmitEmpresa}>
            <input name="cnpj" placeholder="CNPJ" value={novaEmpresa.cnpj} onChange={handleChangeEmpresa} required /><br />
            <input name="nome" placeholder="Nome" value={novaEmpresa.nome} onChange={handleChangeEmpresa} required /><br />
            <input name="nomeFantasia" placeholder="Nome Fantasia" value={novaEmpresa.nomeFantasia} onChange={handleChangeEmpresa} /><br />
            <input name="estado" placeholder="Estado" value={novaEmpresa.estado} onChange={handleChangeEmpresa} /><br />
            <input name="rua" placeholder="Rua" value={novaEmpresa.rua} onChange={handleChangeEmpresa} /><br />
            <input name="bairro" placeholder="Bairro" value={novaEmpresa.bairro} onChange={handleChangeEmpresa} /><br />
            <input name="cep" placeholder="CEP" value={novaEmpresa.cep} onChange={handleChangeEmpresa} /><br />
            <input name="numero" placeholder="Número" value={novaEmpresa.numero} onChange={handleChangeEmpresa} /><br />
            <input name="chefia" placeholder="Chefia" value={novaEmpresa.chefia} onChange={handleChangeEmpresa} /><br />
            <br />
            <button type="submit">Cadastrar Empresa</button>
          </form>

          <h3>Lista de Empresas</h3>
          <ul>
          {empresas.map((e) => (
            <li key={e.cnpj}>
              {e.cnpj} - {e.nome} ({e.nomeFantasia})
              <button onClick={() => deletarEmpresa(e.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
            </li>
          ))}
          </ul>
    </div>
  );
}