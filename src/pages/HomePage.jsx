import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/homePage.css"


function Homepage() {
   
    return (
     <div className="homePage">

            <Navbar/>
       
    <div className="audio-container">
     <audio className='audio' controls autoPlay >
        <source src="/birdsong-in-kabaty.wav" type="audio/wav" />
     </audio>
    </div>

    <div className='citation'>
        <blockquote className='phrase'>"Ne demande jamais ton chemin à quelqu'un qui le connaît, car tu ne pourrais pas t'égarer !"</blockquote>
        <cite className='auteur'>Nahman de Braslaw</cite>
    </div>

    <div className="button-container">
    <Link to="http://localhost:5173/plantes" className="buttonPlantes">Découvrir</Link>
    </div>

        </div>
    )
}

export default Homepage;