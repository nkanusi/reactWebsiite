import '../styles/firstPage.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function FirstPage(){
    return(
                <div>
                      <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/">Amarachukwu's Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="firstPage">FirstPage</Nav.Link>
                    <Nav.Link href="secondPage">SecondPage</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">LinkedIn</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        GitHub
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        About Me
                      </NavDropdown.Item>
                    </NavDropdown>
                  
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
                <h1>firstpage things</h1>
                <div  className='firstPage'> <h1>Lets define hope</h1></div>
                <footer ><h3>&copy; Copyright 2023 RJC Production</h3></footer>
                </div>
    );
}

export default FirstPage;