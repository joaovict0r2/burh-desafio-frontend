<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<br />
<div>

<h1>Burh Desafio Frontend</h1>
  <p>
    Projeto destinado a um teste tecnico, aonde o obejivo era construir um site usando a criatividade e a API Rest disponibilizada pelo <a href="https://crudcrud.com/">Crud Crud</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto
Nesse projeto, foi desenvolvido um Hud de vagas, aonde e possivel realizar as 4 ações do CRUD, atraves de uma interface amigavel e fluida.

### Built With
 - Nuxt 3
 - Pinia
 - SCSS
 - Zod

<!-- GETTING STARTED -->
## Getting Started
> Caso ache mais pratico, podes acessar nossa demo publica atraves desse link  <a href="https://burh-desafio-frontend-alpha.vercel.app/">View Demo</a>,
> Porem estamos utilizando um API publica, que possuie um tempo limitado de uso de 24hrs. </br></br>
> Caso enfrente problemas ao usar nosso app publico, podes optar pela configuração do ambiente local


### Prerequisitos - Configuração local
Caso não possuia instalado em sua maquina, sera necessario a instalação desses pacotes.
- NodeJs
- Npm

### Installation

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

<!-- USAGE EXAMPLES -->
## Usage
Apos tudo configurado e rodando, sera possível navegar pelo projeto.
- Primeira tela: Tela de apresentação, sendo requisitado o nome para prosseguir o uso da plataforma.
- Segunda tela: Listagem das vagas cadastradas, ao primeiro momento fazia, mas apos o cadastro nas próximas telas, sera populado.
- Terceira tela: Tela de cadastro, aonde e apresentado um formulário para cadastro de vaga.
- Quarta tela: Tela de visualização de vaga, apos uma vaga cadastrada e estando na listagem, ao clicar em uma vaga, sera redirecionado para pagina de visualização da vaga.
- Quinta tela: Tela de edição de vaga, estando na tela de visualização de vaga, sera possivel editar, assim levando para o formulario de edição.
