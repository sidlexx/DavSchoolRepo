import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header'
import Container from 'react-bootstrap/Container'
import Form from './Components/Form'

function App() {
  return (
    <div>
       <NavBar/>
      <Container>
          <Header/>
          <br/><br/>
          <Form/>
      </Container>
    </div>
  );
}

export default App;
