//TODO: Tirar os mocks e adicionar getElementById

db.collection("post").add({
  titulo: "Como economizar energia em casa",
  subtitulo: "Dicas práticas para reduzir o consumo de energia elétrica",
  conteudo: "Desligue aparelhos da tomada quando não estiverem em uso...",
  categoria: "Energia",
  dataPublicacao: new Date(),
  imagemURL: "https://firebase.storage.url/eco-dicas/energia.jpg",
  status: true
})
.then((docRef) => {
  console.log("Post criado com ID:", docRef.id);
})
.catch((error) => {
  console.error("Erro ao criar post:", error);
});
