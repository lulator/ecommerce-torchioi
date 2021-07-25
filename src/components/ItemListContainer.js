import React from 'react'
import ItemCount from './ItemCount'


const handleCount = (cant) => {
    alert(`Estás agregando ${cant} unidades al carrito`)
}

const ItemListContainer = () => { 
    
    return (
        <div>
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
        </div>
    )
}

export default ItemListContainer