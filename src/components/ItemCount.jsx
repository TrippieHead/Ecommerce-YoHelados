import { useEffect } from "react"
import { useState } from "react"

export const ItemCount = ({stock = 0, initial, onAdd}) => {

    const [count, setCount] = useState(0)

    useEffect (() => {
      setCount(initial)
    }, [initial])

    const sumar = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    }
    
    const restar = () => {
      if (count > initial) {
        setCount(count - 1);
      }
    }

    return(
      <>
          <div className="itemCounter">
            <button className="boton" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="boton" onClick={sumar}>+</button>
            {
              stock && count
              ? <button className="botonCheckout" onClick={() => onAdd(count)}>Agregar al carrito</button>
              : <button className="botonCheckout" disabled>Agregar al carrito</button>
            }
          </div> 
        </>
    )
  }