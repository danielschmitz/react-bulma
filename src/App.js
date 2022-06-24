import React, { Component } from 'react'
import Block from './components/block'

import Box from "./components/box"
import Button from "./components/button"
import Container from './components/container'
import Notification from './components/notification'
import Panel from './components/panel'
import Tags from './components/tags'

export default class App extends Component {

  fruits = ['Banana', 'Orange', 'Apple', 'Avocado',
    'Blackberries', 'Carambola', 'Guava', 'Kiwi', 'lemon', 'Mango',
    'Papaia', 'Peaches', 'Pear', 'Pineapple', 'Strawberries', 'Watermelon'
  ];

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
        <Panel title="My React Example App">
          <Block>
            <Box>Hello World</Box>
          </Block>
          <Block>
            <Button onClick={this.handleClick}>toogle warning: {this.state.showWarning ? 'true' : 'false'}</Button>
          </Block>
          <Block>
            <Notification visible={this.state.showWarning}>Warning</Notification>
          </Block>
          <Block>
            <Panel title="Exemplo de lista com .map">
              <Tags itens={this.fruits} />
            </Panel>
          </Block>
        </Panel>
      </Container >
    )
  }
}

