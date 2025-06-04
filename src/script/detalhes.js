import { fetchPostById } from "./api.js";

export async function MostrarPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const parametroId = urlParams.get("id");

    const principal = document.getElementById("main");

     if (!principal) {
        console.error("Elemento com ID 'main' não encontrado na página de detalhes!");
        return;
    }

    principal.innerHTML = '<p>Carregando detalhes da dica...</p>';


    if (parametroId !== null && parametroId !== "") {
        console.log("ID encontrado na URL:", parametroId);

        try {
            const post = await fetchPostById(parametroId);

            if (post) {

                principal.innerHTML = `
                    <div class="post-detalhes">
                        <h1>${post.titulo || 'Título Indisponível'}</h1>
                        ${post.imagemUrlDetalhe ? `<img src="${post.imagemUrlDetalhe}" alt="${post.titulo || 'Imagem do post'}">` : ''}
                        <p>${post.descricaoCompleta || post.descricao || 'Descrição detalhada indisponível.'}</p>
                        <!-- Adicione mais campos aqui conforme o seu modelo de dados no Firestore -->
                        <small>ID do Post: ${post.id}</small>
                    </div>
                    <p><a href="index.html">Voltar para a lista de dicas</a></p>
                `;
            } else {

                console.log("Nenhum post encontrado com o ID:", parametroId);
                principal.innerHTML = `<p>Ops! A dica com o ID "${parametroId}" não foi encontrada.</p>`;
            }

        } catch (error) {

            console.error("Erro ao carregar os detalhes do post:", error);
            principal.innerHTML = `<p>Erro ao carregar os detalhes da dica: ${error.message}</p>`; // Exibe mensagem de erro
        }


    } else {
        console.log("Nenhum ID de post encontrado na URL.");
        principal.innerHTML = '<p>Por favor, selecione uma dica para ver os detalhes.</p>';
    }
}
