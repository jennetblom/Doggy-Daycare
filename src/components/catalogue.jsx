import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import dogicon from '../assets/doggydaycare4.png';
import altimage from '../assets/dogalt.jpg';
import search from '../assets/search.png';
import '../styles/catalogue.css';

const Catalogue = ({ dogData, imageErrors, handleError }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBreed, setSelectedBreed] = useState('');
    const [selectedSex, setSelectedSex] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [presentFilter, setPresentFilter] = useState('');
    const [filteredDogs, setFilteredDogs] = useState(dogData);

    if (!dogData || !Array.isArray(dogData) || dogData.length === 0) {
        return <p>No dog data available.</p>;
    }

    const uniqueBreeds = [...new Set(dogData.map(dog => dog.breed))];

    const ages = Array.from({ length: 20 }, (_, index) => index + 1)

    const handleFilter = () => {
        const newFilteredDogs = dogData.filter(dog => {
            const matchesPresent = presentFilter === '' || (presentFilter === 'present' && dog.present) || (presentFilter === 'not-present' && !dog.present);
            const matchesAge = selectedAge === '' || parseInt(dog.age, 10) === parseInt(selectedAge, 10);
            const matchesSex = selectedSex === '' || dog.sex === selectedSex;
            const matchesBreed = selectedBreed === '' || dog.breed === selectedBreed;
            const matchesName = dog.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesAge && matchesBreed && matchesName && matchesSex && matchesPresent;
        })

        console.log('Filtered Dogs:', newFilteredDogs);
        setFilteredDogs(newFilteredDogs);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        handleFilter();
    }
    
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <section className='flex-container'>
            <div className='flex-item1'>
                <Link to="/">
                    <img className="icon" src={dogicon} />
                </Link>
                <h3 className='iconText'>Doggy daycare</h3>
            </div>

            <div className='catalogue-container'>

                <h2>Catalogue of all the dogs</h2>
                <div className='flex-selectContainer'>
                    <select className='select' onChange={(e) => setSelectedAge(e.target.value)}>
                        <option value="">All ages</option>
                        {ages.map((age) => (
                            <option key={age} value={age}>{age}</option>
                        ))}
                    </select>
                    <select className='select' onChange={(e) => setSelectedBreed(e.target.value)}>
                        <option value="" >Select breed</option>
                        {uniqueBreeds.map((breed, index) => (
                            <option key={index} value={breed}>{capitalize(breed)}</option>
                        ))}
                    </select>
                    <select className='select' onChange={(e) => setSelectedSex(e.target.value)}>
                        <option value="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    <select className='select' onChange={(e) => setPresentFilter(e.target.value)} >
                        <option value="">Select presence</option>
                        <option value="present">Present</option>
                        <option value="not-present">Not present</option>
                    </select>
                </div>

                
                <div className='searchbar'>
                    <input type="text" placeholder='Search by name...' id='search' value={searchTerm} onChange={handleSearchChange} />
                    <div className="button-container">
                    <button id='button-search' onClick={handleFilter}>
                        <img src='https://cdn-icons-png.flaticon.com/128/751/751381.png' />
                    </button>
                    </div>      
                </div>


                <br></br>
                <div className='gallery'>
                    {filteredDogs.map((dog, index) =>
                        <div key={index} className='dog-item'>
                            <Link to={`/dogs/${index + 1}`}>
                                <img className='gallery-image' src={imageErrors[index] || !dog.img ? altimage : dog.img}
                                    onError={() => handleError(index)} />
                            </Link>
                            <h3>{dog.name}</h3>
                            <p>
                                <span>{capitalize(dog.breed)}</span> |
                                <span> {capitalize(dog.sex)} </span> |
                                <span> {dog.age}</span>

                            </p>
                            <p style={{ color: dog.present ? 'limeGreen' : 'black' }}>{dog.present ? "Enjoying daycare today" : "Not here today"}</p>
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Catalogue