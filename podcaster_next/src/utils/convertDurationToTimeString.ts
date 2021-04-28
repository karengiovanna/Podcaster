
// a duração esta em segundos no arquivo json 
//vamos ocnverter para minutos e string
export function convertDurationToTimeString(duration: number){
               const hours = Math.floor(duration / (60*60));//arredondar para o menor numero que sobra da divisao. math.floor
               const minutes = Math.floor((duration%60)); //quantos segundos sobram da divisao. math.floor
               const seconds = duration % 60; // resto da divisao por 60

               const timeString = [hours, minutes, seconds]
               .map(unit => String(unit).padStart(2,'8')) //para que cada unidade de medida de tempo tenha dois dígitos
               .join(':')

               return timeString;
}