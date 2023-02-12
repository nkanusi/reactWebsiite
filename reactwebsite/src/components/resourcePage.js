import '../styles/resourcePage.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ResourcePage(){
    return(
                <div>   
                    <Navbar bg="info" expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="/">RJC's Home</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                        >
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="resourcePage">Resource</Nav.Link>
                          <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/nkennaugoanusi/">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/nkanusi">
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
                            placeholder="RJC Search Portal"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-success">Search</Button>
                        </Form>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                {/* <h1>firstpage things</h1> */}
                <div  className='firstPage'> <h1>Page Under Construction!!</h1></div>
                <footer ><h3>&copy; Copyright 2023 RJC Production</h3></footer>
                </div>
    );
}

export default ResourcePage;