import { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

/* biblioteca para a barra de progresso */
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { usePlayer } from '../../contexts/PlayerContext';

export default function Player(){
    const audioRef = useRef<HTMLAudioElement>(null);

    const {
        episodeList, 
        currentEpisodeIndex, 
        isPlaying,
        togglePlay,
        setPlayingState,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious,
        isLooping,
        toggleLoop,
    } = usePlayer();


    /* toda vez que o isPlaying tiver seu valor mudado quero que alguma coisa aconteça*/
    useEffect(() => {
        if (!audioRef.current)
            return; /* se não tiver algo tocando no audioref.current ele não retorna nada*/
        
        if (isPlaying) {
            audioRef.current.play();
        } else{
            audioRef.current.pause();
        }
        }, [isPlaying])
    
    const episode = episodeList[currentEpisodeIndex]

    return(
        <div className = {styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando agora</strong>
            </header>

            
            {episode ? ( /* se tiver um episode, ou seja sendo episodio uma variavel nao nula) */
                /*exibe o episodio */
                <div className={styles.currentEpisode}> 
                    <Image
                        width={592}
                        height={592}
                        src={episode.thumbnail}
                        objectFit="cover"
                        />

                        <strong>{episode.title}</strong>
                        <span>{episode.members}</span>
                </div>
            ) : ( /* caso não tenha um episodio tocando, variavel episode estiver nula/*/
                /* o player aparecerá vazio*/
                <div className={styles.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            )}

            <footer className={!episode ? styles.empty : ''}>
                <div className={styles.progress}>
                    <span>00:00</span>

                    <div className = {styles.slider}>
                        {/* se tiver tocando alguma coisa o trackstyle vai mudar a linha do progresso que já aconteceu*/}
                        {episode ? (
                            <Slider
                                trackStyle={{backgroundColor: '#04d361'}}
                                railStyle={{backgroundColor: '#9f75ff'}} /* cor que ainda nao sofreu progresso */
                                handleStyle={{borderColor: '#04d361', borderWidth: 4}} /* bolinha de progresso */
                            />
                        ) : (
                            <div className={styles.emptySlider}/>
                        ) }
                    </div>
                    <span>00:00</span>

                    {/* se houver um episódio tocando e  */}
                    {episode && (
                        <audio
                            src = {episode.url}
                            ref = {audioRef}
                            autoPlay /*assim que houver um episódio começa a tocar*/
                            loop={isLooping}
                            onPlay={() => setPlayingState(true)} /* quando o usuário setar 1 no onPlay (pelo teclado)*/
                            onPause={() => setPlayingState(false)}
                        />
                    )}

                </div>

                <div className={styles.buttons}>
                    <button type = "button" disabled={!episode} >
                        <img src="/shuffle.svg" alt="Embaralhar"/> 
                    </button>

                    <button type = "button" disabled={!episode || !hasPrevious} onClick={playPrevious}>
                        <img src="/play-previous.svg" alt="Tocar anterior"/> 
                    </button>
                        
                    <button type = "button" 
                        className={styles.playButton} 
                        disabled={!episode}
                        onClick={togglePlay}
                        >
                        { isPlaying 
                            ? <img src="/pause.svg" alt="Pausar"/> 
                            : <img src="/play.svg" alt="Tocar"/> 
                        }
                    </button>

                    <button type = "button" disabled={!episode || !hasNext} onClick={playNext}>
                        <img src="/play-next.svg" alt="Tocar seguinte"/> 
                    </button>

                    <button 
                        type = "button" 
                        disabled={!episode}
                        onClick = {toggleLoop}
                        className={isLooping ? styles.IsActive : ''}
                    >
                        <img src="/repeat.svg" alt="Repetir"/> 
                    </button>


                </div>
            </footer>
        </div>
    );
}