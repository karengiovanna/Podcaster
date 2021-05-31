import '../styles/global.scss';
import Header from '../components/Header';
import Player from '../components/Player';

import styles from '../styles/app.module.scss';
import React, { useState } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';



function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode){
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay(){
    setIsPlaying(!isPlaying);

  }

  /* para saber quando foram utilizadas teclas para dar pause ou reproduzir*/
  function setPlayingState(state : boolean){
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState}}>
      <div className= {styles.appWrapper}> 
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContext.Provider>
  )

}

export default MyApp
