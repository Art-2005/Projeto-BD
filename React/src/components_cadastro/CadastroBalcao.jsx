import React from 'react';

export default function CadastroBalcao({
  novoBalcao,
  handleChangeBalcao,
  handleSubmitBalcao,
  balcoes,
  deletarBalcao,
}) {
  return (
    <div className="form-box">
      <h2>Cadastro de Balcões</h2>
      <form onSubmit={handleSubmitBalcao}>
        <input name="cnpj" placeholder="CNPJ" value={novoBalcao.cnpj} onChange={handleChangeBalcao} required /><br />
        <input name="telefone" placeholder="Telefone" value={novoBalcao.telefone} onChange={handleChangeBalcao} /><br />
        <input name="estado" placeholder="Estado" value={novoBalcao.estado} onChange={handleChangeBalcao} /><br />
        <input name="bairro" placeholder="Bairro" value={novoBalcao.bairro} onChange={handleChangeBalcao} /><br />
        <input name="cep" placeholder="CEP" value={novoBalcao.cep} onChange={handleChangeBalcao} /><br />
        <input name="rua" placeholder="Rua" value={novoBalcao.rua} onChange={handleChangeBalcao} /><br />
        <input name="numero" placeholder="Número" value={novoBalcao.numero} onChange={handleChangeBalcao} /><br /><br />
        <button type="submit">Cadastrar Balcão</button>
      </form>

      <h3>Lista de Balcões</h3>
      <ul className="search-results">
        {balcoes.map((b) => (
          <li key={b.cnpj}>
            {b.cnpj} - {b.bairro}, {b.rua}, {b.numero}
            <button onClick={() => deletarBalcao(b.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
