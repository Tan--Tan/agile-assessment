import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import TopRecipes from "./TopRecipes";

function Home() {
  return (
      <div className="h-75 main">
        <Row id="getStarted" className="g-0">
          <Col>
            <IoFastFoodOutline size={70} />
            <p> Get started by <br/> adding your <br/> ingredients</p>
            <Button id="addIngredients" as={Link} to="/pantry" size="lg">
              Add</Button>
          </Col>
        </Row>
        <Row className="g-0">
            <Link to="/recipes">All Recipes</Link>
            <TopRecipes />
            <TopRecipes />
        </Row>
      </div>
  );
}

export default Home;
