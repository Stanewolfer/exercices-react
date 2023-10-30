import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./filmDetails.css"
import axios from 'axios';

interface FilmDetails {
  id: number;
  title: string;
  overview: string;
  genres: { id: number; name: string }[];
}

function FilmDetailsComponent() {
    const { id } = useParams();
    const [filmDetails, setFilmDetails] = useState<FilmDetails | null>(null);
    const apiKey = '2955ed558f1e71d9871ec2a96694678a'; // Replace with your TMDb API key
  
    useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        .then((response) => {
          setFilmDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id, apiKey]);
  
    if (!filmDetails) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='container'>
        <h2>Movie Details: {filmDetails.title}</h2>
        <p>{filmDetails.overview}</p>
        <h3>Genres:</h3>
        <ul>
          {filmDetails.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default FilmDetailsComponent;