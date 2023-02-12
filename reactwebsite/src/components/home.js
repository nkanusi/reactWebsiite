import '../styles/home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';



function Home({ data }) {
    return (
      <div className="home">
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
                      placeholder="RJC Search Portal"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

          {/* <h1>Home Page</h1> */}


          <div className="cardContainer">
              <img className= "imgCustom" src={require("../assets/NiceView.jpeg" )}  style={{width: '100%'}}/>
             
          </div>

                <div className="cardContainer2">
                    <div className="cards">
                    {data.posts.map((post) => (
                        <div className="card" key={post.id}>
                        <div className="img-wrapper">
                            <img
                            src={`https://ytimg.googleusercontent.com/vi/${
                                post.url.split('v=')[1]
                            }/sddefault.jpg`}
                            alt={post.title}
                            ></img>
                        </div>
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.content.slice(0, 100) + '...'}</p>
                            <Link to={`/blogpost/${post.id}`} className="btn btn-info">Click to Explore..</Link>
                        </div>
                        </div>
                    ))}
                    </div>

                </div>
     


                <footer ><h3>&copy; Copyright 2023 RJC Production</h3></footer>
      </div>
    );
  }
  
  export default Home;
  