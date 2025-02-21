import { Link } from "react-router-dom"
const Producto = ({id,nombre,precio,categoria,cantidad}) =>{
    return(
        <div >
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <h4>{categoria}</h4>
            <h5>{cantidad}</h5>
            <Link to={`/producto/${id}`}>Ver detalle</Link>
        </div>
    )
}
export default Producto