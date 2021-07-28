import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemDetail = ({item={}}) => {

 return (
    <div className="item-style">
    <Card>
                <Card.Img variant="top" src={item.src} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                            <Card.Text>${item.price}</Card.Text>
                            <Card.Text>{item.description}</Card.Text>
                                <Button variant="secondary">Agregar al carrito</Button>
                    </Card.Body>
            </Card>
    </div>
  );
}

export default ItemDetail