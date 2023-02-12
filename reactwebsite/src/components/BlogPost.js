import React, { useState } from 'react';
    import YouTube from 'react-youtube';
    import { useParams } from 'react-router';
    import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
    export default function BlogPost({ data }) {
      const [player, setPlayer] = useState(null);
      const params = useParams();
      const post = data.posts.find((dataItem) => dataItem.id === params.id);
      const youtubeID = post.url.split('v=')[1];
      console.log("FindME!!!!",youtubeID);
      const onReady = (e) => {
        setPlayer(e.target);
        console.log(e.target);
      };
      const onPlayHandler = () => {
        player.playVideo();
        console.log( "PlayButtonClicked", player.playVideo());
      };
      const onPauseHandler = () => {
        player.pauseVideo();
      };
      return (
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
          <div className="blog ">
        
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          
                  <div className="player">
                    <YouTube
                      videoId={youtubeID}
                      onReady={onReady}
                      opts={
                        {
                        playerVars: {
                          playlist: 'Jkqo73EygmI,DaTNswJD2Ts,F1xFa6hV-Oc,B1jNI-Lej-w,EzcR9LVmzm8'
                      
                        },
                      }}
                      
                    />
                  </div>
                  <button onClick={onPlayHandler} className="btn playBackBtn btn-success">
                    Play
                  </button>
                  <button onClick={onPauseHandler} className="btn playBackBtn btn-danger">
                    Pause
                  </button>

           
          </div>
        </div>
      );
    }