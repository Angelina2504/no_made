import PropTypes from "prop-types";
import style from "../styles/cardsrandos.module.css";

export default function CardsRando({ rando }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.imgRando} src={rando.image} alt={rando.nom} />
        <figcaption className={style.description}>
          <h2 className={style.nomRando}> {rando.nom} </h2>
          <h3>Lieu : {rando.lieu}</h3>
          <h4> Km : {rando.km}</h4>
          <h4>Difficulté : {rando.difficulte}</h4>
          <h4>Temps : {rando.temps}</h4>
          <h4>Altitude : {rando.altitude}</h4>
          <p>Description : {rando.description} </p>
        </figcaption>
      </div>
    </>
  );
}

CardsRando.propTypes = {
  rando: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    lieu: PropTypes.string.isRequired,
    km: PropTypes.number.isRequired,
    difficulte: PropTypes.string.isRequired,
    temps: PropTypes.string.isRequired,
    altitude: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};