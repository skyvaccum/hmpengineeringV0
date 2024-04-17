import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import client from '../assets/Client.jpg'
import desigh from '../assets/desigh.jpg'
import tech from '../assets/tech.jpg'
import prototyping from '../assets/prototyping.jpg'
import Market_research from '../assets/Market_research.jpg'
import Renewable_energy from '../assets/Renewable_energy.jpg'
import research from '../assets/research.jpg'
import Header from '../components/Header'
const About = () => {
  return (
    <div style={{ minHeight: '75vh' }}>
      <Header
        image='https://images.unsplash.com/photo-1463173904305-ba479d2123b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3058&q=80'
        title='About us'
        subTitle='Learn more about us'
      />

      <Container>
        <Row className='align-items-center mt-5'>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={client} height={280} />
              <Card.Body>
                <Card.Title>AS OUR CLIENT YOU LEAD THE WAY</Card.Title>
                <Card.Text>
                  To provide our clients with designs and solutions that meet
                  their needs we keep an open line of communication. Allowing
                  them to be involved in the process and voice out any concerns
                  as they arise, which also allows them to understand the inner
                  workings of their products better.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={desigh} height={280} />
              <Card.Body>
                <Card.Title>OUR DESIGN WORK</Card.Title>
                <Card.Text>
                  Our work consists of in-house projects and projects for our
                  valued clients. We cater for both individuals and companies.
                  Mostly receiving projects at idea/concept phase and
                  transforming these into working prototypes that are compliant
                  with standards, rules and regulations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={tech} height={280} />
              <Card.Body>
                <Card.Title>IOT-BEYOND FUNCTIONALITY</Card.Title>
                <Card.Text>
                  Beyond functionality, convenience has increasingly become a
                  need. We do our level best to utilise the best yet affordable
                  electronic components where necessary in our design. Providing
                  our clients with reliable, sustainable and smart solutions
                  that can easily be upgraded.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={prototyping} height={280} />
              <Card.Body>
                <Card.Title>PROTOTYPING AND TESTING</Card.Title>
                <Card.Text>
                  Our team of experienced engineers electricians and technicians
                  are always ready to assist with prototyping, testing for
                  certification and piloting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Market_research} height={280} />
              <Card.Body>
                <Card.Title>MARKET RESEARCH</Card.Title>
                <Card.Text>
                  Having worked on multiple design projects, we understand the
                  importance of the end-user experience. With this in mind we
                  also offer our clients market research alongside their design
                  projects for new technology development. This gives an incline
                  as to how ready or not the end user may be for the product and
                  help our clients to better structure their marketing strategy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Renewable_energy} height={280} />
              <Card.Body>
                <Card.Title>RENEWABLE ENERGY</Card.Title>
                <Card.Text>
                  In the past few years load shedding has become a massive issue
                  in South Africa. We understand how stressful and sensitive
                  this issue is and have dedicated a team to specifically deal
                  with renewable energy design, installation and maintenance. We
                  also offer free audits only for renewable energy
                  installations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={research} height={280} />
              <Card.Body>
                <Card.Title>ENGINEERING RESEARCH</Card.Title>
                <Card.Text>
                  Our globally recognised and published researchers keep on top
                  of new innovations worldwide, ensuring that our solutions are
                  worthy of the global market.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
