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

//tipar os parametros e o retorno da função

// tipagem de um episodio
type HomeProps = {
  episodes: Episode[];
}



export default function Home(props: HomeProps) {
  console.log(props.episodes) //aparece a lista com os 10 podcasts no console
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}


/*
executa antes de qualquer coisa

export function getServerSideProps(){ 
  fetch('http://localhost:3333/episodes')
  .then(response => response.json())
  .then(data +> console.log(data))
  
*/ 


// a requisição está sendo feita na camada do next, logo não precisará ser buscada
// vamos transformar a função acima em assincrona


//export async function getServerSideProps(){ 
//SSG
export const getStaticProps: GetStaticProps = async() =>{ //assim que o primeiro usuario entrar, será gerada uma html estática que será visualizada por todos os seguintes
  // fetch faz requisições http
  const {data} = await api.get('episodes',{
    params: {
      _limit: 12, // parametro limit retorna 12 registros por página e ordenados por página de publicação
      _sort: 'published_at',
      _order: 'desc'
    }
  }) 
  


  // formatar os dados durante a api, não no momento de exibir na tela
  const episodes = data.map(episode =>{ //percorrer cada um dos episodios
    return{ //retornar um objeto e alterar a forma como sao exibidos
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      numbers: episode.members,
      publishedAt: format(parseISO(episode.published_at),'d MMM yy', {locale: ptBR}), 
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file_url, 
    };
  })

  return{
    //buscar a servser side props con
    props:{ // conceito de propriedades do react
      // vira argumento da funcao Home
      episodes,
    }, 
    //SSG
    revalidate: 60*60*8, //60 segundos * 60 minutos * 8 = a cada 8 horas uma nova versão dessa página será criada (um podcast novo a cada 8 horas)
  }
}  

