
import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import  ToDoForm from "./ToDoForm";
// import TEST_IMAGES from "./_testCommon.js";
import App from './App'



it("renders without crashing", async function() {
    render(<ToDoForm  />);
  });


it("matches snapshot", function() {
    const {asFragment} = render(<ToDoForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  

// Tests to make, then turn in.
// it('should create a new todo', function(){
//     let {getByTestId, getByText} = render(<ToDoForm />)
//     let submitB = getByTestId('subBut')
//     expect(submitB).toBeInTheDocument()
//     fireEvent.click(submitB)
// })

