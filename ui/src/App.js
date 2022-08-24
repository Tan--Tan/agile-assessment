import './App.css';
import { Link, Outlet } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Nav
} from 'react-bootstrap';

function App() {
  return (
    <>
    <Container fluid className="h-100">
      <Row className="h-90">
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row className="h-10">
        <Col>
          <Nav className="d-flex justify-content-center">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pantry">Pantry</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/favourites">Favourites</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/shopping">Shopping</Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
