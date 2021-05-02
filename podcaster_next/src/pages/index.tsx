// SPA
// SSR
// SSG

import {GetStaticProps} from 'next'; //tem uma funcioalidade interna chamada image
import Image from 'next/image';
import Link from 'next/link';
import { api } from '../services/api';
import {format, parseISO} from 'date-fns'; //converte data em string para date em js
import ptBR from 'date-fns/locale/pt-BR'; // data em português
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

import styles from './home.module.scss';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: string;
  durationAsString: string;
  url: string;
  publishedAt: string;
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
                    
                    {// pagina de detalhes de um podcast
                    }
                    <div className={styles.episodeDetails}>
                      <Link href={`/episodes/${episode.id}`}>
                         <a> {episode.title}</a>
                      </Link>
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

      {// Sessão de todos os episódios
      }        
      <section className={styles.allEpisodes}> 
              <h2>Todos os episódios</h2>
              <table cellSpacing={0}>
                <thead> {// "cabeça" da tabela
                  }
                  <tr>
                    <th></th>
                    <th>Podcast</th>
                    <th>Integrantes</th>
                    <th>Data</th>
                    <th>Duração</th>
                    <th></th> {//botão de play
                    }
                  </tr>
                </thead>

                <tbody>
                  {allEpisodes.map(episode =>{
                    return(
                      <tr key={episode.id}>
                          <td style={{width: 72}}> {// para qe o tamanho da imagem fique fixa e o resto (titulo, membros) se adapte
                                                    }
                            <Image
                              width={120}
                              height = {120}
                              src={episode.thumbnail}
                              alt={episode.title}
                              objectFit="cover"
                              />
                          </td>

                          <td>
                            <Link href={`episodes/${episode.id}`}>
                              <a>{episode.title}</a>                            
                            </Link>
                          </td>

                          <td>{episode.members}</td>
                          <td style={{width: 100}}>{episode.publishedAt}</td> {// css inline pode ser passado por objeto dentro do código js "{}"
                                                                              }
                          <td>{episode.durationAsString}</td>
                          <td>
                            <button type="button">
                              <img src="/play-green.svg" alt="Tocar episódio"/>
                            </button>
                          </td>

                        </tr>

                      
                      )
                    }
                    )
                  } 
                </tbody>
              </table>
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
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)), 
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

