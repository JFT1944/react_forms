
import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import BoxList from "./BoxList";
// import TEST_IMAGES from "./_testCommon.js";
import App from './App'



it("renders without crashing", async function() {
    render(<BoxList  />);
  });


it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
  


// test to delete a box
it('should delete a box', function(){
    let {getByTestId, getByText} = render(<BoxList />)
    let deleteB = getByTestId('delete0')
    expect(deleteB).toBeInTheDocument()
    fireEvent.click(deleteB)
    expect(deleteB).not.toBeInTheDocument()
}

)
it('should add a box', function(){
    let {getByTestId, getByText} = render(<BoxList />)
    let input1 = getByTestId('input1')
    let input2 = getByTestId('input2')
    let input3 = getByTestId('input3')
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(input3).toBeInTheDocument()
    input1.value = '100'
    input2.value = '100'
    input3.value = 'red'
    fireEvent.change(input1)
    fireEvent.change(input2)
    fireEvent.change(input3)

    let addB = getByTestId('subBut')
    expect(addB).toBeInTheDocument()
    fireEvent.click(addB)

    let newItem = getByTestId('delete1')
    expect(newItem).toBeInTheDocument()


}

)





// submit a form 



// have the desired outcome appear in the DOM.