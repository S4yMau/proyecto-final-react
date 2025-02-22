import { getDocs,collection,addDoc,deleteDoc,updateDoc,doc } from "firebase/firestore"
import { db } from "../../configuracion/firebase"
import { useEffect, useState } from "react"
import "./crud.css"
function Crud() {
        const [listaProductos,setListaProductos]=useState([])
        const [nuevoProductoNombre,setNuevoProductoNombre]=useState("")
        const [nuevoProductoCategoria,setNuevoProductoCategoria]=useState("")
        const [nuevoProductoPrecio,setNuevoProductoPrecio]=useState(0)
        const [nuevoProductoStock,setNuevoProductoStock]=useState(0)
        const [BorrarProductoId,setBorrarProductoId]=useState("")
        const [nuevoProductoImg,setNuevoProductoImg]=useState("")
    
        const [actualizarProductoNombre,setActualizarProductoNombre]=useState("")
        const [actualizarProductoCategoria,setActualizarProductoCategoria]=useState("")
        const [actualizarProductoPrecio,setActualizarProductoPrecio]=useState(0)
        const [actualizarProductoStock,setActualizarProductoStock]=useState(0)
        const [actualizarProductoId,setActualizarProductoId]=useState("")
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
    const crearProducto = async ()=>{
        await addDoc(productosColeccion,{
            nombre:nuevoProductoNombre,
            precio:nuevoProductoPrecio,
            stock: nuevoProductoStock,
            categoria:nuevoProductoCategoria,
            img:nuevoProductoImg
        })
        obtenerListaProductos().then((resolve)=>{
            setListaProductos(resolve)
        })
    }
    const borrarProducto = async()=>{
        const productoDoc = doc(db,"productos",BorrarProductoId)
        await deleteDoc(productoDoc)
        obtenerListaProductos().then((resolve)=>{
            setListaProductos(resolve)
        })
    }
    const actualizarProducto = async ()=>{
        const productoDoc = doc(db,"productos",actualizarProductoId)
        await updateDoc(productoDoc,{
            nombre:actualizarProductoNombre,
            precio:actualizarProductoPrecio,
            stock: actualizarProductoStock,
            categoria:actualizarProductoCategoria
        })
        obtenerListaProductos().then((resolve)=>{
            setListaProductos(resolve)
        })//Agregar en el map de lista de productos con item.id
    } 
    return(
<div className="crud__container">
    <div className="crud__container_inputs">
        <h2>Nuevo producto</h2>
        <input placeholder="Nombre" onChange={(e)=>setNuevoProductoNombre(e.target.value)}/>
        <input placeholder="Precio" onChange={(e)=>setNuevoProductoPrecio(Number(e.target.value))}/>
        <input placeholder="Stock" onChange={(e)=>setNuevoProductoStock(Number(e.target.value))}/>
        <input placeholder="Categoria" onChange={(e)=>setNuevoProductoCategoria(e.target.value)}/>
        <input placeholder="URL IMG" onChange={(e)=>setNuevoProductoImg(e.target.value)}/>
        <button onClick={crearProducto}>Crear</button>
    </div> 
    <div className="crud__container_inputs">
        <h2>Editar producto</h2>
        <input placeholder="Nombre" onChange={(e)=>setActualizarProductoNombre(e.target.value)}/>
        <input placeholder="Precio" onChange={(e)=>setActualizarProductoPrecio(Number(e.target.value))}/>
        <input placeholder="Stock" onChange={(e)=>setActualizarProductoStock(Number(e.target.value))}/>
        <input placeholder="Categoria" onChange={(e)=>setActualizarProductoCategoria(e.target.value)}/>
        <input placeholder="ID" onChange={(e)=>setActualizarProductoId(e.target.value)}/>
        <button onClick={actualizarProducto}>Editar</button>
    </div>
    <div className="crud__container_inputs">
        <h2>Borrar producto</h2>
        <input placeholder="ID" onChange={(e)=>setBorrarProductoId(e.target.value)}/>
        <button onClick={borrarProducto}>Borrar</button>
    </div>
</div>
    )
}
export default Crud