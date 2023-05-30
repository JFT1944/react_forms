import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

function BoxList(props){
const [boxList1, boxList2] = useState([{w:'200px', h:'200px', b:'red'}])

function addSquare(w, h, b){
    boxList2((fSquare) => {
        console.log(fSquare)
    fSquare.push({w: w, h:h, b: b})
    console.log(fSquare)

    return [...fSquare]
    })
}

const removeSquare = (index) =>{
    boxList2((fSquare)=>{
        fSquare.splice(index, 1)

        return [...fSquare]
    })
}



return(
    <>
    <NewBoxForm addingSquare={addSquare}/>
    {/* {console.log(boxList1)} */}
    {boxList1.map((x, index) => <Box width={x.w} height={x.h} background={x.b} addingSquare={addSquare} num={index} removeTheSquare={removeSquare}/>)}
    </>
)
}


export default BoxList