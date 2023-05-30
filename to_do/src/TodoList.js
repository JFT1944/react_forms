import React, {useState} from 'react'
import ToDo from './toDo'
import ToDoForm from './ToDoForm'


function ToDoList(props){
const [list, updatedList] = useState(['Feed the Velociraptor', 'Pet the Lobster'])

function UpdateList(newItem){
    updatedList((oldList) => {
        console.log(oldList)
        console.log(oldList.length)
        oldList.push(newItem)
        console.log(oldList)
        console.log(oldList.length)
        return [...oldList]
    })
}
function RemoveList(num){
    updatedList((oldList) => {
        oldList.splice(num, 1)

        return [...oldList]
    })
}


return (
    <>
    <ToDoForm updateTheList={UpdateList}/>
    <ol>
    {/* <ToDo item="Feed the Velociraptor" /> */}
    { list.map((item, index) => <ToDo item={item} updateTheList={UpdateList} num={index} removeTheList={RemoveList}/>)}

    </ol>
    </>
)

}


export default ToDoList