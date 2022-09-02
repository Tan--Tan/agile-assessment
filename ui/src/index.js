import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import api from './api'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './Home';
import Pantry from './Pantry';
import Recipes from './Recipes';
import Recipe from './Recipe';
import Favourites from './Favourites';
import Shopping from './Shopping';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={api}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pantry" element={<Pantry />} />
          <Route path="recipes" element={<Recipes />}>
            <Route path=":recipeId" element={<Recipe />} />
          </Route>
                    {/* Del below 1 later */}
                    <Route path="recipetesting" element={<Recipe />} /> 
          <Route path="favourites" element={<Favourites />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ApiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
