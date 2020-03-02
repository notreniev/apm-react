import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className="wrapper">
      <div className="content">
        
          <Container>
        <Row>
          <Col sm="12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <NavBar />
          </Col>
          <Col sm="12">
            <Content />
          </Col>
        </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
