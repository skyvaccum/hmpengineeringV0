import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import ShopContext from '../context/shop/shopContext'
import Loading from '../components/Loading'

const Shop = () => {
  const { getProducts, products, loading, addToCart } = useContext(ShopContext)
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div style={{ minHeight: '75vh' }}>
      <Header
        image='https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
        title=' Want to solarize your home or office?'
        subTitle='Start buying the systems you need'
      />

      <Container>
        <Row className=' mt-5' style={{ alignItems: 'flex-start' }}>
          {/* <Row> */}
          {loading ? (
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ height: 200 }}
            >
              <Loading />
            </div>
          ) : (
            products &&
            products.map((product) => (
              <Col md={4} className='d-flex justify-content-center'>
                <Card style={{ width: '25rem', marginTop: 20 }}>
                  <Card.Img variant='top' src={product.image} height={280} />
                  <Card.Body>
                    <div>
                      <p>{product.category}</p>
                      <h1>{product.title}</h1>
                      <p>{product.description}</p>
                      <p>
                        <strong style={{ fontSize: 30, fontWeight: '900' }}>
                          R {product.price}
                        </strong>
                      </p>

                      <Button
                        variant='dark'
                        onClick={() => {
                          product.quantity = 1
                          addToCart(product)
                        }}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              // <Col md={6} className='mt-5 '>
              //   {/* <Row key={product.id} className='mt-5'> */}
              //   {/* <Col md={4}> */}
              //   <div className='d-flex justify-content-center'>
              //     <div
              //       style={{
              //         backgroundImage: `url(${product.image})`,
              //         width: '100%',
              //         height: 350,
              //         backgroundPosition: 'center',
              //         backgroundSize: 'cover',
              //         borderRadius: 5,
              //       }}
              //     ></div>
              //   </div>
              //   {/* </Col> */}
              //   {/* <Col md={8}> */}
              //   <div>
              //     <p>{product.category}</p>
              //     <h1>{product.title}</h1>
              //     <p>{product.description}</p>
              //     <p>
              //       <strong style={{ fontSize: 30, fontWeight: '900' }}>
              //         R {product.price}
              //       </strong>
              //     </p>

              //     <Button
              //       variant='dark'
              //       onClick={() => {
              //         product.quantity = 1
              //         addToCart(product)
              //       }}
              //     >
              //       Add to cart
              //     </Button>
              //   </div>
              //   {/* </Col> */}
              //   {/* </Row> */}
              // </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Shop
