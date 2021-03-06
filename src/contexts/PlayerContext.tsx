import {createContext, useState, ReactNode, useContext} from 'react';

type Episode = {
    title: string;
    members :string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData ={
    episodeList: Array<Episode>;
    currentEpisodeIndex: number;
    /* informação para saber se o episódio selecionado está tocando ou não*/
    isPlaying: boolean;
    //play é uma função sem retorno
    play: (episode: Episode) => void;
    setPlayingState: (state: boolean) => void;
    togglePlay: () => void;
    playList: (list: Episode[], index: number) => void;
    playNext: () => void;
    playPrevious: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
    isLooping: boolean;
    toggleLoop: () => void,
    toggleShuffle: () => void;
    isShuffling: boolean;
    clearPlayerState: () => void;

};

type PlayerContextProviderProps ={
    children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({children}: PlayerContextProviderProps){
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
  
    function play(episode: Episode){
      setEpisodeList([episode])
      setCurrentEpisodeIndex(0);
      setIsPlaying(true);
    }

    // função recebe a lista de episódios e o índice do episódio escolhido pelo usuário
    function playList(list: Episode[], index: number){
        setEpisodeList(list);
        setCurrentEpisodeIndex(index);
        //caso o player tenha sido pausado manualmente e o usuario quer tocar outro episodio  player tem que começar como true
        setIsPlaying(true);
    }

    //modificar botão play e pause
    function togglePlay(){
      setIsPlaying(!isPlaying);
      
  
    }

    function toggleLoop(){
        setIsLooping(!isLooping);
    }

    function toggleShuffle(){
        setIsShuffling(!isShuffling);
    }
  
    /* para saber quando foram utilizadas teclas para dar pause ou reproduzir*/
    function setPlayingState(state : boolean){
      setIsPlaying(state);
    }

    const hasPrevious = currentEpisodeIndex >0;
    const hasNext = isShuffling || (currentEpisodeIndex+1) < episodeList.length;
    
    // função só vai tocar o próximo se ele for menor que o tamanho total da listagem de eps
    function playNext(){
        if (isShuffling){
            const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
            setCurrentEpisodeIndex(nextRandomEpisodeIndex);
        } else if(hasNext){
            setCurrentEpisodeIndex(currentEpisodeIndex+1);
        }
    }

    function playPrevious(){
        if(hasPrevious){
            setCurrentEpisodeIndex(currentEpisodeIndex-1)
        }
    }

    function clearPlayerState(){
        setEpisodeList([]);
        setCurrentEpisodeIndex(0);
    }
  
    return (
        <PlayerContext.Provider 
            value={{
                // funções disponíveis
                episodeList, 
                currentEpisodeIndex, 
                play, 
                isPlaying, 
                playList,
                playNext, 
                playPrevious,
                togglePlay, 
                setPlayingState,
                hasNext, 
                hasPrevious,
                isLooping,
                toggleLoop,
                toggleShuffle,
                isShuffling,
                clearPlayerState
            }}
        >
            {children}
        </PlayerContext.Provider>
        
    )
}

export const usePlayer = () => {
    return useContext(PlayerContext);
}