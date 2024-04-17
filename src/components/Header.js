import React from 'react'
import { Container } from 'react-bootstrap'

const Header = ({ image, title, subTitle }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'rgb(28, 28, 28)',
        height: '500px',
        width: '100%',
        padding: 20,
      }}
      className='d-flex align-items-center'
    >
      <Container>
        <div>
          <h1 style={{ color: 'white', fontWeight: '900', fontSize: '3rem' }}>
            {title}
          </h1>
          <p style={{ color: 'white' }}>{subTitle}</p>
        </div>
      </Container>
    </div>
  )
}

export default Header
