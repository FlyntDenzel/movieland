import React from 'react';
import { useEffect } from 'react';
// api key 
const API_URL = 'htpp://omdb.com?apikey=1511db18';

function App() {
    const search = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
    }

    useEffect(() => {

    }, []);
  return (
    <div>
        <h1>App</h1>
    </div>
  )
}

export default App;