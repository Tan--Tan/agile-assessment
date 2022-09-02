import {useLocation} from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Search from './Search';

function Header() {
    const location = useLocation();
    let title = ''

    switch (location.pathname) {
        case '/recipes':
            title = 'Recipes';
            break;
        case '/pantry':
            title = 'Pantry';
            break;
        case '/favourites':
            title = 'Favourites';
            break;
        case '/shopping':
            title = 'Shopping';
            break;
        case '/':
            title = 'GoodChef';
            break;
        default: 
            title = 'Empty';
            break;
    }
    return (
        title !=='Empty' ? 
        <Row className="h-25 app-header">
            <h1>{title}</h1>
            <Search />
        </Row>
        : <></>
    );
}

export default Header;