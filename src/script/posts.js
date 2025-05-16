import { fetchDados } from "./api";

export function mostrarProdutos(data) {
    const parametro = new URLSearchParams(window.location.search).get("category");
    const principal = document.getElementById("main");

    //TODO: colocar a div correta aqui
    let conteudo = `<>`;
    let count = 0;

    for(let postID in data.Posts) {
        let p = data.Posts[postID];
        if(p.Categoria === parametro || parametro === "todos") {
            count++;
            //TODO: colocar o card conforme o design da página
            conteudo += ``;
            if(count % 3 === 0) conteudo += `</div><div class = "row">`;
        }
    }
    conteudo += `</div></div>`;
}
