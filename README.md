# Calculadora_arquitetura_MVC
## Descrição
<p> Calculadora simples que salva as operações feitas em um histórico. O objetivo do projeto é aplicar a arquitetura MVC e trabalhar com REST APIs para lêr, criar e deletar dados armazenados </p>

## Tecnologias utilizadas
<a href="#"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> </a>
<a href="#"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> </a>
<a href="#"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> </a>
<a href="#"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> </a> <br>
Através do Node, utilizando a biblioteca Express para criar o servidor http, criamos as rotas para atender as requisições do cliente.
Seguindo o padrão MVC, a comunicação entre as classes segue o seguinte roteiro: 
  - No arquivo "app.js" é instanciado o Controller, e para cada rota definida é chamado um método do Controller;
  - O Controller instancia o Model e se comunica com ele para obter os dados. 
  - O Model, por sua vez, possui métodos que acessam e manipulam os dados armazenados no JSON e os retorna ao Controller;
  - Por fim, o Controller envia os dados obtidos para a View renderizá-los na página HTML.

## Como rodar o projeto
1. Instale os modulos do Node utilizando o comando "npm install";
2. Rode o arquivo app.js com o comando "node app.js";
3. No navegador, acesse o caminho "localhost:3000";
