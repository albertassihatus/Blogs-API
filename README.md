# Boas vindas ao repositório do API de Blogs!

 O projeto consiste em uma API que realiza um CRUD (Create, Read, Update e Delete) de posts de blog. Para criação das tabelas do banco de dados, foi utilizado a técnica de Mapeamento Objeto-Relacional (`ORM`) através do pacote `sequelize` do Node.js. Foram feitas autenticações de usuários através do pacote `jsonwebtoken`.<br />
 A implementação do código foi feita baseada na arquitetura de software MSC (Model-Service-Controller)
 
---

# Tecnologias Usadas
 - Node.js
 - Sequelize
 - Express
 - JavaScript
 - MySQL
 - JsonWebToken


## Requisitos


### 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

### 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

### 3 - Sua aplicação deve ter o endpoint POST `/login`

### 4 - Sua aplicação deve ter o endpoint POST `/user`

### 5 - Sua aplicação deve ter o endpoint GET `/user`

### 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

### 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

### 8 - Sua aplicação deve ter o endpoint POST `/categories`

### 9 - Sua aplicação deve ter o endpoint GET `/categories`

### 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

### 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

### 12 - Sua aplicação deve ter o endpoint POST `/post`

### 13 - Sua aplicação deve ter o endpoint GET `/post`

### 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

### Rodando o Projeto Localmente

1° `git clone git@github.com:albertassihatus/Blogs-API.git` - Clone o repositório para sua máquina<br />

2° `cd Blogs-API` - Entre na pasta do repositório clonado<br />

3° `npm install` - Instale as depedências<br />

4° `npm start` - Execute o programa<br />
**Sugestão: Baixe o programa Insomina para executar cada operação do CRUD: https://snapcraft.io/install/insomnia/ubuntu

#### Conexão com o Banco 

Para que o projeto rode em sua máquina, você deve criar as seguintes variáveis de ambiente:

`host: process.env.HOSTNAME` <br />
`user: process.env.MYSQL_USER`<br />
`password: process.env.MYSQL_PASSWORD` <br />

# Autor
   - Hatus Albertassi
