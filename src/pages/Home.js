import React from 'react'
import image from '../assets/indexPic.jpg'
import whoAreWe from '../assets/whoAreWe.jpg'
import mission from '../assets/mission.jpg'
import vision from '../assets/vision.jpg'
import Hilda2 from '../assets/Hilda2.jpg'
import Sean from '../assets/Sean.jpg'
import Motebang from '../assets/Motebang.jpg'
import Phetolo from '../assets/Phetolo.jpg'
import Yolisa from '../assets/Yolisa.jpg'
import Sfiso from '../assets/Sfiso.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div style={{ minHeight: '75vh' }}>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgb(28, 28, 28)',
          height: '500px',
          width: '100%',
        }}
      ></div>

      <Container>
        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 60 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${whoAreWe})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 60 }}>
              <h1 className='text-center'>Who we are</h1>
              <p className='text-center'>
                HMP Engineering Solutions is an engineering design company based
                in Johannesburg South Africa. The company was founded by Hilda
                Forsythe in 2020 and has massively contributed to engineering
                design countrywide ever since. Our work focuses mainly on
                sustainability and information technology. With design engineers
                from Mechanical, electrical, electronics and software
                background, we are able to offer our clients solutions that are
                relevant to this fast and ever changing global market.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div style={{ marginTop: 40 }}>
              <h1 className='text-center'>Our Mission</h1>
              <p className='text-center'>
                HMP Engineering Solutions is an engineering design company based
                in Johannesburg South Africa. The company was founded by Hilda
                Forsythe in 2020 and has massively contributed to engineering
                design countrywide ever since. Our work focuses mainly on
                sustainability and information technology. With design engineers
                from Mechanical, electrical, electronics and software
                background, we are able to offer our clients solutions that are
                relevant to this fast and ever changing global market.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 40 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${mission})` }}
              ></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 40 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${vision})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 40 }}>
              <h1 className='text-center'>Our vision</h1>
              <p className='text-center'>
                To be the best engineering design company in Africa, leading the
                sustainability and innovation space. A dynamic force in the
                global market.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='align-items-center'>
          <div style={{ marginTop: 30 }}>
            <h1 className='text-center' style={{ fontSize: 36 }}>
              OUR TEAM
            </h1>
          </div>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Hilda2} />
              <Card.Body>
                <Card.Title>Hilda Forsythe</Card.Title>
                <Card.Text>Position: Founding director & CEO.</Card.Text>
                {/* <Button variant='primary'>Read My Bio</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Sean} />
              <Card.Body>
                <Card.Title>SEAN FORSYTHE</Card.Title>
                <Card.Text>
                  Position: HEAD OF INSTALLATION & MAINTENANCE.
                </Card.Text>
                {/* <Button variant='primary'>Read My Bio</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Motebang} />
              <Card.Body>
                <Card.Title>MOTEBANG MOSEME</Card.Title>
                <Card.Text>
                  Position: ELECTRICAL AND ELECTRONICS ENGINEER.
                </Card.Text>
                {/* <Button variant='primary'>Read My Bio</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Phetolo} />
              <Card.Body>
                <Card.Title>PHETOLO MPE</Card.Title>
                <Card.Text>Position: SOFTWARE ENGINEER.</Card.Text>
                {/* <Button variant='primary'>Read My Bio</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Yolisa} />
              <Card.Body>
                <Card.Title>YOLISA MBUQE</Card.Title>
                <Card.Text>Position: LEGAL COUNSEL</Card.Text>
                {/* <Button variant='primary'>Read My Bio</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center'>
            <Card style={{ width: '25rem', marginTop: 20 }}>
              <Card.Img variant='top' src={Sfiso} />
              <Card.Body>
                <Card.Title>SFISO LANGA</Card.Title>
                <Card.Text>Position: MARKETING MANAGER</Card.Text>
                {/* <Button variant='primary'>Read My Bio</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
