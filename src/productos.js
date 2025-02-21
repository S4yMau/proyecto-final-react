import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./configuracion/firebase";
import { useEffect, useState } from "react";

/*   const productosColeccion = collection(db,"productos")
  const [listaProductos,setListaProductos]=useState([])
/*   const [nuevoProductoNombre,setNuevoProductoNombre]=useState("")
  const [nuevoProductoPrecio,setNuevoProductoPrecio]=useState(0)
  const [nuevoProductoStock,setNuevoProductoStock]=useState(0)
  const [actualizarProductoStock,setActualizarProductoStock]=useState("") */

/*   const obtenerListaProductos = async ()=>{
    const data = await getDocs(productosColeccion)
    const dataFiltrada = data.docs.map(doc=>{
      return{
        id:doc.id,
        ...doc.data()
      }
    })
    setListaProductos(dataFiltrada)
  }
  useEffect(()=>{
    
    obtenerListaProductos()
  },[]) */ 

/*   const crearProducto = async ()=>{
    await addDoc(productosColeccion,{
      nombre:nuevoProductoNombre,
      precio:nuevoProductoPrecio,
      stock: nuevoProductoStock
    })
    obtenerListaProductos()
  }
  const borrarProducto = async(id)=>{
    const productoDoc = doc(db,"productos",id)
    await deleteDoc(productoDoc)
    obtenerListaProductos() //Agregar en el map de lista de productos con item.id
  }
  const actualizarProducto = async (id)=>{
    const productoDoc = doc(db,"productos",id)
    await updateDoc(productoDoc,{nombre:actualizarProductoStock})
    obtenerListaProductos()
  }
 */
/*   return listaProductos */
let listaPerfumes = [
  {
      "nombre": "kevin",
      "precio": 10000,
      "categoria":"nacional",
      "imgs": "https://media03.farmaciaslider.com.ar/23804-large_default/kevin-eau-de-toilette-100-ml.jpg",
      "id" : 1,
      "stock": 10
  },
  {
      "nombre": "bad boy",
      "precio": 100000,
      "categoria":"importado",
      "imgs": "https://farma365.com.ar/wp-content/uploads/2024/02/bad-boy-2.webp",
      "id" : 12,
      "stock": 10
  },
  {
      "nombre": "colbert",
      "precio": 9000,
      "categoria":"nacional",
      "imgs": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbCEBx7lwuXW3PU6K84ZQBnl19zCjhPQeJA&s",
      "id" : 13,
      "stock": 10
  },
  {
      "nombre": "chester ice",
      "precio": 8000,
      "categoria":"nacional",
      "imgs": "https://perfugroupar.vtexassets.com/arquivos/ids/158594-800-auto?v=637683630600870000&width=800&height=auto&aspect=true",
      "id" : 14,
      "stock": 10
  },
  {
      "nombre": "one million",
      "precio": 120000,
      "categoria":"importado",
      "imgs": "https://http2.mlstatic.com/D_NQ_NP_972993-MLA30658011999_052019-O.webp",
      "id" : 15,
      "stock": 10
  }
] 



/* export default Productos
let productos = Productos() */
export const obtenerProductos = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listaPerfumes)
        },100)
    })
}

export const obtenerProductoId = (productoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listaPerfumes.find(producto=>producto.id==productoId))
        },100)
    })
}

export const obtenerProductoCategoria = (productoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listaPerfumes.filter(producto=>producto.categoria===productoId))
        },100)
    })
}


