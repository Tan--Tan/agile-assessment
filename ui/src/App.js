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
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/pantry">Pantry</Nav.Link>
            <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
            <Nav.Link as={Link} to="/shopping">Shopping</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
