import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllProducts } from '../service/allApis';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const result = await getAllProducts()
        setProducts(result.data);
    }
    console.log(products);

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className='container'>
          <Row>  {
                products?.map(product => (
                    
                        <Col md={6} lg={4} className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{product.pname}</Card.Title>
                                    <Card.Text className='text-center'>
                                        Price: <b>{product.price}</b>
                                    </Card.Text>
                                    <div className='text-center'>
                                        <Link to={`/single/${product.id}`} style={{ textDecoration: "none" }}><Button variant="primary" className='me-3'>View</Button></Link>
                                        <Button variant="primary">Add to cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                ))
            }
            </Row>
        </div>
    )
}

export default Home