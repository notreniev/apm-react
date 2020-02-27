import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
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
            content area
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
