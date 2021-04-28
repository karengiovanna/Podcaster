import axios from 'axios';
// para substituir o fetch
// porém axios consegue setar uma baseUrl. url que vai se repetir para todas as chamadas api

//yarn add axios


export const api = axios.create({
        baseURL: 'http://localhost:3333/'  // passo o endereço que será igual em todas as chamadas que eu fizer 
})