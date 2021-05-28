## Trilha de React
Aprendendo a criar aplicações front-end web utilizando a biblioteca React que tem como objetivo a criação de interfaces altamente interativas. O react traz uma forma padronizada de forma que seja fácil manipular a interface de acordo com as ações do usuário.

## Apresentação do projeto
Uma aplicação web para exibir os podcasts de um canal

![image](https://user-images.githubusercontent.com/49700354/115946266-6e72d080-a496-11eb-8581-7a9f5b6f830a.png)

## Ambiente de desenvolvimento: 

* NODE (permite executarmos o projeto enquanto estamos em desenvolvimento,vem com npm)
* YARN (é mais performático do que o mpn que já vem instalado com o node)
* Visual Studio Code.
  
## Fluxo de uma API (Utilizamos um API fictício)
  * Antigamente era comum utilizar Server Side Redering que tornava o servidor(backend) responsável pela regra de negócio, acesso ao banco, comunicação com serviços externos, pagamento, autenticação e visualização da aplicação (pattern MVP) e por retornar todo html da página 
* 
  * Com o surgimento de equipamentos que não utilizam HTML, tais quais, aplicações mobile e desktop, e para uma experiencia melhor para o usuário que esta ligando com a aplicação desenvolveu-se uma forma chamada SPA - Single Page Application (Aplicação de uma unica página). Quando o backend passa a não retornar mais o html, mas sim os conteúdos críticos em formato JSON. Começou a ser utilizado então a estrutura de dados JSON (Javascript Object Notation) para retornar apenas os dados. Logo a responsável pela parte de visualização da nossa aplicação não é mais o backend e sim o frontend, que determina como os dados serão visualizados. No caso da web serão dados html, css e js. O REACT, junto com o browser, vai fazer requisições e pegar os dados JSON vindo do BAckEnd e transformar em HTML. É chamada de SPA pois faz o carregamento dos dados, mas não um carregamento da tela: uma única página que muda o conteúdo. 

## Fluxo de uma API dentro do universo React
  React tem problema com a indexação da página, ou seja, não haverá a possibilidade da página aparecer em buscar do Google, por exemplo.Por isso utilizamos o Gatsby ou NEXTjs.
  Os dados em JSON não são devolvidos diretamente para o browser, é enviado para o servidor do NEXT para converter os dados em HTML ou outra estrutura de dados que estamos utilizando. No SSR a criação da interface está ocorrendo pelo lado do servidor, mas nesse caso temos dois servidores: um para criar a interface e outro para API


## Iniciando com o react
  * Há duas formas comuns de criar um projeto REact: 
    * Utilizando o pacote create react app desenvolvido pela equipe do React Facebook que traz todas as dependencias nescessárias para que o navegador insterprete as funcionalidades que só existem no ecossistema dessas ferramentas. WebPack e Babel
    * Next, substituto do create react app. Tem mais funcionalidades, pois além do ambiente pronto para sairmos codando, traz também opiniões e ferramentas a mais.

## Static Site Generation
  * A home page só é atualizada a cada periodo determinado, portanto o banco de dados não é requisitado a cada acesso de um usuário. O HTML é salvo para ser mais performático, logo a página vai ser a mesma para qualquer pessoa que utilizar durante o período.

## Dicas para Windows 
  Não salve a pasta no diretório :\C
  * Utilize o terminal como administrador e dê preferencia para PowerShell

## Iniciando o projeto react
  * dentro de uma pasta nova:
  * npx create-react-app nomedoprojeto
  * cd nomedoprojeto
  * yarn start (abre o navegador automaticamente com o projeto rodando)
O create react app traz as estruturas prontas, como um template e podemos deletar o que não vamos utilizar (readme, src: deixa index e app, /public deixa o index.html. No indexhtml remove tudo ate viewport)

## Iniciando projeto Next react
  * Dentro de uma nova pasta: 
  * npx create-next-app nomedoprojeto
  * cd nomedoprojeto
  * yarn dev  
  * Podemos utilizar next em todos os projetos react e é recomendado para páginas que vão precisar de indexação
  * Adicionando TypeScript: yarn add typescript @types/react @types/node -D
  * yarn add sass
  * yarn add date-fns
  * yarn add json-server -D
  * "server": "json-server server.json -w -d 750 -p 3333"
  * yarn build  
  * yarn start para rodar em produção
  * yarn add axios
  
Função  | Comando   | Estrutura | Estrutura final
--------- | ------ | --------- | --------- 
Criando React App | ```npx create-react-app podcastr``` | ![image](https://user-images.githubusercontent.com/49700354/116099669-2f9d7000-a67a-11eb-873e-9b865260663f.png)
Criando projeto com Next | ```cd .. npx create-next-app``` | ![image](https://user-images.githubusercontent.com/49700354/116099775-4d6ad500-a67a-11eb-95fb-08d2915ddc56.png) | ![image](https://user-images.githubusercontent.com/49700354/116100520-ff0a0600-a67a-11eb-8abe-542c3b945682.png)
Configurando o TypeScript no Next.js | ```bash yarn add typescript @types/react @types/node -D ``` | Trocar a extensão .js por .tsx [Next](https://www.npmjs.com/package/next) | [React](https://www.npmjs.com/package/react)
Instalando o SASS | ```yarn add sass ``` |  trocar a extensão .css por .scss | import '../styles/global.scss';
Instalando [Json-server](https://github.com/typicode/json-server) para converter um arquivo json em uma API fake | ```yarn add jason-server -D``` | Adicionar no arquivo package.json, script: ```"server": "json-server server.json -w -d 750 -p 3333"```  watchmode: servidor reiniciar cada vez que trocar uma informacao. delay: 750ms para responder. porta 3333| Iniciar o servidor utilizando o comando ```yarn server```


# Conceitos do React

- Componentes: Uma boa prática é isolar(encapsular) os nossos elementos em componentes(funções) sempre que percebemos que algo esta se repetindo em nossa aplicação.

- Propriedades: É uma informação que se passa de um componente para outro(atributo no html).

- Estado: É uma forma de conseguir manipular informações de dentro do componente.


Projeto   | Fluxo da aplicação
--------- | ------
![image](https://user-images.githubusercontent.com/49700354/116026478-d9e8a980-a620-11eb-87e6-57bb54723247.png) | ![image](https://user-images.githubusercontent.com/49700354/116026460-d05f4180-a620-11eb-89b5-d4fe55aee709.png)


* Iniciando com React
  Conceitos do react: 
      * componente
      * estado
      * propriedade (passar do componente pai para o componente filho)


SEO com React (tempo de cada mudança)

Iniciando com Next.js: 
    * Server-side rendering 
    * Static site generation

[GASTby](https://www.gatsbyjs.com/docs/tutorial/)
Criando projeto com Next.js

## Conteúdo Técnico do segundo dia

 Por que utilizar TypeScript?
 * para suprir a necessidade de padrões que dão segurança para a escrita do código 
* É preciso configurar o typescript no next
  * yarn add typescript @types/react @types/node -D

Configurando fonte
* fonts.google.com/specimen/lexend
  * medium 500
  * semibold 600
* fonts.google.com/specimen/inter
  * regular 400
 
 Criando estilos globalIsFinite
 
 Componente: header
 
 Componente: playername
 
 Configurando API em JSON
 
 Consumindo API Fake na home
 
 SPA vs SSR vs SSG
 
 Gerando home de forma estática
 
 Criando build do projeto
 
 Executandso build



