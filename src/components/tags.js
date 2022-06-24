import React, { Component } from 'react'

export default class Tags extends Component {

    render() {
        return (
            <div className='tags'>
                {this.props.itens.map(
                    (item, index) =>
                        <span className="tag is-success" key={index}>{item}</span>
                )}
            </div>
        )
    }
}
