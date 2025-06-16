import { fetchDados } from "./api.js";

const postsContainer = document.getElementById("artigos-em-alta-container");

async function carregarEExibirPosts() {
    if (!postsContainer) {
        console.error("Elemento 'artigos-em-alta-container' não encontrado no HTML.");
        return;
    }

    postsContainer.innerHTML = '<p class="text-center">Carregando posts...</p>';

    try {
        const todosOsPosts = await fetchDados();
        if (!todosOsPosts) {
            postsContainer.innerHTML = '<p class="text-center">Nenhum post encontrado.</p>';
            return;
        }

        let conteudoHTML = '';

        for (const postId in todosOsPosts) {
            if (Object.hasOwnProperty.call(todosOsPosts, postId)) {
                const post = todosOsPosts[postId];

                conteudoHTML += `
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <a href="detalhe.html?id=${postId}" class="text-decoration-none">
                    <div class="card bg-dark text-white shadow-sm h-100">
                        ${post.imagemUrl
                        ? `<img src="${post.imagemUrl}" class="card-img-top rounded-top-3" alt="${post.titulo || 'Imagem do post'}">`
                        : '<div class="card-img-top-placeholder bg-secondary rounded-top-3 text-center py-5">Sem Imagem</div>'}
                        <div class="card-body">
                        <h6 class="card-title text-white">${post.titulo || 'Sem título'}</h6>
                        <!-- <p class="text-white-50 small">${post.tempoLeitura || 'Tempo indeterminado'}</p> -->
                        </div>
                    </div>
                    </a>
                </div>`;
            }
        }

        if (conteudoHTML === '') {
            postsContainer.innerHTML = '<p class="text-center">Nenhum post para exibir (verifique filtros ou dados).</p>';
        } else {
            postsContainer.innerHTML = conteudoHTML;
        }

    } catch (error) {
        console.error("Erro ao carregar posts:", error);
        if (postsContainer) {
            postsContainer.innerHTML = `<p class="text-center text-danger">Erro ao carregar os posts. Tente novamente mais tarde.</p><p class="text-center text-muted small">${error.message}</p>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', carregarEExibirPosts);
