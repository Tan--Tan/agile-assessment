import Container from 'react-bootstrap/Container';

import api from './api'

function Home() {
  const { data, refetch, isFetching } = api.useGetRecipesQuery()

  return (
    <Container>
      <h1>Recipes</h1>
    </Container>
  );
}

export default Home;
