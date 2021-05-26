import React from 'react';
import ReactDOM from 'react-dom'; //biblioteca de integração do react com o navegador (representação do html em formato de objeto javascript)
import App from './App';

ReactDOM.render( //quero mostrar em tela(renderizar)
  <App />,
  document.getElementById('root') //quero mostrar o app dentro elemento do id root
);
