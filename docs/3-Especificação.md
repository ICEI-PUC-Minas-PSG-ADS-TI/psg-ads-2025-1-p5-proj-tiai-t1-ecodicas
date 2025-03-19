
# 3. Especificações do Projeto


## 3.1 Classificação dos Requisitos Funcionais x Requisitos não Funcionais 


### Requisitos Funcionais

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-001| Permitir que o usuário cadastre tarefas |    ALTA    | 
|RF-002| Emitir um relatório de tarefas no mês   |    MÉDIA   |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel |    MÉDIA  | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s             |    BAIXA  | 


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

## As tarefas técnicas referente a história podem ser:
                   Criar a interface de login: Implementar a página com os campos de nome de usuário e senha.
                   Criar validação de entradas: Implementar a verificação de que o usuário inseriu o nome e a senha corretos.
                   Tratar erros de login: Implementar a lógica que exibe mensagens de erro caso nome e senha incorretos.





> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
