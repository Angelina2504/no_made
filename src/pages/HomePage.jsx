import { Link } from 'react-router-dom';
import "../styles/homePage.css"


function Homepage() {
   
    return (
   
     <div className="homePage">
    

    <div className='citation'>
    Avec No-made, osez l'aventure intérieure et extérieure avec des randonnées inspirantes,<br/> découvrez la flore et respirez le bon air frais de la nature.
    </div>

    <div className="button-container">
    <Link to="http://localhost:5173/plantes" className="buttonPlantes">Découvrir</Link>
    </div>
<div className="audio-container">
     <audio className='audio' controls autoPlay >
        { <source src="/birdsong-in-kabaty.wav" type="audio/wav" /> }
     </audio>
    </div>
        </div>
    )
}

export default Homepage;