import React, { Component } from 'react'

export default class Panel extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="panel">
                <PanelTitle {...this.props} />
                <div className="p-3">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


function PanelTitle(props) {

    if (!props.title) return null

    return (
        <p className="panel-heading">
            {props.title}
        </p>
    )
}
