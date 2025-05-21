import React from 'react';

export default function CadastroFuncionario({
  novoFuncionario,
  handleChangeFuncionario,
  handleSubmitFuncionario,
  funcionarios,
  deletarFuncionario,
}) {
  return (
   <div className="form-box">
          <h2>Cadastro de Funcionários</h2>
          <form onSubmit={handleSubmitFuncionario}>
            <input name="cpf" placeholder="CPF" value={novoFuncionario.cpf} onChange={handleChangeFuncionario} required /><br />
            <input name="nome" placeholder="Nome" value={novoFuncionario.nome} onChange={handleChangeFuncionario} required /><br />
            <input name="cargo" placeholder="Cargo" value={novoFuncionario.cargo} onChange={handleChangeFuncionario} /><br />
            <input name="telefone" placeholder="Telefone" value={novoFuncionario.telefone} onChange={handleChangeFuncionario} /><br />
            <input name="email" placeholder="Email" value={novoFuncionario.email} onChange={handleChangeFuncionario} /><br /><br />
            <button type="submit">Cadastrar Funcionário</button>
          </form>

          <h3>Lista de Funcionários</h3>
          <ul>
            {funcionarios.map((f) => (
              <li key={f.cpf}>
                {f.cpf} - {f.nome} ({f.cargo})
                <button onClick={() => deletarFuncionario(f.cpf)} style={{ marginLeft: '10px' }}>Deletar</button>
              </li>
            ))}
          </ul>
        </div>
  );
}