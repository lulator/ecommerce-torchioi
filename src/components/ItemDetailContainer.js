import React, {useState, useEffect} from 'react'
import { getItem } from './getItem'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [item, setItem] = useState({})

    useEffect(() => {
        getItem()
        .then(resp => setItem(resp))
    }, []
    
    )
  return (
    <div className="item-detail">
        <ItemDetail item={item} />
    </div>
    )
}

export default ItemDetailContainer
