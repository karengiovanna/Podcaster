import {createContext} from 'react';

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
    togglePlay: () => void;

};


export const PlayerContext = createContext({} as PlayerContextData);