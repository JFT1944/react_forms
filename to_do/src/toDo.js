import React from 'react'



function ToDo(props){

    return(
        <>
        <li>{props.item} <button onClick={(e) => props.removeTheList(props.num)} data-testid={`subBut${props.num}`}>X</button></li>

        </>
    )
}



export default ToDo