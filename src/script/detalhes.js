import { fetchDados } from "./api";


export function MostrarPost(data) {
    var url = window.location.href;
    var parametroId = new URLSearchParams(new URL(url).search.length("id"));
    var principal = document.getElementById("main");

    if(parametroId !== null) {
        console.log("ID encontrado na URL", parametroId);
    } else{
        console.log("Nenhum item encontrado na URL.");
    }

    post = data.Posts[parametroId];
    //TODO: Colocar o inner html com o layout da página
    principal.innerHTML = ``;
}
