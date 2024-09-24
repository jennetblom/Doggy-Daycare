import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dogicon from '../assets/doggydaycare4.png';
import altimage from '../assets/dogalt.jpg';



const Specifics = ({ dogData, imageErrors, handleError }) => {

    const { id } = useParams();
    // const dogId = parseInt(id) - 1;
    // const dog = dogData[dogId];
    const dog = dogData[id - 1];

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
            <Link to="/">
                <img className="icon" src={dogicon} />
            </Link>
            <h3 className='iconText'>Doggy daycare</h3>


            <img className='image'
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
        </section>
    )
}

export default Specifics