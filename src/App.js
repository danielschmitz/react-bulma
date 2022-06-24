import React from 'react'

import Box from "./components/box"
import Button from "./components/button"

function App() {

  const handleClick = () => {
    console.log("handle click")
  }

  return (
    <div className="container">
      <Box>Hello World</Box>
      <Button onClick={handleClick}>Hello</Button>
    </div>
  )
}

export default App
