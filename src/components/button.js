import React from 'react'

export default function Button(props) {

    const small = props.small ? " is-small " : ""
    const large = props.large ? " is-large " : ""
    const danger = props.danger ? " is-danger " : ""

    const className = "button is-primary " + small + large + danger

    return (
        <button className={className} onClick={props.onClick}> {props.children}</button >
    )
}