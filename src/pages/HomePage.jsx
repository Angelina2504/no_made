import { Link } from 'react-router-dom';
import "../styles/homePage.css"


function Homepage() {
   
    return (
   
     <div className="homePage">
    

    <div className='citation'>
        <blockquote className='phrase'>"Ne demande jamais ton chemin à quelqu'un qui le connaît, car tu ne pourrais pas t'égarer !"</blockquote>
        <cite className='auteur'>Nahman de Braslaw</cite>
    </div>

    <div className="button-container">
    <Link to="http://localhost:5173/plantes" className="buttonPlantes">Découvrir</Link>
    </div>
<div className="audio-container">
     <audio className='audio' controls autoPlay >
        {/* <source src="/birdsong-in-kabaty.wav" type="audio/wav" /> */}
     </audio>
    </div>
        </div>
    )
}

export default Homepage;