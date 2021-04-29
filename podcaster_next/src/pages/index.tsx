// SPA
// SSR
// SSG

import {GetStaticProps} from 'next';
import { api } from '../services/api';
import {format, parseISO} from 'date-fns'; //converte data em string para date em js
import ptBR from 'date-fns/locale/pt-BR'; // data em português
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';


type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  url: string;
  members: string;
  published_at: string;
 //....
}

type HomeProps = { //tipagem das props
  episodes: Episode[]; //um array de objeto
}



export default function Home(props: HomeProps) { //Homeprops é a tipagem de um episodio
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async() =>{ //tanto os parâmetros da função quanto o retorno estão tipados
  const {data} = await api.get('episodes', {
    params:{
      _limit: 12,
      _sort: 'publishes_at',
      _order: 'desc'
  }
})
  const episodes = data.map(episode =>{
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      published_at: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: convertDurationToTimeString(episode.file.duration),
      description: episode.description,
      url: episode.file.url,
    };
  })

  return{
    props:{ // conceito de propriedades do react
      episodes: data
    },
    revalidate: 60*60*8, //60 segundos * 60 minutos * 8 = a cada 8 horas uma nova versão dessa página será criada (um podcast novo a cada 8 horas)
  }
}  

