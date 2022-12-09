import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"; 
import { db } from '../utilities/firebaseConfig'

export async function firestoreFetch(idCategoria) {
    let q
    idCategoria 
    ?  q = query(collection(db, "productos"), where('categoryId', '==', idCategoria))
    :  q = query(collection(db, "productos"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))
  }

  export async function firestoreDetailFetch(idItem) {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: idItem,
        ...docSnap.data()
      }
    } else {
      //devueve undefined
      console.log("Documento no encontrado, intenta de nuevo!");
    }
  }