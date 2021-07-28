import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const Item = (prod) => {

 return (
    <div className="item-style">
    <Card>
                <Card.Img variant="top" src={prod.src} />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>${prod.price}</Card.Text>
                            <Card.Text>{prod.description}</Card.Text>
                                <Button variant="secondary">Agregar al carrito</Button>
                    </Card.Body>
            </Card>
    </div>
  );
}

export default Item