import { useContext } from "react"
import { CarritoContexto } from "../../contexto/CarritoContexto"
import { Link } from "react-router-dom"
import Producto from "../Productos/Productos"

const Carrito = () =>{
    const {carrito,limpiarCarrito,cantidadTotal,total,borrarProducto}=useContext(CarritoContexto)
    if (cantidadTotal() == 0 || undefined ) {
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        )
    }
    return(
        <div>
            {carrito.map(producto=><Producto key={producto.id}{...producto} borrar={borrarProducto}/>)}
            <h2>Total: ${total()}</h2>
            <button onClick={()=>limpiarCarrito()}>Vaciar carrito</button>
            <Link to={"/checkout"}>Finalizar compra</Link>
        </div>
    )
}
export default Carrito