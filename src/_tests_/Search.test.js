import React from "react";
import { render, screen } from '@testing-library/react';
import Search from '../components/Search.js';

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {}
  };

  it("renders Search component correctly", () => {
    const { asFragment } = render(
      <Search 
      results={validProps.setSearchResults}
      />)
      ;

    expect(asFragment()).toMatchSnapshot(); 
  });

  it("button displays the correct text", () => {
    render(
      <Search 
      results={validProps.setSearchResults}
      />
    );
    const buttonElement = screen.getByText("Go!")

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("search-button");
  });
});