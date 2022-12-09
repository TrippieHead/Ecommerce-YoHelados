import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../components/ItemList";
import { firestoreFetch } from "../utilities/firestoreUtils";

export const ItemListContainer = () => {

  const [datos, setDatos] = useState([])
  const { idCategory } = useParams() //devuelve un {} vacio cuando viene de la ruta raiz, sino devuelve el valor que tenga el parametro devuelto

  useEffect( () => {
    firestoreFetch(idCategory)
    .then(response => setDatos(response))
    .catch(err => console.log(err));
  }, [idCategory])

    return (
      <>
         <div className="itemListContainer">
           <ItemList items={datos}/>
         </div>
      </>
    )
  }