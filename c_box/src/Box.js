import React from 'react';


function Box(props){
const {height, width, background, num} = props
let colors = ['black', 'green', 'red', 'orange', 'purple']
let rNum = Math.floor(Math.random() * colors.length)

    return(
        <>
        <div style={{height: height, width:width, background: background}} onClick={(evt)=> props.addingSquare(200, 200, colors[rNum])}>

        </div><button onClick={(evt) => props.removeTheSquare(num)} data-testid={`delete${num}`} >X</button>
        </>
    )
}

export default Box