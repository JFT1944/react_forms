
import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import  ToDo from "./toDo";
// import TEST_IMAGES from "./_testCommon.js";
import App from './App'



it("renders without crashing", async function() {
    render(<ToDo  />);
  });


it("matches snapshot", function() {
    const {asFragment} = render(<ToDo />);
    expect(asFragment()).toMatchSnapshot();
  });
  

// Tests to make, then turn in.
// it('should create a new square', function(){
//     let {getByTestId, getByText} = render(<ToDo />)
//     let submitB = getByTestId('subBut')
//     fireEvent.click('submitB')
// })