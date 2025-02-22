
import { useContext } from "react"
import { CarritoContexto } from "../../contexto/CarritoContexto"
import { Link } from "react-router-dom"

const CarritoWidget=()=>{
    const {cantidadTotal}=useContext(CarritoContexto)
    return(
        <Link to={"/carrito"} style={{display:cantidadTotal>0?"none":"block"}}>
            <img src="https://w7.pngwing.com/pngs/1/190/png-transparent-computer-icons-50x50-cdr-miscellaneous-cdr-line.png" alt="" />
            {cantidadTotal}
        </Link>
    )
}
export default CarritoWidget