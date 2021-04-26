//add typescript @types/react @types/node -D
// instalçao da integração do react e node com o typescript 
//npmjs.com/react para verificar se já está integrado à linguagem
// react e node traz o typescript em pacotes terceiros, outras linguagens traz na biblioteca padrão
// depois que instalaos alteramos os arquivos js para tsx
// tsx = typescript + jsc (xml/html no javascript)

/*
type User ={
    name: string,
    address:{  
        city: string,
        state: string
    }   
};


// retornar o texto de boas-vindas do site
function createWelcomeMessage(user: User){
    return 'Boas-vindas, ${user.name}. Cidade: ${user.address.city} - ${user.adress.state}!'
}

const welcomeMessage = createWelcomeMessage({
    name: 'Karen Giovanna',
    address: {
        city: 'Boa Vista',
        state: 'Roraima'
    }
})



//tipagem das propriedades de um componente

type ButtonProps = {
    title:string;
}

function Button(props){
    return(
        <button>{props.title}</button>
    )
}

// typescript faz o proprio editor manter o padrão
// segurança na escrita do código

function chamarBotao(){
    return(
        <div>
            <Button title="Button 1" />
            <Button title={1}/>
        </div>
    )
}
*/