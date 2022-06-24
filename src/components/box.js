export default function Box(props) {
    console.log(props)
    return (
        <div className="box">{props.children}</div>
    )
}
