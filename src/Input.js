import React from 'react'

const InputText = (props) => {
    let styles = {
        color: props.color,
        backgroundColor: props.backgroundColor
    }

    return (
        <div>
            <input className="mt5 ml2" type="text" placeholder="Enter name" />
            <h1 className="f1 bg-gold w-20 ml3 br3 pa2 pb3 grow white o-40">new app</h1>
            <h2 style={styles}>welcome here</h2>
        </div>
    )
}

export default InputText
