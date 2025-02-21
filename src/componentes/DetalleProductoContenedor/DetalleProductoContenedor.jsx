import { useEffect, useState } from "react"
import DetalleProducto from "../DetalleProducto/DetalleProducto"
import { useParams } from "react-router-dom"
import { getDocs,collection } from "firebase/firestore"
import { db } from "../../configuracion/firebase"


const DetalleProductoContenedor =()=>{
    const [listaProductos,setListaProductos]=useState([])
    const [producto,setProducto]=useState()
    const productosColeccion = collection(db,"productos")
    const obtenerListaProductos = async ()=>{
        const data = await getDocs(productosColeccion)
        const dataFiltrada = await data.docs.map(doc=>{
        return{
            id:doc.id,
            ...doc.data()
        }
        })
        setListaProductos(dataFiltrada)
        return dataFiltrada
    }
    
    const {productoId}=useParams()
    
    useEffect(()=>{
        obtenerListaProductos()
            .then((resolve)=>{
                let productoEncontrado = resolve.find(producto=>producto.id==productoId)
                setProducto(productoEncontrado)
            }).catch((e)=>{console.log(e);
            })
    },[productoId])
    return(
        <div>
            <DetalleProducto {...producto}/>
        </div>
    )
}
export default DetalleProductoContenedor