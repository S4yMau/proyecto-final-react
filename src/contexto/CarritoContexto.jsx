import { createContext, useState } from "react";

export const CarritoContexto = createContext({carrito:[]})

export const CarritoProvider = ({children}) =>{
    const[carrito,setCarrito]= useState([])
    const agregarProducto= (producto,cantidad)=>{
        
        if (!esEnCarrito(producto.id)) {
            setCarrito(prev=>[...prev,{...producto,cantidad}])
        }else{
            console.error("el producto ya fue agregado");
        }
    }
    const borrarProducto = (productoId)=>{
        const carritoActualizado = carrito.filter(producto=>producto.id != productoId)
        setCarrito(carritoActualizado)
    }
    const limpiarCarrito = ()=>{
        setCarrito([])
    }
    const esEnCarrito=(productoId) =>{
        return carrito.some(producto => producto.id === productoId)
    }
    const cantidadTotal = ()=>{
        let unidades = 0
        
        carrito.map(producto=> unidades =parseInt(producto.cantidad))
        
        return unidades
    }
    const total = ()=>{
        let precioTotal = 0
        carrito.map(producto => precioTotal+=parseInt(producto.precio*producto.cantidad))
        return precioTotal
    }
    return(
        <CarritoContexto.Provider value={{carrito,agregarProducto,borrarProducto,limpiarCarrito,cantidadTotal,total}}>
            {children}
        </CarritoContexto.Provider>
    )
}