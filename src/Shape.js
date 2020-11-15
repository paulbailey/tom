import React, { useState } from 'react'

import { Form, Button } from 'react-bootstrap'
import { ImPrinter } from "react-icons/im";

const ShapeController = ({ setSides, setColour, setName }) => {
  const [sidesChosen, setSidesChosen] = useState(3)
  const [colour, setColourInternal] = useState('#000000')
  const [name, setNameChosen] = useState('')

  const handleChange = (evt) => {

    const s = parseInt(evt.target.value) 
    setSidesChosen(evt.target.value)
    if (s >= 3) {
      setSides(s)
    }
  }

  const handleChangeColour = (evt) => {
    setColour(evt.target.value)
    setColourInternal(evt.target.value)
  }
  const handleChangeName = (evt) => {
    setName(evt.target.value)
    setNameChosen(evt.target.value)
  }
  return <div><Form>
    <Form.Group>
    <Form.Label>Number of sides</Form.Label>
    <Form.Control type='number' onChange={handleChange} value={sidesChosen} min={3}
      inputmode="numeric" pattern="[0-9]*"></Form.Control>
    </Form.Group>
    <Form.Group>
    <Form.Label>Colour</Form.Label>
    <Form.Control type='color' onChange={handleChangeColour}  value={colour}></Form.Control>
    </Form.Group>
    <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type='text' onChange={handleChangeName}  value={name}></Form.Control>
    </Form.Group>
    <Button onClick={() => {window.print()}}><ImPrinter /> Print</Button>
    </Form></div>
}

export {  ShapeController }

