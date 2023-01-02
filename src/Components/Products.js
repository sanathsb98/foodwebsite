import React from 'react'
import '../Components/Products.css'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import { addtocart } from '../Redux/cartAction';
import productData from '../JSON/productData.json'



function Products() {

 

  const dispatch = useDispatch()



  return (

    <div className='Products'>
      <Row className='productrow'>
        {
          productData.map((data) => {
            return (
              <Col className='product_column' sm={10} md={6} lg={3}  >
                <Card className='product_card' style={{ width: '250px' }}>
                  <Card.Img className='productImg' variant="top" src={data.productImage} />
                  <Card.Body>
                    <Card.Title>{data.productName}</Card.Title>
                    <Card.Text>
                      {data.reviews.map((review) => {
                        return (
                          <>{review.productDescription}<br />
                          </>

                        )
                      })}

                    </Card.Text>

                    <Button onClick={() => dispatch(addtocart(productData))} variant="primary">Order</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })

        }

      </Row>
    </div>


  )
}

export default Products