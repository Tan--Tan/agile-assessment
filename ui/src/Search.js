import { useRef } from 'react';
import { Row } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import { useLocation, useNavigate } from 'react-router-dom';
import api from './api';

function Search() {
    let _typeahead = useRef();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { data, isLoading } = pathname.includes('pantry') ? 
    api.useGetIngredientsQuery() :
    api.useGetRecipesQuery();
    const listData = isLoading ? [] : data.map(i => ({ id: i.id, label: i.title }));

    const changePantry = (id) => {
        const list = JSON.parse(localStorage.getItem("pantry")) || [];
        const newList = list.includes(id) ? list.filter(i => i !== id) : [...list, id];
        localStorage.setItem("pantry", JSON.stringify(newList));
    };

    return (
        <Row className="search-component">
            <Typeahead
                ref={_typeahead}
                onChange={selected => {
                    if(selected.length > 0) {
                        pathname.includes('pantry') ? 
                        changePantry(selected[0].id) : 
                        navigate(`recipes/${selected[0].id}`)
                    }
                    _typeahead.current.clear();
                }}
                options={listData}
            />
        </Row>
        
    );
}

export default Search;