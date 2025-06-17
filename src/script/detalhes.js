import { fetchDados } from "./api.js";

const postDetailContainer = document.getElementById("post-detalhe-container");

async function carregarEExibirDetalhesPost() {
    if (!postDetailContainer) {
        console.error("Elemento 'post-detalhe-container' não encontrado no HTML.");
        return;
    }

    postDetailContainer.innerHTML = '<p class="text-center">Carregando detalhes do post...</p>';

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (!postId) {
        postDetailContainer.innerHTML = '<p class="text-center text-danger">ID do post não encontrado na URL.</p>';
        console.error("Nenhum ID de post encontrado na URL.");
        return;
    }

    console.log("ID do post encontrado na URL:", postId);

    try {
        const post = await fetchDados(postId);

        if (!post) {
            postDetailContainer.innerHTML = `<p class="text-center text-danger">Post com ID '${postId}' não encontrado.</p>`;
            return;
        }

        postDetailContainer.innerHTML = `
            <div class="post-detalhes">
                <h1>${post.titulo || 'Título Indisponível'}</h1>
                ${post.imagemUrl ? `<img src="${post.imagemUrl}" alt="${post.titulo || 'Imagem do post'}" class="img-fluid rounded mb-3">` : ''}
                
                <hr>
                <div class="conteudo-post">
                    ${post.conteudo ? post.conteudo.replace(/\n/g, '<br>') : 'Conteúdo indisponível.'}
                </div>
                <!-- Adicione mais campos aqui conforme o seu modelo de dados -->
                <p class="mt-4"><a href="portal.html" style="background-color: #0A988B;" class="btn btn-secondary">Voltar para a lista de dicas</a></p>
            </div>
        `;
    } catch (error) {
        console.error("Erro ao carregar detalhes do post:", error);
        if (postDetailContainer) {
            postDetailContainer.innerHTML = `<p class="text-center text-danger">Erro ao carregar o post. Tente novamente mais tarde.</p><p class="text-center text-muted small">${error.message}</p>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', carregarEExibirDetalhesPost);
