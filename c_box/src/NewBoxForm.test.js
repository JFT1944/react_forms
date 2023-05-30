
import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
// import TEST_IMAGES from "./_testCommon.js";
import App from './App'



it("renders without crashing", async function() {
    render(<NewBoxForm  />);
  });


it("matches snapshot", function() {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  

// Tests to make, then turn in.
it('should create a new square', function(){
    let {getByTestId, getByText} = render(<NewBoxForm />)
    
})

//   the ability to enter data, 


// it('should create a new square from form', function(){
//   let {getByTestId, getByText} = render(<NewBoxForm />)
  
//   let submitB = getByTestId('subBut')
//   console.log(submitB)
//   fireEvent.click('submitB')
  
// })



// submit a form 



// have the desired outcome appear in the DOM.