const API_URL = "http://localhost:8080/empresas";

export async function listarEmpresas() {
    const response = await fetch(API_URL);
    return await response.json();
}

export async function criarEmpresa(empresa) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empresa),
    });
    if (!response.ok) throw new Error("Erro ao criar empresa");
    return await response.json();
}
