# Frontend

Este diretório contém toda a interface web da aplicação. Através deste README deixarei mais explícito como foi pensada a lógica durante o desenvolvimento.

O frontend foi desenvolvido utilizando React + TypeScript e tem como objetivo fornecer uma interface simples e intuitiva para o gerenciamento de barbearias.

# Tecnologias Utilizadas
* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* React Hot Toast
* Lucide React

# Funcionalidades
* Cadastro de barbearias
* Listagem de registros
* Busca por nome, responsável ou cidade
* Edição de registros existentes
* Exclusão de registros
* Validação de dados através da API
* Feedback visual através de notificações Toast

# Lógica da Aplicação

A aplicação foi desenvolvida utilizando uma arquitetura simples baseada em componentes reutilizáveis e separação de responsabilidades.

As páginas da aplicação são responsáveis apenas pela renderização e organização dos elementos visuais, enquanto toda a comunicação com a API foi centralizada na camada de serviços (services/barbershopService.ts).

## Cadastro e Edição

O formulário de cadastro foi projetado para atender tanto a criação quanto a edição de registros.

Ao clicar em "Editar" na tela de listagem, os dados da barbearia selecionada são enviados para a página principal através do React Router. O formulário identifica automaticamente quando está operando em modo de edição e realiza o preenchimento dos campos.

Dessa forma, um único componente é responsável pelos fluxos de criação e atualização, evitando duplicação de código.

## Consumo da API

A comunicação com o backend é realizada através de requisições HTTP utilizando a Fetch API.

Foram implementadas as seguintes operações:

GET para listagem de barbearias
POST para cadastro de novos registros
PUT para atualização de registros existentes
DELETE para remoção de registros

Toda a lógica de acesso aos endpoints foi isolada na camada de serviços para facilitar manutenção e escalabilidade, como de costume em meus projetos.

## Busca em Tempo Real

A funcionalidade de busca foi implementada através de filtros aplicados sobre os dados carregados da API.

Conforme o usuário digita, a lista é filtrada dinamicamente considerando:

Nome da barbearia
Responsável
Cidade

A filtragem ocorre sem necessidade de novas consultas ao servidor, proporcionando uma experiência mais fluida.

## Feedback Visual

As operações de cadastro, edição, exclusão e tratamento de erros utilizam notificações Toast.

Esse recurso substitui os alertas nativos do navegador, oferecendo uma interface mais moderna e menos invasiva, foi escolhido por conta do visual e também pela sua utilidade.

## Componentização

A interface foi dividida em componentes reutilizáveis para facilitar manutenção e reaproveitamento de código, como comentado anteriormente. 

Entre os principais componentes estão:

```run
--- Form
--- BarberShopCard
--- Navbar
--- Input
--- Select
--- Button
--- Card
```
Escolhi essa abordagem para priorizar a organização da aplicação.

## Gerenciamento de Estado

O gerenciamento de estado foi realizado utilizando React Hooks, e os principais hooks utilizados foram:

```react
useState() para controle dos dados da interface
useEffect() para carregamento inicial dos registros
useNavigate() para navegação entre páginas
useLocation() para transferência de dados durante a edição
```

Essa abordagem foi suficiente para o porte do projeto, sem necessidade de bibliotecas externas de gerenciamento de estado.

## Responsividade

Desenvolvi a estilização utilizando o Tailwind CSS. O layout foi construído de forma responsiva, afim de permitir uma boa experiência de uso em diferentes tamanhos de tela.

# Estrutura do Projeto
```run
src/
├── components/
│   ├── Form.tsx
│   ├── BarberShopCard.tsx
│   ├── Navbar.tsx
│   └── ...
├── pages/
│   ├── RegisterBarberShop.tsx
│   └── ListBarberShops.tsx
├── services/
│   └── barbershopService.ts
├── App.tsx
└── main.tsx
```
# Integração com a API

A comunicação com o backend é realizada através do arquivo:

```dev
src/services/barbershopService.ts
```
# Operações implementadas:

Criar barbearia (POST)
Buscar barbearias (GET)
Atualizar barbearia (PUT)
Excluir barbearia (DELETE)
+ Variáveis de Ambiente

## Crie um arquivo .env na raiz do frontend:

```env
VITE_API_URL=http://localhost:3000/barbershops
```

### Para ambiente de produção:

```env
VITE_API_URL=https://desafiostarapp.onrender.com/barbershops
``` 

# Executando Localmente

Instale as dependências:

```run
npm install
``` 
## Execute o projeto:

```run
npm run dev
```
A aplicação ficará disponível em: http://localhost:5173

## Build para Produção
```run
npm run build
```
## Destaques da Implementação
-> Componentização da interface <br>
-> Separação entre páginas, componentes e serviços <br>
-> Consumo de API utilizando Fetch API <br>
-> Gerenciamento de estado com React Hooks <br>
-> Interface responsiva utilizando Tailwind CSS <br>
-> Feedback visual através de notificações Toast <br>