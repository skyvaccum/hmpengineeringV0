import { useContext, useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Register from './pages/Register'
import { auth } from './firebase/config'
import AuthContext from './context/auth/authContext'
import RequireAuth from './components/RequireAuth'
import ShopContext from './context/shop/shopContext'
import Checkout from './pages/Checkout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentFailed from './pages/PaymentFailed'
import Loading from './components/Loading'
import Logo from './assets/logo2.png'

function App() {
  const { setUser, logout, user, userLoading, dispatch } =
    useContext(AuthContext)
  const { cart } = useContext(ShopContext)
  useEffect(() => {
    dispatch({ type: 'GET_USER_LOADING' })
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])
  if (userLoading && !user) {
    return (
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <Loading />
      </div>
    )
  }
  return (
    <div className='App'>
      <ToastContainer hideProgressBar />
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='logo' width={85} />
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='nav-link' to='/'>
                Home
              </Link>
              <Link className='nav-link' to='/about'>
                About
              </Link>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
              <Link className='nav-link' to='/contact'>
                Contact Us
              </Link>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
              <Link className='nav-link' to='/orders'>
                Orders
              </Link>
            </Nav>
            <Nav>
              <Link className='nav-link d-flex align-items-center' to='/cart'>
                <ion-icon name='cart'></ion-icon>({cart.length})
              </Link>

              {user ? (
                <span
                  style={{ cursor: 'pointer' }}
                  className='nav-link'
                  onClick={() => logout()}
                >
                  Logout ({user.name})
                </span>
              ) : (
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              )}
            </Nav>

            {/* <Navbar.Text>
              <a href='#login'>Mark Otto</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='register' element={<Register />} />
        <Route path='done' element={<PaymentSuccess />} />
        <Route path='fail' element={<PaymentFailed />} />
      </Routes>

      <footer
        className='d-flex align-items-center'
        style={{ backgroundColor: '#1c1c1c', height: 200, marginTop: 30 }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <p style={{ color: 'white' }}>
                &copy; {new Date().getFullYear()} HMP ENGINEERING SOLUTIONS -
                All Rights Reserved.
              </p>
            </Col>
            <Col md={4}>
              <div className='d-flex align-items-center justify-content-center'>
                <a style={{ color: 'white', margin: '0 5px' }} href='#'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </a>
                <a style={{ color: 'white', margin: '0 5px' }} href='#'>
                  <ion-icon name='logo-facebook'></ion-icon>
                </a>
                <a style={{ color: 'white', margin: '0 5px' }} href='#'>
                  <ion-icon name='logo-twitter'></ion-icon>
                </a>
                <a style={{ color: 'white', margin: '0 5px' }} href='#'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </div>
            </Col>
            <Col md={4}>
              <p style={{ color: 'white' }}>
                Expert engineering services at your fingertips!!
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default App
