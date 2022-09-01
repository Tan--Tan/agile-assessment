import './App.css';
import { NavLink, Link, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import styled from "styled-components";

import {
  Container,
  Row,
  Col,
  Nav
} from 'react-bootstrap';

function App() {
  return (
    <>
    <Container fluid className="h-100 ">
      <Row className="h-90">
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row className="h-10 bottomNav">
        <Col>
          <Nav className="d-flex justify-content-center" >
            <Nav.Link as={SLink} to="/">
              <AiFillHome size={25}/>
              Home
              </Nav.Link>
            <Nav.Link as={SLink} to="/pantry">
              <AiOutlineHome size={25}/>
              Pantry
              </Nav.Link>
            <Nav.Link as={SLink} to="/favourites">
              <MdFavorite size={25}/>
              Favourites
              </Nav.Link>
            <Nav.Link as={SLink} to="/shopping">
              <RiShoppingCart2Fill size={25}/>
              Shopping
              </Nav.Link>

          </Nav>
        </Col>
      </Row>
    </Container>
    </>
  );
}
// Styling nav links and icons using styled-components
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg{
    color: white;
  }
  font-size:0.7em;
  color: black;
  &:hover {
    transition: 0.1s ease-out;
    color: #24BF82;
    svg{
      transition: 0.1s ease-out;
      color: #24BF82;
    }
}
  &.active{
    color: black;
    svg{ 
      color: black;
    }
  }
`;

export default App;
