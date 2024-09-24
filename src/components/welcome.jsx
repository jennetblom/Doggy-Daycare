import React from 'react';
import { Link } from 'react-router-dom';
import '../Welcome.css';
import dogicon from '../assets/doggydaycare4.png';


const Welcome = () => {
    return (
        <section>
            <img src={dogicon} />
            <h2>Welcome doglovers!</h2>
            <h3>Here at Doggy daycare, we keep track of all the dogs that visits us!  😃</h3>
            <Link to="/dogs" >
                <br></br>
                <button class="button">See the dogs</button>
            </Link>

        </section>
    )
}
export default Welcome