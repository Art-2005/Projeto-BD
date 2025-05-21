import { useState, useEffect } from 'react';
import axios from 'axios';

export function useEmpresas() {
  const [empresas, setEmpresas] = useState([]);
  const [novaEmpresa, setNovaEmpresa] = useState({
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
    axios.get("http://localhost:8080/empresas")
      .then(res => setEmpresas(res.data))
      .catch(err => console.error("Erro ao carregar empresas:", err));
  }, []);

  const handleChange = (e) => {
    setNovaEmpresa({ ...novaEmpresa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/empresas", novaEmpresa)
      .then(res => {
        setEmpresas([...empresas, res.data]);
        setNovaEmpresa({
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
      })
      .catch(err => console.error("Erro ao cadastrar empresa:", err));
  };

  const deletar = (cnpj) => {
    axios.delete(`http://localhost:8080/empresas/${cnpj}`)
      .then(() => setEmpresas(empresas.filter(e => e.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar empresa:", err));
  };

  return { empresas, novaEmpresa, handleChange, handleSubmit, deletar };
}
