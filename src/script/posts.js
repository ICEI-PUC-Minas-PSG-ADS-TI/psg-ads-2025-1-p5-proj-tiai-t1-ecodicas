import { fetchDados } from "./api.js";

const postsContainer = document.getElementById("artigos-em-alta-container");

async function preencherCarrosselComPosts(postsObj) {
    const carouselInner = document.getElementById("carousel-posts");
    if (!carouselInner) return;

    // Converter objeto para array e ordenar por data
    const postsArray = Object.entries(postsObj)
        .map(([id, post]) => ({ id, ...post }))
        .sort((a, b) => (b.data || b.timestamp || 0) - (a.data || a.timestamp || 0));

    const recentes = postsArray.slice(0, 3);

    if (recentes.length === 0) {
        carouselInner.innerHTML = `<div class="carousel-item active"><div class="text-center p-5">Nenhum destaque disponível.</div></div>`;
        return;
    }

    carouselInner.innerHTML = recentes.map((post, idx) => `
        <div class="carousel-item${idx === 0 ? " active" : ""}" data-bs-interval="5000">
        <a href="detalhe.html?id=${post.id}" class="text-decoration-none">
            <img src="${post.imagemUrl || 'https://via.placeholder.com/800x400?text=Sem+Imagem'}" class="d-block w-100 carousel-img-limit rounded-3" alt="${post.titulo || 'Imagem do post'}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${post.titulo || 'Sem título'}</h5>
                <p style:"color:black">${post.resumo || post.descricao || ''}</p>
            </div>
        </a>
        </div>
    `).join('');
}

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

        preencherCarrosselComPosts(todosOsPosts);

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
