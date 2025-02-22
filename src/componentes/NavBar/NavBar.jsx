import CarritoWidget from "../carritoWidget/CarritoWidget"
import "./NavBar.css"
import {  NavLink } from "react-router-dom"
const NavBar = ()=>{
    return(
        <nav>
            <NavLink to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52zPnXlDdMj1a5KB0U4R38Yu3jHFvholG9Q&s"/></NavLink>
            <ul>
                <li><NavLink to={"/categoria/nacional"} className="navLink">Nacional</NavLink></li>
                <li><NavLink to={"/categoria/importado"} className="navLink">Importado</NavLink></li>
                <li><NavLink to={"/crud"} className="navLink">CRUD</NavLink></li>
            </ul>
            <li><NavLink to={"/carrito"} className="navLink">Carrito</NavLink></li>
            <CarritoWidget/>
        </nav>
    )
}
export default NavBar