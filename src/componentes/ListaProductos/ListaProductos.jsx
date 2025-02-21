import Producto from "../Productos/Productos"
const ListaProductos = ({productos})=>{
    
    return(
        <div>
            {productos.map(producto=> <Producto key={producto.id} {...producto}/>)} 
        </div>
    )
}
export default ListaProductos