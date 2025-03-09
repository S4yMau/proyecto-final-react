import { CarritoContexto } from "../../contexto/CarritoContexto";
import { db } from "../../configuracion/firebase";
import { useContext, useState } from "react";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import { Timestamp, collection, addDoc, doc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { carrito, total, limpiarCarrito } = useContext(CarritoContexto);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            // Crear objeto de la orden
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: carrito,
                total: total(),
                date: Timestamp.fromDate(new Date())
            };
            
            const batch = writeBatch(db); // Batch para actualizar el stock
            const outOfStock = []; // Productos sin stock

            const ids = carrito.map(prod => prod.id);

            // Obtener referencias a los productos en Firestore
            const productsRef = collection(db, "productos");

            // Crear consulta para obtener productos del carrito
            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            )
            
            
            const { docs } = productsAddedFromFirestore;
            
            // Verificar disponibilidad de stock
            docs.forEach(doc => {
                const dataDoc = doc.data();
                
                const stockDb = dataDoc.stock; // Asegúrate de que el campo "stock" exista en Firestore
                const productAddedToCart = carrito.find(prod => prod.id === doc.id);
                
                const prodQuantity = productAddedToCart?.cantidad;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                // Si todos los productos tienen stock suficiente
                await batch.commit(); // Actualizar stock en Firestore

                const orderRef = collection(db, "ordenes");
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id); // Guardar ID de la orden
                limpiarCarrito(); // Vaciar carrito
            } else {
                console.error("Hay productos que están fuera de stock:", outOfStock);
                alert("Algunos productos están fuera de stock. Por favor, revisa tu carrito.");
            }
        } catch (error) {
            console.error("Error al generar la orden:", error);
        } finally {
            setLoading(false); // Finalizar proceso de carga
        }
    };

    if (loading) {
        return <h1 className="text is-size-3">Se está generando la orden...</h1>;
    }
    if (orderId) {
        return (
            <div>
                <h1 className="text is-size-3">Orden generada con éxito!!</h1>
                <article className="message is-success my-5">
                    <div className="message-header">
                        <p>ID de su orden:</p>
                    </div>
                    <div className="message-body">
                        {orderId}
                    </div>
                </article>
            </div>
        )
    }
    return (
        <div>
            <h1 className="text is-size-1">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;