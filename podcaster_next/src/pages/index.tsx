// SPA
// SSR
// SSG

import {GetStaticProps} from 'next'; //tem uma funcioalidade interna chamada image
import Image from 'next/image';

import { api } from '../services/api';
import {format, parseISO} from 'date-fns'; //converte data em string para date em js
import ptBR from 'date-fns/locale/pt-BR'; // data em português
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

import styles from './home.module.scss';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  url: string;
  members: string;
  publishedAt: string;
  duration: string;
  durationAsString: string;
 //....
}

type HomeProps = { //tipagem das props
  latestEpisodes: Episode[]; //um array de objeto
  allEpisodes: Episode[];
}



export default function Home({latestEpisodes, allEpisodes}: HomeProps) { //Homeprops é a tipagem de um episodio
  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
          <h2> Ultimos lançamentos </h2>

          <ul> 
              {latestEpisodes.map(episode=> {
                return(
                  <li key={episode.id}>
                    <Image /*importada da biblioteca image. não funciona pra qualquer endereço de imagem*/
                      width={192} /*altura e largura que eu quero carregar a imagem, não mostrar*/
                      height={192} 
                      src={episode.thumbnail} 
                      alt={episode.title}
                      objectFit="cover"
                    /> 
                    
                    <div className={styles.episodeDetails}>
                        <a href="">{episode.title}</a>
                        <p>{episode.members}</p>
                        <span>{episode.publishedAt}</span>
                        <span>{episode.durationAsString}</span>
                    </div>

                    <button type ="button">
                        <img src="/play-green.svg" alt="Tocar episódio"/>
                    </button>

                  </li>
                )
              })}
          </ul>
      </section>


      <section className={styles.allEpisodes}>
        
      </section>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async() =>{ //tanto os parâmetros da função quanto o retorno estão tipados
  const {data} = await api.get('episodes', {
    params:{
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
  }
})
  const episodes = data.map(episode =>{
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: convertDurationToTimeString(episode.file.duration),
      description: episode.description,
      url: episode.file.url,
    };
  })

const latestEpisodes = episodes.slice(0,2); //episodios da da posicao 0 a 2, a partir da data de publicação
const allEpisodes = episodes.slice(2, episodes.length);

  return{
    props:{ // conceito de propriedades do react
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60*60*8, //60 segundos * 60 minutos * 8 = a cada 8 horas uma nova versão dessa página será criada (um podcast novo a cada 8 horas)
  }
}  

