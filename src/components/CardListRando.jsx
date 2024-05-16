import randos from "../assets/data/randonnee.json";
import CardsRando from "../components/CardsRando";
import { Link } from "react-router-dom";
import style from "../styles/cardlistrando.module.css";

export default function CardListRando() {
  return (
    <>
      {/* <div className={style.citation}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis maiores, obcaecati facilis animi quod non qui laboriosam voluptatum ratione dolores, quisquam ducimus enim eius. Earum accusantium officiis praesentium numquam? </div> */}

      <p className={style.titreRando}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
        ad. Dicta consequuntur aspernatur beatae tempore accusantium nostrum
        fugiat voluptatem! Doloribus aliquam fugiat eligendi quam reprehenderit
        laboriosam voluptates sed dignissimos perferendis?
      </p>
      <div className={style.AllCardRando}>
        {randos.map((p) => (
          <CardsRando rando={p} key={p.id} />
        ))}
      </div>

      <div className={style.containerButton}>
        <Link to="/plante" className={style.buttonSuivant}>
          <button className={style.button}>
            <h2>???</h2>
          </button>
        </Link>
      </div>
    </>
  );
}
