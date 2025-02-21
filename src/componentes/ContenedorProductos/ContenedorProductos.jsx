import { useEffect, useState } from "react"
import ListaProductos from "../ListaProductos/ListaProductos"
import { useParams } from "react-router-dom"
import { getDocs,collection,addDoc,deleteDoc,updateDoc,doc } from "firebase/firestore"
import { db } from "../../configuracion/firebase"

const ContenedorProductos = ()=>{
    const [listaProductos,setListaProductos]=useState([])
    const [productos,setProductos]=useState([])
    const {categoriaId} = useParams()
    const productosColeccion = collection(db,"productos")


    const obtenerListaProductos = async ()=>{
        const data = await getDocs(productosColeccion)
        const dataFiltrada = data.docs.map(doc=>{
        return{
            id:doc.id,
            ...doc.data()
        }
        })
        setListaProductos(dataFiltrada)
        return dataFiltrada
    }
    useEffect(()=>{
        obtenerListaProductos()
            .then((resolve)=>{
                if (categoriaId) {
                    let productosEncontrados=resolve.filter(producto=>producto.categoria===categoriaId)
                    setProductos(productosEncontrados)
                }else{
                    setProductos(resolve)
                }
            })
            .catch((e)=>{console.log(e);
            })
    },[categoriaId])

    return(
        <div>
            <ListaProductos productos={productos}/>
        </div>
    )
}
export default ContenedorProductos