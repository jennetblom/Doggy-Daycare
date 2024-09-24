import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import dogicon from '../assets/doggydaycare4.png';
import altimage from '../assets/dogalt.jpg';


const Catalogue = ({ dogData, imageErrors, handleError }) => {

    if (!dogData || !Array.isArray(dogData) || dogData.length === 0) {
        return <p>No dog data available.</p>;
    }


    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <section>
            <Link to="/">
                <img className="icon" src={dogicon} />
            </Link>
            <h3 className='iconText'>Doggy daycare</h3>

            <div className='catalogue-container'>
                <h2>Catalogue of all the dogs</h2>
                <input type="text" placeholder='Search...' />
                <br></br><h2></h2>

                <div className='gallery'>
                    {dogData.map((dog, index) =>
                        <div key={index} className='dog-item'>
                            <Link to={`/dogs/${index + 1}`}>
                                <img className='image' src={imageErrors[index] || !dog.img ? altimage : dog.img}
                                    onError={() => handleError(index)} />
                            </Link>
                            <h3>{dog.name}</h3>
                            <p>{capitalize(dog.breed)}, {dog.sex} {dog.age}</p>
                            <p>Present at the daycare: {dog.present ? "Yes" : "No"}</p>
                            <p>{index}</p>
                        </div>
                    )}
                </div>
                
            </div>
        </section>
    )
}

export default Catalogue