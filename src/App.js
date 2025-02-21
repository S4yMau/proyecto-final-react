import NavBar from "./componentes/NavBar/NavBar";
import ContenedorProductos from "./componentes/ContenedorProductos/ContenedorProductos";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DetalleProductoContenedor from "./componentes/DetalleProductoContenedor/DetalleProductoContenedor"
import { CarritoProvider } from "./contexto/CarritoContexto";
import Carrito from "./componentes/Carrito/Carrito";
import Crud from "./componentes/crud/crud";
import Checkout from "./componentes/checkout/Checkout";
/*  import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./configuracion/firebase";
import { useEffect, useState } from "react";  */
function App() {
/*   const productosColeccion = collection(db,"productos")
  const [listaProductos,setListaProductos]=useState([])
  const [nuevoProductoNombre,setNuevoProductoNombre]=useState("")
  const [nuevoProductoCategoria,setNuevoProductoCategoria]=useState("")
  const [nuevoProductoPrecio,setNuevoProductoPrecio]=useState(0)
  const [nuevoProductoStock,setNuevoProductoStock]=useState(0)
  const [BorrarProductoId,setBorrarProductoId]=useState("")

  const [actualizarProductoNombre,setActualizarProductoNombre]=useState("")
  const [actualizarProductoCategoria,setActualizarProductoCategoria]=useState("")
  const [actualizarProductoPrecio,setActualizarProductoPrecio]=useState(0)
  const [actualizarProductoStock,setActualizarProductoStock]=useState(0)
  const [actualizarProductoId,setActualizarProductoId]=useState("") */

/*     const obtenerListaProductos = async ()=>{
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
    obtenerListaProductos().then((resolve)=>{
      setListaProductos(resolve)
    })
  },[])

  const crearProducto = async ()=>{
    await addDoc(productosColeccion,{
      nombre:nuevoProductoNombre,
      precio:nuevoProductoPrecio,
      stock: nuevoProductoStock,
      categoria:nuevoProductoCategoria
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
  }  */
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <CarritoProvider>
        <Routes>
          <Route path="/" element={<ContenedorProductos />}/>
          <Route path="/categoria/:categoriaId" element={<ContenedorProductos saludo={"Bienvenidos"}/>}/>
          <Route path="/producto/:productoId" element={<DetalleProductoContenedor/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/crud" element={<Crud/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/*" element={<h1>ERROR</h1>}/>
        </Routes>
      </CarritoProvider>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
