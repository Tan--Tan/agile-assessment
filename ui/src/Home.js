import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import Italian from './components/Italian';

function Home() {
  return (
    <>
      <Row className="header">
        <Col>
          <h1>GoodChef</h1>
        </Col>
      </Row>
      <Row className="h-75 main">
        <Row id="getStarted" className="h-25 g-0">
          <Col>
            <IoFastFoodOutline size={70}/ >
            <p> Get started by <br/> adding your <br/> ingredients</p>
            <Button id="addIngredients" as={Link} to="/pantry" size="lg">
              Add</Button>
          </Col>
        </Row>
        <Row className="h-35 g-0">
          <Col>
            <Italian />
          </Col>
        </Row>

      </Row>
    </>
  );
}

export default Home;
