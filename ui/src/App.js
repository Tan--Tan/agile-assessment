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

import './App.css';

import Header from './Header'

function App() {
  return (
    <div className="h-100 w-100">
      <div className="h-90 w-100">
        <Header />
        <Row className="g-0 h-75">
          <Outlet />
        </Row>
      </div>
      <Container className="h-10">
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
      </Container>
    </div>
  );
}
// Styling nav links and icons using styled-components
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg{
    color: lightgray;
  }
  color: gray;
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
