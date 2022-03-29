import React from "react";
import { render, screen } from '@testing-library/react';
import Search from '../components/Search.js';

describe("Search", () => {
  test("redners Search component correctly", () => {
    const { asFragment } = render(<Search/>);

    expect(asFragment()).toMatchSnapshot(); 
  })
});