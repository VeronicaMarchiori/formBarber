# Backend

Este diretório contém toda a API REST da aplicação. Através deste README,deixarei mais explícito como foi pensada a lógica durante o desenvolvimento.

O backend foi desenvolvido utilizando Node.js, Express e TypeScript, tendo como principal responsabilidade o gerenciamento dos dados das barbearias cadastradas através do frontend.

A API realiza operações de cadastro, consulta, edição e exclusão de registros armazenados em um banco PostgreSQL hospedado no Supabase.

# Tecnologias Utilizadas

* Node.js
* Express
* TypeScript
* PostgreSQL
* Supabase
* dotenv
* pg

# Lógica da Aplicação

A aplicação foi desenvolvida utilizando uma arquitetura simples baseada na separação de responsabilidades.

Cada parte do sistema possui uma função específica, facilitando a manutenção e organização do código.

## Controllers

Os controllers concentram toda a lógica da aplicação.

São responsáveis por:

Receber requisições HTTP
Capturar dados enviados pelo frontend
Executar consultas no banco de dados
Retornar respostas apropriadas para cada operação

Toda a lógica relacionada às barbearias foi centralizada em um único controller para simplificar o desenvolvimento e facilitar futuras expansões.

## Routes

As routes são responsáveis por definir os endpoints da API.

Cada rota encaminha a requisição para a função correspondente dentro do controller.

As operações implementadas foram:

``` run
GET /barbershops
POST /barbershops
PUT /barbershops/:id
DELETE /barbershops/:id
Banco de Dados
```
## Persistência de dados

Para persistência dos dados utilizei PostgreSQL hospedado no Supabase. Durante o dessenvolvimento, porém, usei o pgAdmin e o postgres localmente em minha máquina.

A conexão foi centralizada em um módulo específico para evitar repetição de código e facilitar futuras alterações de infraestrutura.

## Supabase

Para este projeto optei por utilizar o Supabase como plataforma de hospedagem do banco de dados PostgreSQL.

A escolha foi feita por oferecer uma configuração rápida, interface intuitiva para gerenciamento dos dados e integração simples com aplicações Node.js.

Embora o projeto não utilize recursos mais avançados da plataforma, como autenticação ou armazenamento de arquivos, o Supabase foi responsável pela hospedagem do banco PostgreSQL, gerenciamento das tabelas da aplicação, persistência dos dados cadastrados e também disponibilização da connection string utilizada pela API.

Dessa forma, toda a persistência dos dados da aplicação acontece em um ambiente remoto, permitindo que o sistema continue funcionando normalmente mesmo após o deploy do frontend e backend.

A conexão com o Supabase é realizada através da variável de ambiente:

```run
DATABASE_URL=sua_connection_string_do_supabase
```

## Validação de E-mail Único

Durante o desenvolvimento foi implementada uma restrição UNIQUE para o campo de e-mail.

Essa validação garante que não existam duas barbearias cadastradas utilizando o mesmo endereço de e-mail.

Quando ocorre uma tentativa de duplicação, o PostgreSQL retorna um erro específico que é tratado pela API e convertido em uma mensagem amigável para o frontend.

## Tratamento de Erros

A API possui tratamento para diversas situações comuns:

Falhas de conexão com banco de dados
Tentativas de cadastro com e-mail já existente
Registros inexistentes
Erros internos do servidor

O objetivo foi evitar que erros técnicos fossem exibidos diretamente para o usuário final, e também por boas práticas.

# Estrutura do Projeto

```run
src/
├── controllers/
│   └── barbershopController.ts
├── database/
│   └── connection.ts
├── routes/
│   └── barbershopRoutes.ts
├── server.ts
└── ...
```
# Operações Implementadas
## Criar Barbearia
```dev
POST /barbershops
```
Responsável pelo cadastro de novas barbearias.

## Buscar Barbearias
```dev
GET /barbershops
```
Retorna todos os registros cadastrados.

## Atualizar Barbearia
```dev
PUT /barbershops/:id
```
Atualiza os dados de uma barbearia já existente.

## Excluir Barbearia
```dev
DELETE /barbershops/:id
```
Remove um registro do banco de dados.

# Variáveis de Ambiente

Crie um arquivo .env na raiz do backend:
```env
DATABASE_URL=sua_connection_string_do_supabase
Executando Localmente
```
## Instale as dependências:

```run
npm install
Execute o servidor:
npm run dev
```
O backend estará disponível em: http://localhost:3000

# Build para Produção

## Gerar Build
```run
npm run build
```
## Executar Build
```run
npm start
Deploy
```
O backend encontra-se hospedado utilizando Render e conectado a um banco PostgreSQL hospedado no Supabase.

# Destaques da Implementação

-> Arquitetura baseada em separação de responsabilidades
-> Integração com PostgreSQL utilizando pg
-> Banco de dados hospedado no Supabase
-> Tratamento de erros personalizados
-> Validação de e-mail único diretamente no banco
-> Deploy em ambiente de produção utilizando Render