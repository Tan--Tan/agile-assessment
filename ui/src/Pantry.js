import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import api from './api';

function Pantry() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("pantry")) || [];
  });

  const { data, isLoading } = api.useGetIngredientsQuery();

  const toggleList = (id) => {
    const newList = list.includes(id) ? list.filter(i => i !== id) : [...list, id];
    localStorage.setItem("pantry", JSON.stringify(newList));
    setList(newList);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const localStorageList = JSON.parse(localStorage.getItem("pantry")) || [];
      if(localStorageList.filter(i => !list.includes(i)).length > 0) {
        console.log(1)
        setList(localStorageList);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <Row className="g-0 h-100 main">
      {isLoading ? <>Loading</> : data.map(i => (
          <div 
            key={i.id} 
            className={list.includes(i.id) ? "ingredient-item active" : "ingredient-item"} 
            onClick={() => toggleList(i.id)}
          >
            {i.title}
          </div>
        ))}
    </Row>
  );
}

export default Pantry;
