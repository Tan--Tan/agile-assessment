import { 
  Container, 
  Row, 
  Col, 
  Card,
  Image,
 } from 'react-bootstrap';
 import { Link, useLocation } from "react-router-dom";
import api from './api';

function Recipes() {
  const { data } = api.useGetRecipesQuery();
  const { pathname } = useLocation();
  return (
    <Row className="g-0 h-100 main">
      <Row className="g-0">
        <p>
          You can make {data?.length} recipes
        </p>
      </Row>
      <Row>
        <Col>
          {data?.map(item => 
            <Link key={item.id} to={`${pathname}/${item.id}`} >
              <Card className="recipeItem">
              <Row>
                <Col xs={4} style={{height:'100px'}}>
                  <Card.Img as={Image} src={item.imgURL} style={{objectFit: 'cover', height: '100%', width: '100%'}} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body> 
                </Col>
              </Row>
              </Card>
            </Link>
          )}
          
        </Col>
      </Row>
    </Row>
  );
}

export default Recipes;
