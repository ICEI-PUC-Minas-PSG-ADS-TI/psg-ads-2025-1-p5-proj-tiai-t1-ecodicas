## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução

Dado que o projeto será baseado em HTML, CSS, JavaScript e Bootstrap, e utilizará o Firebase como banco de dados, adotamos uma arquitetura simples e eficiente.

### Camadas da Arquitetura

- Frontend (Interface do Usuário):
  - HTML, CSS e Bootstrap para a estrutura e estilização da página.
  - JavaScript para interatividade e manipulação de dados.
  - Firebase Authentication (se necessário futuramente para login do SuperUser).

- Backend (Gerenciamento de Dados no Firebase):
  - Firebase Firestore para armazenar as postagens das dicas sustentáveis.
  - Firebase Storage para armazenar imagens ou mídias associadas às postagens.
  - Firebase Hosting para hospedar a aplicação estática.

- Administração (Área Restrita para o SuperUser):
  - Página protegida onde o SuperUser pode adicionar, editar ou excluir postagens.
  - Regras de segurança do Firebase configuradas para permitir acesso apenas ao SuperUser.
 
 ### Exemplo do diagrama de Arquitetura:

 ![HTML + CSS + JS + Bootstrap](https://github.com/user-attachments/assets/7281ade9-14fa-45d1-8f3b-5048e7d2068b)



### 4.2. Protótipos de telas

 
O sistema do EcoDicas possui diversas telas diferentes, de acordo com as funcionalidades e os requisitos levantados anteriormente.

![WhatsApp Image 2025-03-18 at 20 18 40_31558353](https://github.com/user-attachments/assets/a890fcea-12f5-420c-9e69-1f29cf661dd7)

Página de efetuar uma postagem nova

![WhatsApp Image 2025-03-18 at 16 11 58_0fc9faad](https://github.com/user-attachments/assets/761c688f-99a2-438a-a44b-023a5a43dfe2)

Home page com postagens no meio e no asside uma loja de produtos sustentáveis

![WhatsApp Image 2025-03-18 at 16 26 44_9ce1377e](https://github.com/user-attachments/assets/89bc35e6-2aba-4b4d-a61c-b3d859e78534)

Página da postagem do blog



## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![EcoDicasClasses](https://github.com/user-attachments/assets/48c6d1b7-28de-4140-bcfe-e1a39b9f4b6a)


## Modelo de Dados

O projeto, por fazer uso de um banco de dados não relacional (NoSQL), não temos um modelo de Entidade Relacionamento, somente os scripts para a criação das coleções.

### 4.3. Modelo de dados

Utilizaremos como base de dados o Firebase Firestore, um banco NoSQL, ele usa uma estrutura baseada em coleções e documentos (em vez de tabelas e linhas como em bancos relacionais). A modelagem é orientada a documentos e mais flexível.



#### 4.3.3 Modelo Físico

veja aqui exemplos dos script de criação das collections do banco de dados.

Coleção: posts
Cada documento representa uma postagem.
```
db.collection("posts").add({
  titulo: "Como economizar energia em casa",
  conteudo: "Desligue aparelhos da tomada quando não estiverem em uso...",
  categoria: "Energia",
  dataPublicacao: new Date(),
  imagemURL: "https://firebase.storage.url/eco-dicas/energia.jpg",
  status: "ativo"
})
.then((docRef) => {
  console.log("Post criado com ID:", docRef.id);
})
.catch((error) => {
  console.error("Erro ao criar post:", error);
});
```
>  ID do documento: será gerado automaticamente pelo Firestore ou pode ser definido por você (ex: post_001)

Coleção: categorias
Com a intenção de termos categorias consistentes, manteremos em uma coleção separada:
```
db.collection("categorias").add({
  nome: "Energia",
  descricao: "Dicas para economia de energia elétrica"
});
```

Coleção: users
Mesmo que atualmente só exista o SuperUser, registraremos:
```
db.collection("users").add({
  nome: "Administrador",
  email: "admin@ecodicas.com",
  role: "superuser",
  criadoEm: new Date()
});
```



### 4.4. Tecnologias

As tecnologias que serão usadas para o desenvolvimento do projeto serão as que seguem e interagem entre si de acordo com a figura a seguir


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | Firebase           |
| Front end      | HTML+CSS+JS+Bootstrap     |
| Back end       | JavaScript |
| Deploy         | Github Pages    |

