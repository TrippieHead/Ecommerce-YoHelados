import { useState, useEffect } from "react"
import { firestoreDetailFetch } from '../utilities/firestoreUtils'
import { ItemDetail } from "../components/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        firestoreDetailFetch(idItem)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    }, [idItem])

    return (
        <>
          <ItemDetail item={datos} />
        </>
    )
}