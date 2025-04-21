import axios from "axios";

const API_URL = "http://localhost:8080/empresas";

export const listarEmpresas = () => axios.get(API_URL);
export const criarEmpresa = (empresa) => axios.post(API_URL, empresa);
