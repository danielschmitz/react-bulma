import React from 'react'

export default function Notification(props) {

    if (!props.children) { return null }

    return (
        <div className="notification is-warning">
            {props.children}
        </div>
    )
}