import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

//del later
const recipeData = {
    id: 1,
    title: "Recipe 1",
    image: "https://img.hellofresh.com/hellofresh_s3/image/thai-green-style-diced-chicken-breast-curry-e561b7b1-39c0ba83.jpg"

  };
const ingredientData = [
  {name: "Jasmine Rice", size: "150", unit: "g"},
  {name: "Garlic Clove", size: "2", unit: "unit"},
  {name: "Thai Green Curry Paste", size: "1", unit: "sachet"},
  {name: "Chicekn Stock Paste", size: "10", unit: "g"},
  {name: "Red Chilli", size: "1/2", unit: "unit"},
  {name: "Coconut Milk", size: "200", unit: "mililiter"}
];
const nutritionData = {"calories": "650kcal", "protein": "43.6g",
  "fat": "21.9g", "carbs": "70.4g"};

function Home() {
  return (
    <>
      <Row className="header">
        <Col>

        </Col>
      </Row>
      <Row className="h-75 main">
        <Row className="g-0">
          <Col>
            <h2 style={{fontWeight: 400, textAlign: 'center', paddingTop:'0.5em'}}>
              {recipeData?.title}
            </h2>
          </Col>
        </Row>
        <Row className="g-0">
          <Col>
            dfd
          </Col>
          <Col>
            <a href={recipeData?.image} target="_blank">
              Visit full recipe</a> 
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Add Serving size component later */}
          </Col>
        </Row>
        <div>
          <h3><b>Ingrediens</b></h3>
          <ListGroup>
          {ingredientData?.map(item =>

              <ListGroup.Item className="ingredientList">
                {item.size}
                {item.unit}
                <span style={{ float:"right" }}>{item.name}</span>
              </ListGroup.Item>
          )}
          </ListGroup>
        </div>

        <div>
          <h3><b>Nutrition Facts</b></h3>
          <i>Amount Per Serving</i>
          <ListGroup>
            {Object.entries(nutritionData).map(([key, value]) => {
              return (
                <ListGroup.Item className="nutritionList"> {key} 
                  <span style={{ float: "right" }}>{nutritionData[key]}</span>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </div>
      </Row>
    </>
  );
}

export default Home;
