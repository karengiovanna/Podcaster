// SPA
// SSR
// SSG

import {GetStaticProps} from 'next';
// import { api } from '../services/api';
// import {format, parseISO} from 'date-fns'; //converte data em string para date em js
// import ptBR from 'date-fns/locale/pt-BR'; // data em português
// import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';


// type Episode = {
//   id: string;
//   title: string;
//   thumbnail: string;
//   description: string;
//   url: string;
//   members: string;
//   published_at: string;
//   //....
// }

// type HomeProps = {
//   episodes: Episode[]; //um array de episódios
// }

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async() =>{ 
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{ // conceito de propriedades do react
      episode: data
    },
    revalidate: 60*60*8, //60 segundos * 60 minutos * 8 = a cada 8 horas uma nova versão dessa página será criada (um podcast novo a cada 8 horas)
  }
}  

