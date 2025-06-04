// js/posts.js
import { fetchDados } from "./api.js";

const postsContainer = document.getElementById("artigos-em-alta-container"); // Mudei o ID para ser mais específico
// Se você quiser usar um filtro de categoria, certifique-se que o campo 'categoria' exista nos seus dados do Firebase
// const categoriaFiltro = new URLSearchParams(window.location.search).get("category") || "todos";

async function carregarEExibirPosts() {
    if (!postsContainer) {
        console.error("Elemento 'artigos-em-alta-container' não encontrado no HTML.");
        return;
    }

    postsContainer.innerHTML = '<p class="text-center">Carregando posts...</p>'; // Feedback para o usuário

    try {
        const todosOsPosts = await fetchDados(); // Busca todos os posts

        if (!todosOsPosts) {
            postsContainer.innerHTML = '<p class="text-center">Nenhum post encontrado.</p>';
            return;
        }

        let conteudoHTML = '';
        // let count = 0; // Se precisar para layout específico, mas Bootstrap row-cols deve cuidar disso

        // O objeto 'todosOsPosts' terá chaves como "post1", "post2", etc.
        for (const postId in todosOsPosts) {
            if (Object.hasOwnProperty.call(todosOsPosts, postId)) {
                const post = todosOsPosts[postId];

                // Lógica de filtro por categoria (descomente e ajuste se necessário)
                /*
                if (categoriaFiltro !== "todos" && post.categoria !== categoriaFiltro) {
                    continue; // Pula este post se não corresponder ao filtro
                }
                */

                // count++;
                // Usando os campos da sua estrutura do Realtime DB
                conteudoHTML += `
                    <div class="col"> <!-- Bootstrap cuidará do número de colunas por linha -->
                        <div class="card h-100"> <!-- h-100 para cards da mesma altura -->
                            ${post.imagemUrl ? `<img src="${post.imagemUrl}" class="card-img-top" alt="${post.titulo || 'Imagem do post'}">` : '<div class="card-img-top-placeholder">Sem Imagem</div>'}
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${post.titulo || 'Sem título'}</h5>
                                ${post.tempoLeitura ? `<p class="card-text text-muted small">${post.tempoLeitura} min de leitura</p>` : ''}
                                <!-- Se você tiver uma descrição curta, adicione aqui -->
                                <!-- <p class="card-text">${post.descricaoCurta || ''}</p> -->
                                <a href="detalhe.html?id=${postId}" class="btn btn-primary mt-auto">Ver Detalhes</a>
                            </div>
                        </div>
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

// Garante que o DOM está carregado antes de tentar manipular elementos
document.addEventListener('DOMContentLoaded', carregarEExibirPosts);
