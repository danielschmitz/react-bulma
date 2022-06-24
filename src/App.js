import React from 'react'

import Box from "./components/box"
import Button from "./components/button"
import Container from './components/container'

function App() {

  const handleClick = () => {
    console.log("handle click")
  }

  return (
    <Container>
      <Box>Hello World</Box>
      <Button onClick={handleClick}>Hello</Button>
    </Container>
  )
}

export default App
