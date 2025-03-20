
# 3. Especificações do Projeto

## 3.1 Classificação dos Requisitos Funcionais x Requisitos não Funcionais 

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                     | Prioridade |
|------|------------------------------------------------------------------------------------------------------------|------------|
|RF-001| O sistema deve permitir que o admin publiquem dicas de sustentabilidade no blog.                           |    ALTA    | 
|RF-002| Os usuários devem poder filtrar dicas por categorias.                                                      |    BAIXA   |
|RF-003| O sistema deve permitir o cadastro de usuários.                                                            |    MÉDIA   |
|RF-004| O sistema deve permitir ao admin editar e excluir dicas publicadas.                                        |    ALTA    |
|RF-005| O sistema deve disponibilizar um mecanismo de pesquisa para que os usuários encontrem dicas específicas.   |    MÉDIA   |
|RF-006| O sistema deve exibir a data de publicação de cada dica no blog.                                           |    MÉDIA   |
|RF-007| O sistema deve permitir ao admin visualizar uma lista de todas as dicas cadastradas.                       |    MÉDIA   |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001| Usabilidade: O site deve ter uma interface intuitiva e fácil de navegar. |    MÉDIA  | 
|RNF-002| Desempenho: O site deve ser rápido e responsivo para uma boa experiência do usuário.         |    MÉDIA  | 
|RNF-003| Disponibilidade: O site deve estar disponível 24/7. |    MÉDIA  | 
|RNF-004| Compatibilidade: O site deve ser compatível com diferentes navegadores e dispositivos, incluindo desktop, tablet e smartphone.             |    ALTA  | 


## Restrições

|ID| Restrição                                                                                                                                             |
|--|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|01| O software deverá ser entregue até o fim do semestre letivo 01/2025.                                                                                  |
|02| O sistema deve ser desenvolvido utilizando Bootstrap, Firebase e Javascript.                                                                          |
|03| A plataforma deve permitir apenas um SuperUser autenticado para gerenciar e publicar novas postagens, sem a necessidade de criação de usuários comuns.|
|04| O sistema não deverá armazenar dados sensíveis de usuários.                                                                                           |



## 3.2 Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|  xxxx              | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|  yyy               | Alterar permissões                 | Permitir que possam administrar contas |




> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)


-------------------------------------------------------------------------------------------------------------------------------------------

## Tarefas Técnicas (Tasks)

Cada história do usuário é dividida em tarefas específicas para implementação, confome o exemplo abaixo:

## História de Usuário: 
                     Como cliente, eu quero fazer login no sistema para acessar meu perfil.

## tarefas Técnicas:

## 1. Criação da Interface de Login
**Objetivo:** Desenvolver a interface de login para o **Administrador**, que poderá gerenciar as postagens.

- **Tarefa Técnica 1:** Criar o layout da página de login com campos para nome de usuário e senha, utilizando o Bootstrap para garantir uma boa responsividade.
- **Tarefa Técnica 2:** Adicionar validações básicas de preenchimento para garantir que os campos de nome de usuário e senha não fiquem em branco.
- **Tarefa Técnica 3:** Implementar um design amigável, com feedback visual, para tornar a interface intuitiva e fácil de navegar (conforme o requisito RNF-001).

## 2. Criação do Sistema de Cadastro e Autenticação de Administrador
**Objetivo:** Permitir que o **Administrador** se cadastre e acesse a plataforma para gerenciar o conteúdo.

- **Tarefa Técnica 1:** Criar um sistema de autenticação utilizando Firebase Authentication para autenticar o **Administrador**.
- **Tarefa Técnica 2:** Implementar um fluxo para criar um **Administrador** com dados básicos, como nome, e-mail e senha.
- **Tarefa Técnica 3:** Criar uma função para verificar as credenciais no momento do login e permitir o acesso apenas ao **Administrador**.

## 3. Publicação e Edição de Dicas
**Objetivo:** Implementar funcionalidades para o **Administrador** publicar, editar e excluir dicas no blog.

- **Tarefa Técnica 1:** Criar uma interface de painel administrativo para o **Administrador** com botões para adicionar, editar e excluir dicas.
- **Tarefa Técnica 2:** Desenvolver o backend que permite a publicação, edição e exclusão de dicas, utilizando Firebase Firestore como banco de dados.
- **Tarefa Técnica 3:** Integrar o sistema de edição de dicas com o front-end, permitindo a modificação de dicas publicadas com atualização imediata.

## 4. Implementação do Sistema de Categorias
**Objetivo:** Criar um sistema de filtragem para as dicas com base em categorias.

- **Tarefa Técnica 1:** Adicionar um campo de categorias nas dicas, onde o **Administrador** pode associar cada dica a uma categoria específica (ex: reciclagem, economia de energia).
- **Tarefa Técnica 2:** Implementar um filtro de categorias no front-end, para que os usuários possam visualizar dicas relacionadas a temas específicos.
- **Tarefa Técnica 3:** Criar a lógica para exibir dicas filtradas por categorias e garantir que a exibição seja dinâmica.

## 5. Pesquisa de Dicas
**Objetivo:** Permitir que os usuários realizem buscas por dicas específicas.

- **Tarefa Técnica 1:** Criar um campo de busca na interface do usuário.
- **Tarefa Técnica 2:** Implementar uma função de pesquisa utilizando Firebase Firestore, que busque as dicas com base em palavras-chave inseridas pelo usuário.
- **Tarefa Técnica 3:** Exibir os resultados da pesquisa de forma clara e ordenada, mantendo a experiência do usuário fluida e rápida.

## 6. Exibição da Data de Publicação
**Objetivo:** Garantir que as dicas publicadas apresentem a data de sua criação.

- **Tarefa Técnica 1:** Adicionar um campo de data de criação nas dicas ao salvá-las no Firebase Firestore.
- **Tarefa Técnica 2:** Exibir a data de publicação no front-end de cada dica na plataforma, utilizando um formato amigável e legível.

## 7. Design Responsivo
**Objetivo:** Assegurar que o site seja responsivo e acessível em diversos dispositivos.

- **Tarefa Técnica 1:** Utilizar o framework Bootstrap para garantir que o layout da plataforma seja adaptável para diferentes tamanhos de tela, incluindo desktop, tablet e smartphone (como especificado no RNF-004).
- **Tarefa Técnica 2:** Testar a interface em diferentes dispositivos para garantir que a experiência do usuário seja consistente e sem falhas.

## 8. Gerenciamento de Dicas
**Objetivo:** Permitir que o **Administrador** visualize todas as dicas cadastradas no sistema.

- **Tarefa Técnica 1:** Criar uma página de administração onde o **Administrador** possa visualizar uma lista de todas as dicas publicadas.
- **Tarefa Técnica 2:** Implementar uma funcionalidade para listar todas as dicas de forma organizada, com opções para edição e exclusão.

## 9. Validação e Tratamento de Erros
**Objetivo:** Tratar erros comuns, como falhas de login ou problemas com o envio de formulários.

- **Tarefa Técnica 1:** Implementar validação de entradas no formulário de login (nome de usuário e senha), garantindo que os dados estejam corretos antes de permitir o login.
- **Tarefa Técnica 2:** Criar mensagens de erro claras para o usuário, como "Usuário ou senha inválidos" e "Campo obrigatório", caso o usuário insira dados incorretos ou deixe campos em branco.
- **Tarefa Técnica 3:** Adicionar feedback visual nas páginas de erro para que o usuário saiba o que precisa corrigir.

## 10. Segurança e Privacidade
**Objetivo:** Garantir que a plataforma esteja segura e em conformidade com as restrições de dados.

- **Tarefa Técnica 1:** Garantir que o sistema não armazene dados sensíveis de usuários, como senhas em texto claro.
- **Tarefa Técnica 2:** Implementar a autenticação do Firebase para garantir que apenas o **Administrador** tenha acesso ao painel de administração.
- **Tarefa Técnica 3:** Utilizar conexões seguras (HTTPS) em todas as transações de dados.






> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
