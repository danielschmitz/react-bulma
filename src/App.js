import React, { Component } from 'react'
import Block from './components/block'

import Box from "./components/box"
import Button from "./components/button"
import Container from './components/container'
import Notification from './components/notification'
import Panel from './components/panel'
import Tags from './components/tags'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showWarning: true,
      fruit: "",
      fruits: ['Banana', 'Orange', 'Apple', 'Avocado',
        'Blackberries', 'Carambola', 'Guava', 'Kiwi', 'lemon', 'Mango',
        'Papaia', 'Peaches', 'Pear', 'Pineapple', 'Strawberries', 'Watermelon'
      ]
    }
  }

  handleClick = () => {
    // console.log("handle click")
    this.setState({
      showWarning: !this.state.showWarning
    })
  }

  handleSubmitform = (event) => {
    let fruits = this.state.fruits
    fruits.push(this.state.fruit)
    this.setState({ fruits, fruit: '' })
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({ fruit: event.target.value })
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
              <Tags itens={this.state.fruits} />
            </Panel>
          </Block>
          <Block>
            <Panel title="Exemplo de form">
              <form onSubmit={this.handleSubmitform}>
                <input className="input"
                  type="text"
                  placeholder="Add a fruit"
                  value={this.state.fruit}
                  onChange={this.handleChange}
                ></input>
                <br /><br />
                <Button>Adicionar Fruta</Button>
              </form>
            </Panel>
          </Block>
        </Panel>
      </Container >
    )
  }
}

