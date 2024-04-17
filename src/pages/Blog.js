import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import ShopContext from '../context/shop/shopContext'
import Loading from '../components/Loading'

const Blog = () => {
  const { getPosts, posts, orderLoading } = useContext(ShopContext)
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div style={{ minHeight: '75vh' }}>
      <Header
        image='https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
        title='Our Blog'
        subTitle='KEEPING YOU WELL INFORMED'
      />

      <Container>
        {orderLoading ? (
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ height: 200 }}
          >
            <Loading />
          </div>
        ) : (
          posts &&
          posts.map((post) => (
            <div>
              <Row className='align-items-center'>
                <Col md={4}>
                  <div
                    className='d-flex justify-content-center'
                    style={{ marginTop: 60 }}
                  >
                    <div
                      // className='rounded-img'

                      style={{
                        backgroundImage: `url(${post.image})`,
                        width: '100%',
                        height: 350,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: 5,
                      }}
                    ></div>
                  </div>
                </Col>
                <Col md={8}>
                  <div>
                    <p>
                      {post.date} | {post.category}
                    </p>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        )}
      </Container>
    </div>
  )
}

export default Blog
