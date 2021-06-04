import { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

/* biblioteca para a barra de progresso */
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';


export default function Player(){
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0) // estado para a barra de progresso do audio, vai armazenar em segundos

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
        isShuffling,
        toggleShuffle
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
    
    function setupProgressListener(){
        audioRef.current.currentTime = 0; //sempre que mudar de um som para o outro a barra volta para o inicio
        audioRef.current.addEventListener('timeupdate', () =>{
            setProgress(Math.floor(audioRef.current.currentTime)); //retorna o tempo atual do player
        });
    }

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
                    <span>{convertDurationToTimeString(progress)}</span>

                    <div className = {styles.slider}>
                        {/* se tiver tocando alguma coisa o trackstyle vai mudar a linha do progresso que já aconteceu*/}
                        {episode ? (
                            <Slider
                                max={episode.duration} //retorna o número de segundos do episódios
                                value={progress} //tempo atual do áudio
                                trackStyle={{backgroundColor: '#04d361'}}
                                railStyle={{backgroundColor: '#9f75ff'}} /* cor que ainda nao sofreu progresso */
                                handleStyle={{borderColor: '#04d361', borderWidth: 4}} /* bolinha de progresso */
                            />
                        ) : (
                            <div className={styles.emptySlider}/>
                        ) }
                    </div>
                    <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>

                    {/* se houver um episódio tocando e  */}
                    {episode && (
                        <audio
                            src = {episode.url}
                            ref = {audioRef}
                            autoPlay /*assim que houver um episódio começa a tocar*/
                            loop={isLooping}
                            onPlay={() => setPlayingState(true)} /* quando o usuário setar 1 no onPlay (pelo teclado)*/
                            onPause={() => setPlayingState(false)}
                            onLoadedMetadata={setupProgressListener}
                        />
                    )}

                </div>

                <div className={styles.buttons}>
                    <button 
                        type = "button" 
                        disabled={!episode || episodeList.length ==1} 
                        onClick = {toggleShuffle}
                        className={isShuffling ? styles.isActive : ''}
                    >
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
                        className={isLooping ? styles.isActive : ''}
                    >
                        <img src="/repeat.svg" alt="Repetir"/> 
                    </button>


                </div>
            </footer>
        </div>
    );
}