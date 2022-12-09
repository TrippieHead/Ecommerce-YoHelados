import { Item } from "./Item"
import { Loader } from "./Loader"

export const ItemList = ({items}) => {
    return (
        <>
          {
            items.length > 0
            ? items.map(item => (
                <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image} />
            ))
            : <Loader />
          }
        </>
    )
}