import React, { useState } from 'react'
import Box from './Box';
import BoxList from './BoxList';

function NewBoxForm(props){

const [formData, updatedFormData] = useState({
    width: "",
    height:"",
    background: ""
})

const handleChange = (evt) =>{
    // updatedFormData(evt.target.value)
    const {name, value} = evt.target;
    updatedFormData(data => ({
        ...data,
        [name]: value
    }))
}
function makeNewBox1(e){
    e.preventDefault()
    console.log('clicked')
    let {width, height, background} = formData
    props.addingSquare(`${width}px`, `${height}px`, background)  
    
}

    return(
        <form style={{'margin': '30px 0'}}>
            <input value={formData.width} placeholder='width' name="width" style={{margin:'0 10px'}} onChange={handleChange} data-testid='input1'></input>
            <input value={formData.height} placeholder='height' name="height" style={{margin:'0 10px'}} onChange={handleChange} data-testid='input2'></input>
            <input value={formData.color} placeholder='color' name="background" style={{margin:'0 10px'}} onChange={handleChange} data-testid='input3'></input>
            <input type={'submit'} onClick={e => makeNewBox1(e)} data-testid="subBut"></input>
        </form>
    )
}

export default NewBoxForm