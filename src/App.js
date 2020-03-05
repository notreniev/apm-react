import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';

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
          <Footer />
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
