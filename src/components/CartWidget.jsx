import { useContext } from "react";
import { CartContext } from './CartContext';


export const CartWidget = () => {

    const  { calcItemsQty, cartList } = useContext(CartContext)

    return (
        cartList.length > 0 
        ? <i class="bi bi-cart3 carrito"><span className="carritoSpan">{calcItemsQty()}</span></i>
        : <i class="bi bi-cart3 carrito"></i>
    )
};