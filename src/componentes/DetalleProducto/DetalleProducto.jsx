import { useContext, useState } from "react"
import ContadorProductos from "../ContadorProductos/ContadorProductos"
import { Link } from "react-router-dom"
import { CarritoContexto } from "../../contexto/CarritoContexto"
import "./DetalleProducto.css"
const DetalleProducto = ({id,nombre,precio,categoria,stock,img})=>{
    const [cantidadAgregada,setCantidadAgregada] = useState(0)
    const {agregarProducto} = useContext(CarritoContexto)
    const añadir = (cantidad)=>{
        setCantidadAgregada(cantidad)
        const producto={id,nombre,precio}
        agregarProducto(producto,cantidad)
    }
    return(
        <div className="contenedor__detalle">
            <img src={img} alt="" />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <h4>{categoria}</h4>
            {cantidadAgregada > 0 ? (<Link to={"/carrito"}>Ver carrito</Link>):
            <ContadorProductos stock={stock} funcion={añadir}/>}
        </div>
    )
}
export default DetalleProducto