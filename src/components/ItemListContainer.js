import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import {Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Infoprods from './Infoprods'



const ItemListContainer = () => { 
    const [dataContent, setDataContent] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
    useEffect(() => {
      setLoading(true);
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(Infoprods), 2000);
      }).then((dataContentResolve) => {
        setDataContent(dataContentResolve);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return (
        <div className="loading">
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    return (        
      <div className="gallery-block">
        <ItemList resultado={dataContent} />
      </div>
  );
}


export default ItemListContainer