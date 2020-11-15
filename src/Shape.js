import React, { useState } from 'react'

import { Form, Button } from 'react-bootstrap'
import { ImPrinter } from "react-icons/im";

const names = {
  3: 'Triangle',
  4: 'Quadrilateral',
  5: 'Pentagon',
  6: 'Hexagon',
  7: 'Heptagon',
  8: 'Octagon',
  9: 'Nonagon',
  10: 'Decagon',
  11: 'Hendecagon',
  12: 'Dodecagon',
  13: 'Triskaidecagon',
  14: 'Tetrakaidecagon',
  15: 'Pentadecagon',
  16: 'Hexakaidecagon',
  17: 'Heptadecagon',
  18: 'Octakaidecagon',
  19: 'Enneadecagon',
  20: 'Icosagon'
}

const suffixes = {
  0: 'agon',
  1: 'henagon',
  2: 'digon',
  3: 'trigon',
  4: 'tetragon',
  5: 'pentagon',
  6: 'hexagon',
  7: 'heptagon',
  8: 'octagon',
  9: 'enneagon'
}

const prefixes = {
  2: "Icosi",
  3: 'Triaconta',
4: 'Tetraconta',
5: 'Pentaconta',
6: 'Hexaconta',
7: 'Heptaconta',
8: 'Octaconta',
9: 'Enneaconta',
10: 'Hecta'

}

const ShapeController = ({ setSides, setColour, setName }) => {
  const [sidesChosen, setSidesChosen] = useState(3)
  const [colour, setColourInternal] = useState('#CCCCCC')
  const [name, setNameChosen] = useState('Triangle')
  const [nameDisabled, setNameDisabled] = useState(true)

  const handleChange = (evt) => {

    const s = parseInt(evt.target.value) 
    setSidesChosen(evt.target.value)
    if (s >= 3) {
      setSides(s)
    }
    if (s <= 20) {
      setName(names[s])
      setNameChosen(names[s])
      setNameDisabled(true)
    } else if (s <= 109) {
      const prefixIdx = Math.trunc(s / 10)
      const prefix = prefixes[prefixIdx]
      const suffixIdx = s - (prefixIdx * 10)
      const suffix = suffixes[suffixIdx]
      setName(prefix+suffix)
      setNameChosen(prefix+suffix)
      setNameDisabled(true)
    } else {
      setName('')
      setNameChosen('')
      setNameDisabled(false)
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
    <Form.Control type='text' onChange={handleChangeName}  value={name} disabled={nameDisabled}></Form.Control>
    </Form.Group>
    <Button onClick={() => {window.print()}}><ImPrinter /> Print</Button>
    </Form></div>
}

export {  ShapeController }

