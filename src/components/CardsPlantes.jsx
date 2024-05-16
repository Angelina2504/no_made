import PropTypes from "prop-types";
import style from "../styles/cardsplantes.module.css"

export default function CardsPlantes({ plante }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.imgPlante} src={plante.image}/>
        <figcaption className={style.description}> 
        <h2 className={style.nomPlante}> {plante.nom} </h2>
        <h3>Espèce : {plante.espece}</h3>
        <h4> Environnement : {plante.environnement}</h4>
        <p>Description : {plante.description} </p>
       </figcaption>
         </div>
    </>
  );
}


CardsPlantes.propTypes={
    plante : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}