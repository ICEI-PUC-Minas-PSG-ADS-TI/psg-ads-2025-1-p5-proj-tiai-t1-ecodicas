//TODO: criar o firebase
const BASE_URL = "";

export async function fetchDados() {
    const response = await fetch(BASE_URL);
    if(!response.ok) throw new Error("Erro na requisição");
    return await response.json();
}
