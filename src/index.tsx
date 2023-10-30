import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ToDoList from './toDoList';
import Compteur from './compteur';
import ProductList from './productList';
import UserList from './user_profile';
import UserProfile from './userDetails';
import SearchFilms from './searchFilm';
import './index.css';
import FilmDetailsComponent from './filmsDetails';

ReactDOM.render(
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/toDoList">To Do List</Link>
        </li>
        <li>
          <Link to="/compteur">Compteur</Link>
        </li>
        <li>
            <Link to="/users">User Profile</Link>
        </li>
        <li>
          <Link to="/productList">Product List</Link>
        </li>
        <li>
          <Link to="/searchFilm">Search Film</Link>
        </li>
      </ul>
    </nav>
    <Routes> 
      <Route path="/toDoList" element={<ToDoList />} />
      <Route path="/compteur" element={<Compteur />} />
      <Route path="/" element={<h1>Accueil</h1>} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/searchFilm" element={<SearchFilms />} /> {/* use the component here */}
      <Route path="/film/:id" element={<FilmDetailsComponent />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
