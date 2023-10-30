import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './searchFilm.css';

interface Movie {
  id: number;
  title: string;
}

interface Genre {
  id: number;
  name: string;
}

function SearchFilms() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  const apiKey = '2955ed558f1e71d9871ec2a96694678a';
  const moviesPerPage = 10;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  useEffect(() => {
    if (searchTerm || selectedGenre) {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=${currentPage}`;
      if (selectedGenre) {
        url += `&with_genres=${selectedGenre}`;
      }
      
      axios
        .get(url)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTerm, apiKey, currentPage, selectedGenre]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genreId = parseInt(event.target.value);
    setSelectedGenre(genreId === 0 ? null : genreId);
  };

  return (
    <div className='container'>
      <h1>Movie Search</h1>
      <div className='search-container'>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />
        <select value={selectedGenre || '0'} onChange={handleGenreChange} className='genre-select'>
          <option value="0">All Genres</option>
          {genres.map((genre: Genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <ul className='search-results'>
        {searchResults.length > 0 ? (
          searchResults.map((result: Movie) => (
            <li key={result.id} className='search-result'>
              <Link to={`/film/${result.id}`} className='search-link'>
                {result.title}
              </Link>
            </li>
          ))
        ) : (
          <li className='no-results'>No results found</li>
        )}
      </ul>
      <div className='pagination'>
        {searchResults.length > 0 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>
        )}
        {searchResults.length > 0 && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={searchResults.length < moviesPerPage}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchFilms;
