import plantes from "../assets/data/plantes.json";
import CardsPlantes from "../components/CardsPlantes";
import { Link } from "react-router-dom";
import style from "../styles/cardlistplante.module.css";
import imag from "../../public/imagesPlantes/tree.jpg";

export default function CardListPlantes() {
  return (
    <>
      <article className={style.allPage}>
        <img className={style.imgArbre} src={imag} />

        <p className={style.titrePlante}>
          "Je me suis promené dans les bois et je suis sorti plus grand que les
          arbres."
        </p>
        <div className={style.AllCardPlant}>
          {plantes.map((p) => (
            <CardsPlantes plante={p} key={p.id} />
          ))}
        </div>

        <div className={style.containerButton}>
          <Link to="/rando" className={style.buttonSuivant}>
            <button className={style.button}>
              <h2>Partir à l'aventure</h2>
            </button>
          </Link>
        </div>
      </article>
    </>
  );
}
