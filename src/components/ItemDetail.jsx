import { Loader } from './Loader'
import { ItemCount} from './ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

export const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState (0)
  const {addToCart} = useContext (CartContext)

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.")
    setItemCount(qty)
    addToCart(item, qty)
  }

  return (
      <>
        {
          item && item.image
          ? <div className='itemDetailContainer animate__animated animate__zoomIn'>
              <div>
                  <img className='itemDetailContainer_img' src={item.image} alt={'imagen de ' + item.name} />
              </div>
              <div className='itemDetailContainer_details'>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span className='itemDetailContainer_details_span'>${item.price}</span>
                  <aside>Cantidad disponible: {item.stock}</aside>
                  {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <Link to='/cart'><button className='carritoButtons'>GO TO CART</button></Link>
                  }
              </div>
            </div>
          : <Loader />
        }
      </>
  )
}