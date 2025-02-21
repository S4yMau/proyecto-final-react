import { useState } from "react"

const ContadorProductos = ({stock, funcion})=>{
    const [cantidad, setCantidad] = useState(0)
    const incrementar = ()=>{
        if (cantidad< stock){ setCantidad(cantidad+1)}
    }
    const decrementar = ()=>{
        if (cantidad > 0 ) {
            setCantidad(cantidad-1)
        }
    }
    return(
        <div>
            <div>
                <button onClick={decrementar}>-</button>
                    <h2>{cantidad}</h2>
                <button onClick={incrementar}>+</button>
            </div>
            <div>
                <button disabled={!stock} onClick={()=> funcion(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ContadorProductos