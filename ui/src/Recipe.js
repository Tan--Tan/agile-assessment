import {
  Row,
  Col,
  Image
} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import api from './api';

//del later
const nutritionData = {"calories": "650kcal", "protein": "43.6g",
  "fat": "21.9g", "carbs": "70.4g"};

function Recipe() {
  const { recipeId } = useParams()
  const { data, isLoading } = api.useGetRecipeByIdQuery(recipeId)
  return (
    isLoading ? <>Loading</>: (
    <>
      <Row className="g-0">
        <Image src={data.imgURL} />
      </Row>
      <Row className="g-0 h-75 main">
        <Row className="g-0">
          <Col>
            <h2 style={{fontWeight: 400, textAlign: 'center', paddingTop:'0.5em'}}>
              {data.title}
            </h2>
          </Col>
        </Row>
        <Row className="g-0">
          <p>{data.desc}</p>
        </Row>
        <Row>
          <Col>
            {data.servings} servings
          </Col>
        </Row>
        <Row className="g-0">
          <Col>
            <h3><b>Ingredients</b></h3>
            <ListGroup>
            {data.ingredients.map(item =>
                <ListGroup.Item className="ingredientList" key={item.name}>
                  {item.name}
                  <span style={{ float:"right" }}>{item.value} g</span>
                </ListGroup.Item>
            )}
            </ListGroup>
          </Col>
        </Row>
        <Row className="g-0">
          <Col>
            <h3><b>Cooking Steps</b></h3>
            <ListGroup >
            {data.cookingSteps.map((item, i) =>
                <ListGroup.Item key={1} id="rec" >
                  {item}
                </ListGroup.Item>
            )}
            </ListGroup>
          </Col>
        </Row>
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
    </>)
  );
}

export default Recipe;
