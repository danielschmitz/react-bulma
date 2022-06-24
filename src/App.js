import React, { Component } from 'react'
import Block from './components/block'

import Box from "./components/box"
import Button from "./components/button"
import Container from './components/container'
import Notification from './components/notification'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showWarning: true
    }
  }

  handleClick = () => {
    // console.log("handle click")
    this.setState({
      showWarning: !this.state.showWarning
    })
  }

  render() {
    return (
      <Container>
        <Block>
          <Box>Hello World</Box>
        </Block>
        <Block>
          <Button onClick={this.handleClick}>toogle warning: {this.state.showWarning ? 'true' : 'false'}</Button>
        </Block>
        <Block>
          <Notification visible={this.state.showWarning}>Warning</Notification>
        </Block>

      </Container >
    )
  }
}

