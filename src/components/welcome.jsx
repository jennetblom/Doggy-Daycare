import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dogicon from '../assets/doggydaycare4.png';
import '../styles/welcome.css';


const Welcome = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(window.location.pathname === 'Doggy-Daycare'){
            navigate('/');
        }
        }, [navigate]);
    
    return (
        <section className='welcome'>
            <Link to="/">
            <img src={dogicon}/>
            </Link>
            <h2>Welcome doglovers!</h2>
            <h3>Here at Doggy daycare, we keep track of all the dogs that visits us!  😃</h3>
            
            {/* <h4>We provide grooming, training, and plenty of playtime for our furry friends.</h4> */}
            <h4>Explore our catalogue to see all the wonderful dogs!</h4>
            <Link to="/dogs" >
                <br></br>
                <button className="button">See the dogs</button>
            </Link>

        </section>
    )
}
export default Welcome