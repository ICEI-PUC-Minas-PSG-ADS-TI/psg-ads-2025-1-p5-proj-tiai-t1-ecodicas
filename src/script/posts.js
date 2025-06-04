import { fetchDadosFirestore } from "./api.js";

export function mostrarProdutos(listaDeDicas) {
    const parametro = new URLSearchParams(window.location.search).get("category");
    const principal = document.getElementById("main");

    if (!principal) {
        console.error("Elemento com ID 'main' não encontrado na página!");
        return;
    }

    let conteudo = `<div class="posts-grid">`;
    let count = 0;

    listaDeDicas.forEach(dica => {

        if (dica.categoria === parametro || parametro === "todos" || parametro === null) {
            count++;

            conteudo += `
                <div class="post-card-col"> <!-- Coluna para o card -->
                    <div class="post-card">
                        ${dica.imagemUrl ? `<img src="${dica.imagemUrl}" alt="${dica.titulo || 'Imagem'}">` : ''}
                        <h3>${dica.titulo || 'Sem título'}</h3>
                        <p>${dica.descricao || 'Sem descrição.'}</p>
                        <a href="detalhe.html?id=${dica.id}">Ver Detalhes</a>
                    </div>
                </div>
            `;
        }
    });

    conteudo += `</div>`;
    if (count === 0) {
        conteudo = `<p>Nenhuma dica encontrada nesta categoria.</p>`;
    }


    principal.innerHTML = conteudo;
}
