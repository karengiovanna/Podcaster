import Button from "./Button";

function App() {
  return (
    <div>
      <center> 
        <h1> Karen Giovanna</h1>
        { /* <Button title ="GitHub"/>  mandando title como atributo*/ }
        <Button>GitHub</Button>  { /*mandando title como filho*/ }
      </center>
      
    </div>

  );
}

export default App;
