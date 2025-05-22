import React from 'react';

export default function CadastroCliente({
  novoCliente,
  handleChangeCliente,
  handleSubmitCliente,
  clientes,
  deletarCliente,
}) {
  return (
   <div className="form-box">
          <h2>Cadastro de Clientes</h2>
          <form onSubmit={handleSubmitCliente}>
            <input name="numerocadastro" placeholder="Número de Cadastro" value={novoCliente.numerocadastro} onChange={handleChangeCliente} required /><br />
            <input name="nome" placeholder="Nome" value={novoCliente.nome} onChange={handleChangeCliente} required /><br />
            <input name="telefone" placeholder="Telefone" value={novoCliente.telefone} onChange={handleChangeCliente} /><br />
            <input name="email" placeholder="Email" value={novoCliente.email} onChange={handleChangeCliente} /><br />
            <input name="historico" placeholder="Histórico" value={novoCliente.historico} onChange={handleChangeCliente} /><br />
            <input name="servicos" placeholder="Serviços" value={novoCliente.servicos} onChange={handleChangeCliente} /><br />
            <br />
            <button type="submit">Cadastrar Cliente</button>
          </form>

          <h3>Lista de Clientes</h3>
        <ul className="search-results">
          {clientes.map((c) => (
            <li key={c.numerocadastro}>
              {c.numerocadastro} - {c.nome} ({c.email})
              <button onClick={() => deletarCliente(c.numerocadastro)} style={{ marginLeft: '10px' }}>Deletar</button>
            </li>
          ))}
        </ul>
        </div>
  );
}