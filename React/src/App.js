// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [form, setForm] = useState({
    cnpj: "",
    nome: "",
    nomeFantasia: "",
    estado: "",
    rua: "",
    bairro: "",
    cep: "",
    numero: "",
    chefia: ""
  });

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const fetchEmpresas = async () => {
    try {
      const res = await axios.get("http://localhost:8080/empresas");
      setEmpresas(res.data);
    } catch (err) {
      alert("Erro ao buscar empresas");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/empresas", form);
      alert("Empresa cadastrada com sucesso");
      fetchEmpresas();
    } catch (err) {
      alert("Erro ao cadastrar empresa");
    }
  };

  return (
      <div style={{ padding: 20 }}>
        <h1>Cadastro de Empresas</h1>
        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((campo) => (
              <input
                  key={campo}
                  type="text"
                  name={campo}
                  value={form[campo]}
                  placeholder={campo}
                  onChange={handleChange}
                  style={{ display: "block", marginBottom: 5, width: "100%" }}
              />
          ))}
          <button type="submit">Salvar Empresa</button>
        </form>

        <h2>Empresas Cadastradas</h2>
        <table border="1">
          <thead>
          <tr>
            {Object.keys(form).map((col) => (
                <th key={col}>{col}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {empresas.map((e) => (
              <tr key={e.cnpj}>
                {Object.keys(form).map((col) => (
                    <td key={col}>{e[col]}</td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;