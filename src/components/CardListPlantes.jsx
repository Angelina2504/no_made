import plantes from "../assets/data/plantes.json";
import CardsPlantes from "../components/CardsPlantes"; 
import {Link} from "react-router-dom";
import style from "../styles/cardlist.module.css"
import imag from "../../public/imagesPlantes/tree.jpg"


export default function CardListPlantes (){
    return (
        <> 

         {/* <div className={style.citation}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis maiores, obcaecati facilis animi quod non qui laboriosam voluptatum ratione dolores, quisquam ducimus enim eius. Earum accusantium officiis praesentium numquam? </div> */}
           <img className={style.imgArbre} src={imag}/>
        <p className={style.titrePlante}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, ad. Dicta consequuntur aspernatur beatae tempore accusantium nostrum fugiat voluptatem! Doloribus aliquam fugiat eligendi quam reprehenderit laboriosam voluptates sed dignissimos perferendis?</p>
        <div className={style.AllCardPlant}> 
            {plantes.map((p) => ( <CardsPlantes plante={p} key={p.id}/>))}
        </div>

        <div className={style.containerButton}> 
        <Link to="/rando" className={style.buttonSuivant}>
            <button className={style.button}>
            <h2>Partir à l'aventure</h2>
            </button>
        </Link>
        </div>
        </>
    );
}