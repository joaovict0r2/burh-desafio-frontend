<div>
<h1>Burh Desafio Frontend</h1>
  <p>
    Projeto destinado a um teste técnico, onde o objetivo era construir um site usando a criatividade e a API Rest disponibilizada pelo <a href="https://crudcrud.com/">Crud Crud</a>
  </p>
</div>

## Sobre o projeto
Neste projeto, foi desenvolvido uma plataforma de vagas, onde é possível realizar as 4 ações do CRUD, através de uma interface amigável e fluida.

### Built With
 - Nuxt 3
 - Pinia
 - SCSS
 - Zod

## Getting Started
> Caso ache mais prático, podes acessar nossa demo pública através desse link  <a href="https://burh-desafio-frontend-alpha.vercel.app/">Burh Teste</a>,
> Porém estamos utilizando uma API pública, que possui um tempo limitado de uso de 24hrs. `token atual expira em: 11/06 - 11:30 AM`</br></br>
> Caso enfrente problemas ao usar nosso app público, podes optar pela configuração do ambiente local


### Pré-requisitos - Configuração local
Caso não possua instalado em sua máquina, será necessário a instalação desses pacotes.
- NodeJs
- Npm

### Instalação

1. API Key: [Crud Crud](https://crudcrud.com/) - <br/>*e.g: 7abf406752bf40daa1a38b9c1c4172d5*
   
3. Clone the repo
   ```sh
   git clone https://github.com/joaovict0r2/burh-desafio-frontend
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `.env` - use `.env.example` para configurar o arquvio `.env`
   ```js
   API_KEY= ENTER_YOUR_API_KEY
   ```
   
5. Run project
   ```js
   npm run dev
   ```
   
## Usage
Após tudo configurado e rodando, será possível navegar pelo projeto.

- CheckIn: Tela de apresentação, sendo requisitado o nome para prosseguir o uso da plataforma.
- Listagem de vagas: Ao primeiro momento vazia, mas após o cadastro nas próximas telas, será populado.
- Cadastro de vagas: Onde é apresentado um formulário para cadastro de vaga.
- Visualização de vagas: Após uma vaga cadastrada e estando na listagem, ao clicar em uma vaga, será redirecionado para página de visualização da vaga.
- Edição de vagas: Estando na tela de visualização de vaga, será possível editar, assim levando para o formulário de edição.
