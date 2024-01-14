import { Error } from "../components/ErrorClass";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Fragment } from "react";

test("should create component", async () => {
  render(<Error children={<Fragment></Fragment>} />);
  const containerDiv = document.querySelector("div");
  expect(containerDiv).toBeTruthy();
});
