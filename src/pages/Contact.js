import React from 'react'
import image from '../assets/photo-1595437193398-f24279553f4f.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div style={{ minHeight: '75vh' }}>
      <Header
        image='https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
        title='Get in Touch'
        subTitle="Need to get in touch? We'd love to hear from you."
      />
      <Container>
        <Row className='align-items-center'>
          <div style={{ marginTop: 30 }}>
            <h1 className='text-center' style={{ fontSize: 36 }}>
              Contact Us
            </h1>
          </div>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 60 }}
            >
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  width: '100%',
                  height: 400,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: 5,
                }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 60 }}>
              <h1>HMP ENGINEERING SOLUTIONS</h1>
              <p>Call: 010 012 6592</p>
              <h4>Physical address</h4>
              <p>14 Goldman Street, Florida, Roodepoort, South Africa</p>
              <h4>General queries</h4>
              <p>info@hmpengineering.co.za</p>
              <h1>QUESTIONS & ESTIMATES</h1>
              <p>
                We would love to hear from you! Please reach out at your
                convenience so we can discuss your project.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
