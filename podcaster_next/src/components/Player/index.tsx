import styles from './styles.module.scss';

export function Player(){
    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando agora</strong>
            </header>

            <div className={styles.emptyPlayer}> {/*player vazio */}
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        
                        <div className={styles.emptySlider}/>
                        
                    </div>
                    <span>00:00</span>

                </div>

                <div className={styles.buttons}>
                    <button type="buttom">
                        <img src="/shuffle.svg" alt="Aleatório"/>
                    </button>

                    <button type="buttom">
                        <img src="/play-previous.svg" alt="Tocar anterior"/>
                    </button>

                    <button type="buttom" className={styles.playButton}>
                        <img src="/play.svg" alt="Tocar"/>
                    </button>
                    <button type="buttom">
                        <img src="/play-next.svg" alt="Tocar Pŕoximo"/>
                    </button>

                    <button type="buttom" className={styles.playButton}>
                        <img src="/repeat.svg" alt="Repetir"/>
                    </button>


                </div>
            </footer>
        </div>
    );
}