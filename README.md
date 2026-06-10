# Formulário para registro de Barbearias
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)

  <p>Este repositório contém minha solução para o desafio proposto. O projeto final trata-se de um mini sistema de cadastro de barbearias, permitindo o cadastro, consulta, edição e exclusão de estabelecimentos através de uma interface web integrada a uma API REST. <br> </p>
   <p>Utilizei muito de recursos como vite, tailwind, além de bibliotecas de icones entre outras funcionalidades interessantes durante o desenvolvimento deste projeto. A seguir, você pode conferir o link da página vercel onde foi feito o deploy, e uma descrição de todas as tecnologias utilizadas.<br> </p>
  <p>Dentro das dependências frontend e backend, respectivamente, você encontrará outro README, que entra em maiores detalhes sobre a lógica utilizada durante cada etapa do desenvolvimento.</p>

### Link do Vercel
-> https://desafio-star-app.vercel.app

# Funcionalidades

=> Cadastro de barbearias <br>
=> Listagem de registros cadastrados <br>
=> Busca por nome, responsável ou cidade <br>
=> Edição de informações <br>
=> Exclusão de registros <br>
=> Validação de e-mail único <br>
=> Feedback visual através de notificações toast <br>

## Diferenciais

- Integração completa com PostgreSQL via Supabase
- Deploy do frontend utilizando Vercel
- Deploy do backend utilizando Render
- Interface responsiva
- Validação de e-mail único no banco de dados
- Feedback visual através de notificações Toast

# Estrutura Principal

formBarber/ <br>
├── frontend/ <br>
├── backend/ <br>
└── README.md <br>

# Tecnologias Utilizadas

## Front-end

* React <br>
* TypeScript<br>
* Vite <br>
* Tailwind CSS <br>
* React Router DOM <br>
* React Hot Toast <br>
* Lucide React <br>

## Back-end
* Node.js <br>
* Express <br>
* TypeScript <br>

## Banco de dados

* PostgreSQL <br>
* Supabase <br>

# Instruções para rodar localmente

Rodar localmente deve ser tranquilo, porém no caso de quaisquer dúvidas sinta-se a vontade para entrar em contato comigo pelas redes sociais do perfil ou pelo email destacado no mesmo.

## Pré-requisitos
* Node.js 20+ <br>
* npm <br>
* Git <br>

## Clonar o repositório

```git
-> gh repo clone VeronicaMarchiori/desafioStarApp 
-> cd desafioStarApp
```
## Back-end
```run
-> cd backend 
-> npm install 
-> npm run dev 
```
### ** Não se esqueça de criar um arquivo .env:
```env
DATABASE_URL=sua_connection_string_do_supabase
```
 ** O backend estará disponível em: http://localhost:3000

## Front-end
```run
-> cd frontend 
-> npm install 
-> npm run dev 
```
### *** Crie um arquivo .env:

```env
VITE_API_URL=http://localhost:3000/barbershops
```

# *EXTRA*: Build para Produção

## Backend
```run
-> cd backend 
-> npm run build 
-> npm start 
```
## Frontend

```run
-> cd frontend 
-> npm run build 
```
## Autora

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGpkNmx3eXcwdnB6enExbWhkdmkyaHlxdWdvZDQ5bTJnYzhpd2x1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJTAhOzkmy7620OMK8/giphy.gif" width="30"/> Veronica Marchiori
# 
GitHub: https://github.com/VeronicaMarchiori
