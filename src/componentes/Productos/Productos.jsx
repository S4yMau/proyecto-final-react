import { Link } from "react-router-dom"
import "./Productos.css"
const Producto = ({id,nombre,precio,categoria,cantidad,img}) =>{
    return(
        <div className="producto__contenedor">
            <img src={img} alt="" />
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <h4>{categoria}</h4>
            <h5>{cantidad}</h5>
            <Link to={`/producto/${id}`}>Ver detalle</Link>
        </div>
    )
}
export default Producto