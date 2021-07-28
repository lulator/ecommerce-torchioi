import React from 'react'
import Item from './Item'

const ItemList = (list) => {
const ListProd = list.resultado;

  return (
    <div className="gallery-prods">
      {ListProd.map((prod) => (
        <Item
            name={prod.name}
            price={prod.price}
            src={prod.image}
            description={prod.description}
        />
      ))}
    </div>
    )
}

export default ItemList
