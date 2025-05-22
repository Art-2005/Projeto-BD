import React from 'react';

export default function CadastroRequisicao({
  novaRequisicao,
  handleChangeRequisicao,
  handleSubmitRequisicao,
  requisicoes,
  deletarRequisicao,
}) {
  return (
      <div className="form-box">
          <h2>Cadastro de Requisição</h2>
          <form onSubmit={handleSubmitRequisicao}>
            <input name="id" placeholder="ID" value={novaRequisicao.id} onChange={handleChangeRequisicao} required /><br />
            <input name="data" placeholder="Data" type="date" value={novaRequisicao.data} onChange={handleChangeRequisicao} required /><br /><br />
            <button type="submit">Cadastrar Requisição</button>
          </form>

          <h3>Lista de Requisições</h3>
          <ul className="search-results">
              {requisicoes.map((r) => (
                <li key={r.id}>
                  {r.id}, Data: {r.data}
                  <button onClick={() => deletarRequisicao(r.id)} style={{ marginLeft: '10px' }}>Deletar</button>
                </li>
              ))}
          </ul>

        </div>
  );
}


