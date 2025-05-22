import React from 'react';

export default function CadastroComercial({
  novoComercial,
  handleChangeComercial,
  handleSubmitComercial,
  comerciais,
  deletarComercial,
}) {
  return (
    <div className="form-box">
          <h2>Cadastro de Comerciais</h2>
          <form onSubmit={handleSubmitComercial}>
            <input name="cnpj" placeholder="CNPJ" value={novoComercial.cnpj} onChange={handleChangeComercial} required /><br />
            <input name="nomeEmpresa" placeholder="Nome da Empresa" value={novoComercial.nomeEmpresa} onChange={handleChangeComercial} required /><br />
            <input name="telefone" placeholder="Telefone" value={novoComercial.telefone} onChange={handleChangeComercial} /><br />
            <input name="estado" placeholder="Estado" value={novoComercial.estado} onChange={handleChangeComercial} /><br />
            <input name="bairro" placeholder="Bairro" value={novoComercial.bairro} onChange={handleChangeComercial} /><br />
            <input name="cep" placeholder="CEP" value={novoComercial.cep} onChange={handleChangeComercial} /><br />
            <input name="rua" placeholder="Rua" value={novoComercial.rua} onChange={handleChangeComercial} /><br />
            <input name="numero" placeholder="Número" value={novoComercial.numero} onChange={handleChangeComercial} /><br />
            <br />
            <button type="submit">Cadastrar Comercial</button>
          </form>
          
          <h3>Lista de Comerciais</h3>
          <ul className="search-results">
            {comerciais.map((c) => (
              <li key={c.cnpj}>
                {c.nomeEmpresa} - {c.bairro}, {c.rua}, {c.numero}
                <button onClick={() => deletarComercial(c.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
              </li>
            ))}
          </ul>
        </div>
  );
}