import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome';


function App() {
  
  

  const [dogData, setDogData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [count, setCount] = useState(0);
  let apiUrl = 'https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758';


  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(dogData => setDogData(dogData.record));
  },[]); 

  return (
    <div>
      <Welcome />
      

        {/* {dogData ? (
          <div>
          <p>Hello {dogData[count].name}</p>
          
          <button onClick={() => setCount(count + 1)}>
            <img src={dogData[count].img} />
            </button>
          </div>
        ) : (
          'Loading'
        )
      } */}
     </div>
  
  
  )
}

export default App
