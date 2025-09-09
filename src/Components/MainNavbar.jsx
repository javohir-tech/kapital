//Botstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Лого</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link  className='navbar-link' href="#home">О компании</Nav.Link>
            <Nav.Link  className='navbar-link' href="#link">Новости</Nav.Link>
            <Nav.Link  className='navbar-link' href="#link">Помощь</Nav.Link>
            <Nav.Link  className='navbar-link' href="#link">Отзывы</Nav.Link>
            <Nav.Link  className='navbar-link' href="#link">Контакты</Nav.Link>
            <div>
              <Nav.Link>
                <p className='mb-1 num-title text-end'>Cлужба продаж</p>
                <p className='num mb-0'>+7 495 123-45-67</p>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
