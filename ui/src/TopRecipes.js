import { Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";
import api from './api';

function TopRecipes({ cat }) {
  const { data, isLoading } = api.useGetRecipesQuery({ cat });
  return (
    isLoading ? <>Loading</> : (
      <Row className="top-recipe">
      <h3>{cat}</h3>
      <Row className="top-recipe-item">
        {data.map(i =>(
          <Col key={i.id}>
            <Link to={`recipes/${i.id}`} />
            <img src={i.imgURL} />
            <h5>{i.title}</h5>
          </Col>
        ))}
      </Row>
    </Row>
    )
  )
}

export default TopRecipes