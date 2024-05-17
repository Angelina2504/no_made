import style from "../styles/navbar.module.css"
import { Link } from "react-router-dom";
import logo from "../../public/logos/logo.png";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link to ="/"> <img className={style.logo} src={logo}/></Link>
      <ul className={style["nav-list"]}>
      <Link className={style.link} to="/plantes"> <li>Les plantes</li> </Link>
      <Link className={style.link}to="/rando"><li>Randonnées</li> </Link>
      </ul>
    </nav>
  );
}
