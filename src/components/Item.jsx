import { Link } from "react-router-dom"

export const Item = ({id, name, price, image}) => {
    return (
        <>
          <div className="cardContainer animate__animated animate__fadeInDown">
            <div class="card">
              <Link to={`/item/${id}`}><button className="card-button"><i class="bi bi-info-square"><span className="card-button-detail">Detalles</span></i></button></Link>
              <img src={image} class="card-img-top" alt="imagen con su respectivo producto, precio y nombre" />
              <div class="card-body">
                <p class="card-text">{name}</p>
                <p>Precio: ${price}</p>
              </div>
            </div>
          </div>
        </>
    )
}