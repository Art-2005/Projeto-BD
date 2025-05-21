import { useState, useEffect } from 'react';
import axios from 'axios';

export function useComerciais() {
  const [comerciais, setComerciais] = useState([]);
  const [novoComercial, setNovoComercial] = useState({
    cnpj: "",
    nomeEmpresa: "",
    telefone: "",
    estado: "",
    bairro: "",
    cep: "",
    rua: "",
    numero: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/comerciais")
      .then(res => setComerciais(res.data))
      .catch(err => console.error("Erro ao carregar comerciais:", err));
  }, []);

  const handleChange = (e) => {
    setNovoComercial({ ...novoComercial, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/comerciais", novoComercial)
      .then(res => {
        setComerciais([...comerciais, res.data]);
        setNovoComercial({
            cnpj: "",
            nomeEmpresa: "",
            telefone: "",
            estado: "",
            bairro: "",
            cep: "",
            rua: "",
            numero: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar comercial:", err));
  };

  const deletar = (cnpj) => {
    axios.delete(`http://localhost:8080/comerciais/${cnpj}`)
      .then(() => setComerciais(comerciais.filter(c => c.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar comercial:", err));
  };

  return { comerciais, novoComercial, handleChange, handleSubmit, deletar };
}
