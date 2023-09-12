import React from 'react';
import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=1511db18';
const movie1 = 
{
    "Title": "Shrek 2",
    "Year": "2004",
    "imdbID": "tt0298148",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


function App() {
    const search = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        // const response = await fetch('http://www.omdbapi.com')
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        search('Shrek');
    }, []);
  return (
    <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
            <input 
                placeholder='Search for movies'
                value='Superman'
                onChange={() => {}}
            />
            <img
                src={SearchIcon}
                alt='Search' 
                onClick={() => {}}
            />
        </div>
        <div className='container'>
            <div className='movie'>
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img 
                        src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
                        alt={movie1.Title}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;