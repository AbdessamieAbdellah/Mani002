import logo from './logo.svg';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import React, { Component } from 'react'
import {Link } from 'react-router-dom';
// import ContactUs from '../../pages/ContactUs/ContactUs';
// import AboutUs from '../../pages/AboutUs/AboutUs'
// import Home from '../../pages/Home/Home'
// import Products from '../../pages/Products/Products'
// import Tea from '../../pages/Tea/Tea'
// import Coffee from '../../pages/Coffee/Coffee'
// import Special from '../../pages/Special/Special'
// import Limonade from '../../pages/Limonade/Limonade';




export default class NavbarComp extends Component {
  render() {
    const signupStyle = {backgroundColor:'#69e8f9', color:'black', borderRaduis:100}

    return (
      <div>
        <Navbar bg='primary' variant='dark' sticky='top' expand='sm' collapseOnSelect ms-auto>
            <Navbar.Brand>
              <img src={logo} alt='' width='40px' height='40px'/>{''}
              Sammy @PP
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%", marginRight:'10px' }}>
              <NavDropdown title='Products'>
               <NavDropdown.Item as={Link} to='/products/tea' >Tea</NavDropdown.Item> 
               <NavDropdown.Item as={Link} to= '/products/coffee'>Coffee</NavDropdown.Item>
               <NavDropdown.Item as={Link} to='/products/limonade' >Limonade</NavDropdown.Item>
               <NavDropdown.Divider> </NavDropdown.Divider>
               <NavDropdown.Item as={Link} to ='/products/special' >Special</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/about' >Get Quate</Nav.Link>
              <Nav.Link as={Link} to ='/contact-us'>Contact Us</Nav.Link>
              <Nav.Link as={Link} to='/home' >Home</Nav.Link>
              <Nav.Link as={Link} to='/signup' style={signupStyle}>Sign up</Nav.Link>
            </Nav> 
            </Navbar.Collapse>
      </Navbar>
      </div>
      /* <div>
        <Switch>
             
            <Route path='/about' exact>
              <AboutUs/>
            </Route>
            <Route path='/contact-us' exact>
              <ContactUs/>
            </Route>
            <Route path='/products' exact>
              <Products/>
            </Route>
            <Route path='/products/tea' exact> 
              <Tea/>
            </Route>
            
           <Route path='/products/coffee'>
             <Coffee/>
           </Route>
           <Route path='/products/special'>
            <Special/>
           </Route>
           <Route path='/products/limonade'>
             <Limonade/>
           </Route>


           <Route path='/'>
              <Home/>
             </Route> 
        </Switch>
      </div> */
    
    )
  }
}













