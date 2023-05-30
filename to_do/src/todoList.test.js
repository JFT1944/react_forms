import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import  ToDoList from "./TodoList";
// import TEST_IMAGES from "./_testCommon.js";
import App from './App'



it("renders without crashing", async function() {
    render(<ToDoList  />);
  });


it("matches snapshot", function() {
    const {asFragment} = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
  });
  

// test a button click
it('should delete a todo', function(){
    let {getByTestId, getByText} = render(<ToDoList />)
    let deleteB = getByTestId('subBut1')
    expect(deleteB).toBeInTheDocument()
    fireEvent.click(deleteB)
    expect(deleteB).not.toBeInTheDocument()
}

)
it('should add a todo', function(){
    let {getByTestId, getByText} = render(<ToDoList />)
    let inputForm = getByTestId('input_form')
    expect(inputForm).toBeInTheDocument()
    fireEvent.change(inputForm, {target: {value: 'test'}})
    let addB = getByTestId('subBut')
    expect(addB).toBeInTheDocument()
    fireEvent.click(addB)
    let newItem = getByText('test')
    expect(newItem).toBeInTheDocument()
}

)
