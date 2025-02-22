import Producto from "../Productos/Productos"
import "./ListaProductos.css"
const ListaProductos = ({productos})=>{
    
    return(
        <div className="contenedor">
            {productos.map(producto=> <Producto key={producto.id} {...producto}/>)} 
        </div>
    )
}
export default ListaProductos