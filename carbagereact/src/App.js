import './App.css';
import GarbageInput, { TrackLocation, TipSidebar,QuickLook1 } from './MainPage';
import Navig from './Navig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navig/>
      <Container>
        <Row>
          <Col>
            <TipSidebar/>
          </Col>
          <Col>
            <GarbageInput/>
            <TrackLocation/>
          </Col>
          <Col>
            <QuickLook1/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
