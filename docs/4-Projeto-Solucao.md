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

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)


### 4.3. Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam efetuar os cadastros de dados e controles associados aos processos identificados, assim como recuperações.
Utilizando a notação do DER (Diagrama Entidade e Relacionamento), elaborem um modelo, na ferramenta visual indicada na disciplina, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar, também, o controle de acesso de usuários (partes interessadas dos processos) de acordo com os papéis definidos nos modelos do processo de negócio.
_Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos._

#### 4.3.1 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

#### 4.3.2 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---


#### 4.3.3 Modelo Físico

Insira aqui o script de criação das tabelas do banco de dados.

> **OBS:** Se o aluno utilizar BD NoSQL, ele derá incluir o script aqui também. 

Veja um exemplo:

<code>

 -- Criação da tabela Médico
CREATE TABLE Medico (
    MedCodigo INTEGER PRIMARY KEY,
    MedNome VARCHAR(100)
);


-- Criação da tabela Paciente
CREATE TABLE Paciente (
    PacCodigo INTEGER PRIMARY KEY,
    PacNome VARCHAR(100)
);

-- Criação da tabela Consulta
CREATE TABLE Consulta (
    ConCodigo INTEGER PRIMARY KEY,
    MedCodigo INTEGER,
    PacCodigo INTEGER,
    Data DATE,
    FOREIGN KEY (MedCodigo) REFERENCES Medico(MedCodigo),
    FOREIGN KEY (PacCodigo) REFERENCES Paciente(PacCodigo)
);

-- Criação da tabela Medicamento
CREATE TABLE Medicamento (
    MdcCodigo INTEGER PRIMARY KEY,
    MdcNome VARCHAR(100)
);

-- Criação da tabela Prescricao
CREATE TABLE Prescricao (
    ConCodigo INTEGER,
    MdcCodigo INTEGER,
    Posologia VARCHAR(200),
    PRIMARY KEY (ConCodigo, MdcCodigo),
    FOREIGN KEY (ConCodigo) REFERENCES Consulta(ConCodigo),
    FOREIGN KEY (MdcCodigo) REFERENCES Medicamento(MdcCodigo)
);

</code>

Este script deverá ser incluído em um arquivo .sql na pasta src\bd.




### 4.4. Tecnologias

As tecnologias que serão usadas para o desenvolvimento do projeto serão as que seguem e interagem entre si de acordo com a figura a seguir

![image](https://github.com/user-attachments/assets/51b974b1-c7c9-4519-9a5c-974ac0d0e223)


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | Firebase           |
| Front end      | HTML+CSS+JS+Bootstrap     |
| Back end       | JavaScript |
| Deploy         | Github Pages    |

