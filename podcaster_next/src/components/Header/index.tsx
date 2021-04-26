import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
// foi utilizado o comando: yarn add date-fns


import styles from './styles.module.scss';

export function Header(){
    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR, //cada uma dessas strings no format equivalem a uma formatação
    });
    
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcaster"/> {/* tudo o que está na pasta public é acessível a todos*/}

            <p>O melhor para você ouvir, sempre</p>
            
            <span>{currentDate}</span>
        </header>
    );
}