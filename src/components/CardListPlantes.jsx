import { useState } from "react";
import plantes from "../assets/data/plantes.json";
import CardsPlantes from "../components/CardsPlantes";
import { Link } from "react-router-dom";
import style from "../styles/cardlistplante.module.css";
import imag from "../../public/imagesPlantes/tree.jpg";

export default function CardListPlantes() {
  const [filterChoice, setFilterChoice] = useState("");

  const filteredPlantes = plantes.filter((plantes) =>
  filterChoice ? plantes.type === filterChoice : true
);

  
  return (
    <>
      <article className={style.allPage}>
        <img className={style.imgArbre} src={imag} />
   
      {/* <div className={style.citationUn}>Lorem ipsum Lorem ipsum</div>
      <div className={style.citationDeux}>Lorem ipsum Lorem ipsum</div> */}
      <p className={style.titrePlante}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
        ad. Dicta consequuntur aspernatur beatae tempore accusantium nostrum
        fugiat voluptatem! Doloribus aliquam fugiat eligendi quam reprehenderit
        laboriosam voluptates sed dignissimos perferendis?
      </p>
      <form className={style.form}>
        <label htmlFor="plantes-select">
         
          Filtrer par{" "}
          <select className={style.select} id="plantes-select" onChange={(e) => setFilterChoice(e.target.value)}>
          <option value="">---</option>
          <option value="arbre">Arbre</option>
          <option value="fleur">Fleurs</option>
          </select>
        </label>
      </form>

      <div className={style.AllCardPlant}>
        {filteredPlantes.map((plante) => (
          <CardsPlantes plante={plante} key={plante.id} />
        ))}
      </div>

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
