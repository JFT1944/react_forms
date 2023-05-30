// import e from 'express'
import React, {useState} from 'react'
import ToDoList from './TodoList'
import ToDo from './toDo'
// import e from 'express'

function ToDoForm(props){
const [oldValue, newValue] = useState('')
    function updatedText(e){
        newValue(e.target.value)
    }

    function addNewItem(e){
        e.preventDefault()
        console.log(e)
        props.updateTheList(oldValue)

    }

    return(
        <form>
            <input value={oldValue} type="text" onChange={(evt) => updatedText(evt)} data-testid='input_form' ></input>
            <input type="submit" onClick={(evt) => addNewItem(evt)} data-testid='subBut'></input>

        </form>
    )
}

export default ToDoForm