import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext ()

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        let busqueda = cartList.find(element => element.id === item.id)
        busqueda === undefined
        ? setCartList([
            ...cartList,
            {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                qty: qty
            }
        ])
        : busqueda.qty += qty
    }

    const clearAll = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        let filtrado = cartList.filter(product => product.id !== id)
        setCartList(filtrado)
    }

    const subTotal = (price, qty) => {
        let suma = price * qty
        return suma
    }

    const calcTotal = () => {
        let totalPorItem = cartList.map(item => subTotal(item.price, item.qty));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clearAll, deleteItem, subTotal, calcItemsQty, calcTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider