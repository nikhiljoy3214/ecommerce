import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { singleProductApi } from '../service/allApis';



function SingleView() {

    const [product,setProduct]=useState({})

    const {id}=useParams()
    // console.log(id);

    const getProduct=async()=>{
        const result=await singleProductApi(id)
        if(result.status>=200 && result.status<300){
            setProduct(result.data)
        }
    }
    useEffect(()=>{
        getProduct()
    },[])
    console.log(product);
  return (
    <div className='container'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.pname}</Card.Title>
        <Card.Text>
        Price:{product.price}
        </Card.Text>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleView