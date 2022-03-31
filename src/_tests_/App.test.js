import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
  it("redners App component correctly", () => {
    const { asFragment } = render(<App/>);

    expect(asFragment()).toMatchSnapshot(); 
  })
})
