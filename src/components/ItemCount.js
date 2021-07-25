import React, {useState} from 'react'
import imageprod from './images/kskjean1.jpg'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    const handleAdd=()=>{
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
        console.log(handleAdd);
    }
    const handleRemove=()=> {
        if (cantidad>initial) {
            setCantidad (cantidad-1)
        }
    }
    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageprod} />
                    <Card.Body>
                    <Card.Title>Jean Trash Glam Zibra</Card.Title>
                    <Card.Text>$ 10.000</Card.Text>
                    <div className="contador-prods">
                        <Button variant="outline-dark" onClick={handleRemove}>-</Button>
                        <p>{cantidad}</p>
                        <Button variant="outline-dark" onClick={handleAdd}>+</Button><br/>
                        <Button variant="secondary"
                            onClick={() =>onAdd(cantidad)}>
                            Agregar al carrito</Button>
                        </div>
                        
                    </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount
