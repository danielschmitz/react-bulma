import React from 'react'
import Block from './components/block'

import Box from "./components/box"
import Button from "./components/button"
import Container from './components/container'
import Notification from './components/notification'

export default function App() {

  const handleClick = () => {
    console.log("handle click")
  }

  return (
    <Container>
      <Block>
        <Box>Hello World</Box>
      </Block>
      <Block>
        <Button onClick={handleClick}>Hello</Button>
      </Block>
      <Block>
        <Notification>Warning</Notification>
      </Block>

    </Container >
  )
}
