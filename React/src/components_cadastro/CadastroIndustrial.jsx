import React from 'react';

export default function CadastroIndustrial({
  novoIndustrial,
  handleChangeIndustrial,
  handleSubmitIndustrial,
  industriais,
  deletarIndustrial,
}) {
  return (
    <div className="form-box">
        <h2>Cadastro de Industriais</h2>
        <form onSubmit={handleSubmitIndustrial}>
          <input name="cnpj" placeholder="CNPJ" value={novoIndustrial.cnpj} onChange={handleChangeIndustrial} required /><br />
          <input name="nomeEmpresa" placeholder="Nome da Empresa" value={novoIndustrial.nomeEmpresa} onChange={handleChangeIndustrial} /><br />
          <input name="telefone" placeholder="Telefone" value={novoIndustrial.telefone} onChange={handleChangeIndustrial} /><br />
          <input name="estado" placeholder="Estado" value={novoIndustrial.estado} onChange={handleChangeIndustrial} /><br />
          <input name="bairro" placeholder="Bairro" value={novoIndustrial.bairro} onChange={handleChangeIndustrial} /><br />
          <input name="cep" placeholder="CEP" value={novoIndustrial.cep} onChange={handleChangeIndustrial} /><br />
          <input name="rua" placeholder="Rua" value={novoIndustrial.rua} onChange={handleChangeIndustrial} /><br />
          <input name="numero" placeholder="Número" value={novoIndustrial.numero} onChange={handleChangeIndustrial} /><br /><br />
          <button type="submit">Cadastrar Industrial</button>
        </form>

        <h3>Lista de Industriais</h3>
        <ul className="search-results">
            {industriais.map((i) => (
                <li key={i.cnpj}>
                    {i.nomeEmpresa} - {i.bairro}, {i.rua}, {i.numero}
                    <button onClick={() => deletarIndustrial(i.cnpj)} style={{ marginLeft: '10px' }}>
                        Deletar
                    </button>
                </li>
            ))}
        </ul>
    </div>
  );
}