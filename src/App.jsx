import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Specifics from './components/specifics';
import React from 'react';


function App() {


  const [imageErrors, setImageErrors] = React.useState({});
  const [dogData, setDogData] = useState(null);
  const [count, setCount] = useState(0);
  let apiUrl = 'https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758';

  const handleError = (index) => {
    setImageErrors(prevState => ({ ...prevState, [index]: true }));
  };

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(dogData => setDogData(dogData.record));
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/dogs' element={<Catalogue
          dogData={dogData}
          imageErrors={imageErrors}
          handleError={handleError} />} />
        <Route path='/dogs/:id' element={<Specifics
          dogData={dogData}
          imageErrors={imageErrors}
          handleError={handleError} />} />
      </Routes>
    </div>
  )
}

export default App