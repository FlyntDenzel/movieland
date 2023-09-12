import React from 'react';
import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=1511db18';

function App() {
    const search = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        // const response = await fetch('http://www.omdbapi.com')
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        search('Dragonball');
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
    </div>
  )
}

export default App;