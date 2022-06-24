// import React from 'react'

// export default function Box(props) {
//     return (
//         <div className="box">{props.children}</div>
//     )
// }


import React, { Component } from 'react'

export default class Box extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="box">{this.props.children}</div>
        )
    }
}
