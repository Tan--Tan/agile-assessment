import { Row } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import { useLocation, useNavigate } from 'react-router-dom';
import api from './api';

function Search() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { data, isLoading } = pathname.includes('pantry') ? 
    api.useGetIngredientsQuery() :
    api.useGetRecipesQuery();
    const listData = isLoading ? [] : data.map(i => ({ id: i.id, label: i.title }));

    const changePantry = (ingredientId) => {
        // add/remove from localStorage
        console.log(ingredientId)
    };

    return (
        <Row className="search-component">
            <Typeahead
                onChange={selected => pathname.includes('pantry') ? 
                    changePantry(selected[0].id) : 
                    navigate(`recipes/${selected[0].id}`)
                }
                options={listData}
            />
        </Row>
        
    );
}

export default Search;