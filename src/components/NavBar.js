import CartWidget from "./CartWidget";
//import styles from "./styles.module.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {

const arrayDeCategorias = [
    "heladera",
    "lavarropa",
    "lavavajilla",
    "aire acondicionado",
]
    return (
        <nav>
            <Link to={"/"}>
            <h1>TechARG
            </h1>
            </Link>
            <CartWidget/>
            {arrayDeCategorias.map((cat,index) => <NavLink to={"/category/"+cat} key={index}>{cat}</NavLink>)}            
        </nav>
        );
}

export default NavBar;