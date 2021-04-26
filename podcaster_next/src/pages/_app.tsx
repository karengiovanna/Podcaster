// _app é um arquivo global 

// colocamos aqui um componente que queremos que sempre fique visível em todas as telas da aplicação

// toda a página da nossa aplicação será exibida dentro do app
import '../styles/global.scss';

// importando componentes
import {Header} from '../components/Header';
import {Player} from '../components/Player';

// o styles do arquivo atual
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
    return(
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    )
}

export default MyApp
