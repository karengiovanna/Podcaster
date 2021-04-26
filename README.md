# Trilha REACT e Next.JS
Repositório do evento Next Level Week realizado pela Rocketseat. Trilha de React e Next.js

## Trilha de React
Aprenderemos a criar aplicações front-end web utilizando a biblioteca React que tem como objetivo a criação de interfaces altamente interativas. O react traz uma forma padronizada de forma que seja fácil manipular a interface de acordo com as ações do usuário.

## Apresentação do projeto
Uma aplicação web para exibir os podcasts de um canal

![image](https://user-images.githubusercontent.com/49700354/115946266-6e72d080-a496-11eb-8581-7a9f5b6f830a.png)

## Preparando o ambiente
- Node + NPM;
- Yarn;
- React;
- Visual Studio Code e configurações.


Função  | Comando   | Estrutura | Estrutura final
--------- | ------ | --------- | --------- 
Criando React App | ```npx create-react-app podcastr``` | ![image](https://user-images.githubusercontent.com/49700354/116099669-2f9d7000-a67a-11eb-873e-9b865260663f.png)
Criando projeto com Next | ```cd .. npx create-next-app``` | ![image](https://user-images.githubusercontent.com/49700354/116099775-4d6ad500-a67a-11eb-95fb-08d2915ddc56.png) | ![image](https://user-images.githubusercontent.com/49700354/116100520-ff0a0600-a67a-11eb-8abe-542c3b945682.png)
Configurando o TypeScript no Next.js | ```bash yarn add typescript @types/react @types/node -D ``` | Trocar a extensão .js por .tsx [Next](https://www.npmjs.com/package/next) | [React](https://www.npmjs.com/package/react)
Instalando o SASS | ```yarn add sass ``` |  trocar a extensão .css por .scss | import '../styles/global.scss';
Instalando Json-server | ```yarn add jason-server -D``` | Adicionar no arquivo package.json, script: ```"server": "json-server server.json -w -d 750 -p 3333"```  watchmode: servidor reiniciar cada vez que trocar uma informacao. delay: 750ms para responder. porta 3333| Iniciar o servidor utilizando o comando ```yarn server```


# Conceitos do React

- Componentes: No react tudo é componente, eles são responsáveis por entregar o nosso código HTML ao navegador. Uma boa prática é isolar os nossos elementos em componentes sempre que percebemos que algo esta se repetindo em nossa aplicação. Encapsulamento destes componentes, nos permitem uma melhor manutenção de nosso código, e isolamento de suas funções.

- Propriedades: É uma informação que se passa de um componente para outro.

- Estado: É uma forma de conseguir manipular informações de dentro do componente.


Projeto   | Fluxo da aplicação
--------- | ------
![image](https://user-images.githubusercontent.com/49700354/116026478-d9e8a980-a620-11eb-87e6-57bb54723247.png) | ![image](https://user-images.githubusercontent.com/49700354/116026460-d05f4180-a620-11eb-89b5-d4fe55aee709.png)

## O que é o TypeScript?

É um superset, um conjunto de funcionalidade adicionado sobre o javascript. Pode ser tratado como uma linguagem.

O TypeScript permite sabermos qual o formato da informação que estamos chamando, adicionando uma tipagem.


### O que é Sass?

"Sass é uma linguagem de folha de estilo compilada para CSS. Ele permite que você use variáveis, regras aninhadas, mixins, funções e muito mais, tudo com uma sintaxe totalmente compatível com CSS. O Sass ajuda a manter grandes folhas de estilo bem organizadas e facilita o compartilhamento de design dentro e entre projetos."


## Conteúdo Técnico do primeiro dia

Ambiente de desenvolvimento

Fluxo de uma API (Utilizamos um API fictício)

Iniciando com React

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



