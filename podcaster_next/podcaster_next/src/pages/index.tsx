import {GetStaticProps} from 'next';
import {api} from '../services/api';
import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Episode ={
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  durationAsString: string;
  url:string;
  description: string;
  thumbnail: string;
  duration:string;

  //..
}

//typando as propriedades do componente home
type HomeProps = {
  episodes: Array<Episode>;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index teste</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const {data} = await api.get('episodes', {
    params:{
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
  
  //alterar a forma como os dados são exibidos
  const episodes = data.map(episode =>{ //percorre cada um dos episodios
    return{ 
      id: episode.id,
      title: episode.title,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy',{locale: ptBR}),
      thumbnail: episode.thumbnail,
      description: episode.description,
      url: episode.file.url,
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
    };
  })

  return{
    props:{
      episodes
    },
    revalidate: 60*60*1,
  }
}