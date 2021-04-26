// SPA
// SSR
// SSG

export default function Home(props) {
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
export async function getStaticProps(){ //assim que o primeiro usuario entrar, será gerada uma html estática que será visualizada por todos os seguintes
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    //buscar a servser side props con
    props:{ // conceito de propriedades do react
      // vira argumento da funcao Home
      episodes: data,
    }, 
    //SSG
    revalidate: 60*60*8, //60 segundos * 60 minutos * 8 = a cada 8 horas uma nova versão dessa página será criada (um podcast novo a cada 8 horas)
  }
}  