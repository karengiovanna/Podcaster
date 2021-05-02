import {GetStaticPaths, GetStaticProps} from 'next';
import {api} from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


// embora esteja falando de episodio, iremos mostrar dados diferentes. Por isso devemos fazer essa tipagem para cada componente que vai lidar com o episódio
type Episode ={
        id: string;
        title: string;
        thumbnail: string;
        members: string;
        duration: string;
        durationAsString: string;
        url: string;
        publishedAt: string;
        description: string; //aqui tem description
};

type EpisodeProps ={
        episode: Episode;
}

export default function Episode({episode}: EpisodeProps){
        //const router = useRouter(); //so pode ser usado dentro de um componente
        return(
                <h1>{episode.title}</h1> //tudo o que é digitado após episode/ aparece na tela
        )
}

// exportar um método chamado getStaticPaths : tipagem do método = é uma função assincrona
export const getStaticPaths: GetStaticPaths = async ()=> {
        return{
                paths: [],
                fallback: 'blocking'
        }
}

// obter o slug do episodio que sera acessado por meio dos parametros 
//dentro do contexto (ctx) tenho o params
export const getStaticProps: GetStaticProps = async (ctx) => {
        //carregamento dos dados do episódio
        const {slug} = ctx.params; //slug é o nome que colocamos no arquivo

        const { data } = await api.get(`/epidodes/${slug}`)
        
        const episode= {
                id: data.id,
                title: data.title,
                thumbnail: data.thumbnail,
                members: data.members,
                publishedAt: format(parseISO(data.published_at), 'd MMM yy', {locale: ptBR}),
                duration: Number(data.file.duration),
                durationAsString: convertDurationToTimeString(Number(data.file.duration)), 
                description: data.description,
                url: data.file.url,
        };
        return{
                props: {
                        episode, 

                },
                revalidate: 60*60*24, //atualizar a cada 24 horas
        }
}