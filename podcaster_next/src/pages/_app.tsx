/* _app é um arquivo global que sempre vai ficar por volta 
component é o conteúdo da rota em si*/

/* colocamos aqui os componentes que SEMPRE vão aparecer, em todas as páginas*/

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
