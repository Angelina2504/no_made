import randos from "../assets/data/randonnee.json";
import CardsRando from "../components/CardsRando";
import style from "../styles/cardlistrando.module.css";
import bg from "../../public/imagesRandos/bgRando.jpg"

export default function CardListRando() {
  return (
    <>
       <img className={style.imgRando} src={bg} />
      <p className={style.titreRando}>
      "Telle un défi à la vitesse et au bruit, la marche incite à la modestie, pousse à la curiosité, suscite la méditation. Elle invite au repli, à l’intimité, à se taire pour mieux écouter."  - Franck Michel
      </p>
      <p className={style.presentation}>
      Une sélection de plusieurs randonnées pour vous évader
      </p>
      <div className={style.AllCardRando}>
        {randos.map((p) => (
          <CardsRando rando={p} key={p.id} />
        ))}
      </div>
    </>
  );
}