import React, { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ShapeController } from './Shape'
import { PolygonRenderer } from './PolygonRenderer'

import './App.css'

function App() {
  const [sides, setSides] = useState(3)
  const [colour, setColour] = useState("#CCCCCC")
  const [name, setName] = useState("Triangle")
  return (
    <><Navbar variant="light" bg="dark" className="no-print">
    <Navbar.Brand href="#home">TomShapes</Navbar.Brand>
  </Navbar>
      <Container>
      <Row>
      <Col lg={8} className="fill">
      <PolygonRenderer sides={sides} colour={colour} name={name}></PolygonRenderer>
      </Col>
        <Col className="no-print">
        <ShapeController setSides={setSides} setColour={setColour} setName={setName}></ShapeController>
        </Col>
      </Row>
    </Container></>
 );
}

export default App;
