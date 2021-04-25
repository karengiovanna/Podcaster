import Button from "./Button.js";

/* isolar componentes ajuda a não repetir códigos*/
/* quando há algo que se repete (mesmas listagem ou mesmo pedaço de interface em diferentes lugares de uma aplicação encapsulamos o componente e o utilizamos em vários lugares*/
/* react é feito de componentes em todos os lugares*/

function App() {
  return (
    <> 
      <Button>Clique aqui</Button> {/*passando a informação dentro do componente. Podemos acessá-la por meio do .children*/}
    </>
  );
}

export default App;
