import NavBar from "./componentes/NavBar/NavBar";
import ContenedorProductos from "./componentes/ContenedorProductos/ContenedorProductos";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DetalleProductoContenedor from "./componentes/DetalleProductoContenedor/DetalleProductoContenedor"
import { CarritoProvider } from "./contexto/CarritoContexto";
import Carrito from "./componentes/Carrito/Carrito";
import Crud from "./componentes/crud/crud";
import Checkout from "./componentes/checkout/Checkout";
function App() {
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
