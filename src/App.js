import React, { Component } from 'react'
import Block from './components/block'

import Box from "./components/box"
import Button from "./components/button"
import Card from './components/card'
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
      field1: "",
      field2: "",
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
    event.preventDefault()
    if (!this.state.fruit) return
    let fruits = this.state.fruits
    fruits.push(this.state.fruit)
    this.setState({ fruits, fruit: '' })
  }

  handleChange = (event) => {
    this.setState({ fruit: event.target.value })
    console.log(this.state)

  }

  handleChangeGeneric = (event) => {
    let name = event.target.name
    this.setState({ [name]: event.target.value })
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
          <Block>
            <Panel title="Exemplo de form com mais campos">
              <form>
                <input className="input"
                  type="text"
                  name="field1"
                  value={this.state.field1}
                  onChange={this.handleChangeGeneric}
                ></input>
                <br /><br />
                <input className="input"
                  type="text"
                  name="field2"
                  value={this.state.field2}
                  onChange={this.handleChangeGeneric}
                ></input>
                <br /><br />
              </form>
            </Panel>
          </Block>
          <Block>
            <Card
              title="Card Title"
              subtitle="Card Sub Title"
              footer={
                [
                  <Button key='1'>footer1</Button>,
                  <Button key='1'>footer1</Button>,
                  <Button key='2'>footer2</Button>
                ]
              }
            >
              Card content
            </Card>
          </Block>
        </Panel>
      </Container >
    )
  }
}

