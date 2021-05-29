import {GetStaticPaths, GetStaticProps} from 'next';
import {api} from '../../services/api';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import styles from './episode.module.scss';

type Episode = {
    id: string;
    title: string;
    members: string;
    publishedAt: string;
    durationAsString: string;
    url:string;
    thumbnail: string;
    duration:string;
    description: string;
};

type EpisodeProps ={
    episode: Episode;
}

export const getStaticPaths : GetStaticPaths = async() =>{
    return{
        paths: [],
        fallback: 'blocking',
    }
}

export default function Episode({episode}: EpisodeProps){
    return(
        <div className={styles.episode}>
            <div className={styles.thumbnailContainer}>
                <button type="button"> 
                    <img src="/arrow-left.svg" alt="Voltar"/> 
                </button>

                <Image 
                    width={700} 
                    height={160} 
                    src={episode.thumbnail}
                    objectFit="cover"
                />

                <button type ="button">
                    <img src="/play.svg" alt = "Tocar Episódio"/>
                </button>
            </div>

            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
            </header>

            <div className={styles.description} 
                dangerouslySetInnerHTML={{__html: episode.description}}/>            
        </div>
    )
}

export const getStaticProps: GetStaticProps =async (ctx) =>{
    //dentro do contexto esta onde quero buscar os dados
    const {slug} = ctx.params;
    // obter o slug do episodio que esta sendo acessado
    const {data} = await api.get(`/episodes/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy',{locale: ptBR}),
        thumbnail: data.thumbnail,
        description: data.description,
        url: data.file.url,
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
      };

    return{
        props: {
            episode,
        },
        revalidate: 60*60*24, //24 horas
    }
}