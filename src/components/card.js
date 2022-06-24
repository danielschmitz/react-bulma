import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.title && <p className="title">
                        {this.props.title}
                    </p>}
                    {this.props.subtitle && <p className="subtitle">
                        {this.props.subtitle}
                    </p>}
                </div>
                <div className="card-content">
                    {this.props.children}
                </div>
                {this.props.footer && <footer className="card-footer">
                    {this.props.footer.map(
                        (item, index) => <p key={index} className="card-footer-item">{item}</p>
                    )}
                </footer>}
            </div>
        )
    }
}
