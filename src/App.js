import CalculadorApp from './components/calculator/CalculadorApp'
import Copyrigth from './components/pages/Copyrigth'
import SocialMedia from './components/pages/SocialMedia'
import Footer from './Containers/Footer'
import Header from './Containers/Header'
import Main from './Containers/Main'
import bascula from './images/bascula-dibujo.png'
import { Container } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';
function App() {
  return (
    <>
      <Container fluid>
        <Header title="Calculo de indice de masa corporal" />
        <Main>
          <CalculadorApp bascula={bascula} />
        </Main>
        <Footer>
          <SocialMedia />
          <Copyrigth />
        </Footer>
      </Container>
    </>
  );
}

export default App;
