import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dogicon from '../assets/doggydaycare4.png';
import altimage from '../assets/dogalt.jpg';
import leftbutton from '../assets/left.png';
import rightbutton from '../assets/right.png';
import '../styles/specifics.css';



const Specifics = ({ dogData, imageErrors, handleError }) => {

    const { id } = useParams();
    const initialDogValue = dogData[id - 1];
    const [dog, setDog] = useState(initialDogValue);


    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (!dog) {
        return <div>Hunden hittades inte</div>
    }

    const pronoun = (gender) => {
        if (gender === "male") {
            return "his";
        } else if (gender === "female") {
            return "her";
        } else {
            return "their";
        }
    }
    return (
        <section className='doginfo'>
            <div className='flex-icon'>
                <Link to="/">
                    <img className="icon" src={dogicon} />
                </Link>
                <h3 className='iconText'>Doggy daycare</h3>
            </div>
            <div>
                <img className='image' id='doginfoImage'
                    src={imageErrors[id - 1] || !dog.img ? altimage : dog.img}
                    onError={() => handleError(id - 1)}
                    alt={dog.name}
                />
                <h2>Extra information about the dog</h2>
                <h3> {dog.name} is a {dog.sex} and a {dog.age}-year-old {capitalize(dog.breed)}</h3>
                <p>The dog is {dog.present ? "currently present at daycare" : "not present at daycare"} right now and {pronoun(dog.sex)} chip number is {dog.chipNumber}. </p>
                <br></br>
                <h4>Owner's contact information</h4>
                <p>The name of the owner is {dog.owner.name} {dog.owner.lastName}.</p>
                <p>You can get in touch with them by calling {dog.owner.phoneNumber}!</p>
                <br></br>
            </div>
        </section>
    )
}

export default Specifics