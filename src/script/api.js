const FIREBASE_DATABASE_URL = "https://ecodicas-eebb4-default-rtdb.firebaseio.com/";

export async function fetchDados(postId = null) {
    let url = `${FIREBASE_DATABASE_URL}/posts.json`;

    if (postId) {

        url = `${FIREBASE_DATABASE_URL}/posts/${postId}.json`;
    }

    console.log("Buscando dados de:", url);

    const response = await fetch(url);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro na requisição do banco: ${response.status} ${response.statusText}. Detalhes: ${errorText}`);
    }
    return await response.json();
}
