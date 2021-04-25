import React from 'react';
import ReactDOM from 'react-dom'; /* integração do react com o browser, representação do html como formato de objeto do javascript*/
import App from './App'; /* importamos o outro arquivo*/

ReactDOM.render( /* renderizar é o ato de mostrar em tela*/
    <App />, /* mostra em tela o app. app é uma funcao que retorna html*/
  document.getElementById('root') /* mostra o app dentro do elemento root no html*/
);