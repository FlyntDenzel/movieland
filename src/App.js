// import React from 'react';
import { useEffect } from 'react';


const API_URL = 'http://omdb.com?apikey=1511db18';

function App() {
    const search = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.search);
    }

    useEffect(() => {
        search('Superman');
    }, []);

  return (
    <div>
        <h1>App</h1>
    </div>
  )
}

export default App;