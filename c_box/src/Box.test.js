import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Box from "./Box";
// import TEST_IMAGES from "./_testCommon.js";
import App from './App'




it("should render without crashing", async function() {
    render(<Box height={100} width={100} color={'red'}/>);
  });

  it("matches snapshot", function() {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('should create a new square', function(){
    let {getByTestId, getByText} = render(<Box />)
    
})