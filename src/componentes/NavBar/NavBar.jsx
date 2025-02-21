import Carrito from "../Carrito/Carrito"
import {  NavLink } from "react-router-dom"
const NavBar = ()=>{
    return(
        <nav>
            <h1>Logo</h1>
            <ul>
                <NavLink to={"/categoria/nacional"}>Nacional</NavLink>
                <NavLink to={"/categoria/importado"}>Importado</NavLink>
            </ul>
            
        </nav>
    )
}
export default NavBar