import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore"
import { db } from '../utilities/firebaseConfig'

export const Cart = () => {

    const { cartList, clearAll, deleteItem, subTotal, calcTotal } = useContext(CartContext)
    
    const createOrder = () => {
        let order = {
            buyer : {
                name: 'Juan Carlos Soria',
                email: 'juancasoria@hotmail.com',
                phone: 115486651
            },
            date: serverTimestamp(),
            items: cartList.map(product => ({
                id: product.id,
                title: product.name,
                price: product.price,
                quantity: product.qty
            })),
            total: calcTotal()
        }

        const createOrderDB = async () => {
            const newOrderRef = doc(collection(db, 'orders'))
            await setDoc(newOrderRef, order)
            return newOrderRef
        }

        createOrderDB()
        .then(response => {
            alert('Se creo tu orden de compra con el ID:', (response.id))
            cartList.forEach(async (item) => {
                const itemRef = doc(db, "productos", item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.qty)
                })              
            })
            clearAll()
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className='carritoContainer_buttons'>
                <Link to='/'><button className='carritoButtons'>Seguir comprando</button></Link>
                <h2 className='carritoContainer_title'>Your Cart</h2>
                <button className='carritoButtons' onClick={clearAll}>Borrar todo</button>
            </div>
            <section className='section'>
                {
                    cartList.length === 0
                    ? <span className='carritoVacio'>Tu carrito esta vacio</span>   
                    : cartList.map(item => (
                            <div className='carritoCard'>
                                <div>
                                    <img className='carritoCard_img' src={item.image} alt={'imagen de ' + item.name} />
                                </div>
                                <div className='carritoCard_details'>
                                    <span>Producto: {item.name}</span>
                                    <button className='carritoCard_details_deleteButton' onClick={() => deleteItem(item.id)}>Delete</button>
                                </div>
                                <div>
                                    <span>{item.qty} item(s) / ${item.price} cada uno</span>
                                    <hr />
                                    <span className='carritoCard_details_span2'>Total: ${subTotal(item.price, item.qty)}</span>
                                </div>
                            </div>
                    ))
                }
                {
                    (cartList.length > 0) &&
                    <div className='carritoContainer_summary'>
                        <h4>Order Summary</h4>
                        <p>
                            Total: ${calcTotal()}
                        </p>
                        <button className="carritoCheckout" onClick={createOrder}>Checkout</button>
                    </div>
                }
            </section>
        </>
    )
}