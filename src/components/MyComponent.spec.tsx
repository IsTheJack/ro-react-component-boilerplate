/**
 * This file has some examples of component testing. You can find more info about how to test here:
 * - https://testing-library.com/docs/dom-testing-library/intro
 * - https://jestjs.io/docs/en/expect
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyComponent from "./MyComponent";

it("renders without crashing (with minimum props)", () => {
  expect(() => render(<MyComponent />)).not.toThrow();
});

it("call the on click function properly", () => {
  const mockedClickFunction = jest.fn();
  const { getByText } = render(<MyComponent onClick={mockedClickFunction} />);
  const element = getByText(/Hello World/i);
  fireEvent.click(element);
  expect(mockedClickFunction).toHaveBeenCalled();
});

it("does not break when don't has onClick", () => {
  const { getByText } = render(<MyComponent />);
  const element = getByText(/Hello World/i);
  expect(() => fireEvent.click(element)).not.toThrow();
});
