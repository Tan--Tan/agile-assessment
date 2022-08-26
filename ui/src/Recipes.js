import { 
  Container, 
  Row, 
  Col, 
  Card,
  Image,
  Text,
 } from 'react-bootstrap';

import api from './api'

function Home() {
  const { data, refetch, isFetching } = api.useGetRecipesQuery()

  return (
    <Container>
      <Row>
        <Col>
          <h1>Recipes</h1>
        </Col>
      </Row>
      <Row>
        <p>
          You can make {data?.length} recipes
        </p>
      </Row>
      <Row>
        <Col>
          {data?.map(item => 
            <Card key={item.id} >
              <Row>
                <Col xs={4} style={{height:'100px'}}>
                  <Card.Img as={Image} src={item.image} style={{objectFit: 'cover', height: '100%', width: '100%'}} />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body> 
                </Col>
              </Row>
              
              
            </Card>
          )}
          
        </Col>
      </Row>

    </Container>
  );
}

export default Home;
