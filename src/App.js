import { meme } from "./data/memeData";
import './App.css'
import  MemeProvider from "./context/MemeProvider";
import Container from "./components/Container";

function App() {

  return (
    <MemeProvider>
      <Container />
    </MemeProvider>
    
  );
}

export default App;
