import React from "react";
import { render } from "@testing-library/react";

import App from "../App";
import Header from "../Components/Header";

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  // it("Calls at least one vul", () => {
  //   const spy = jest.spyOn(App.prototype, "_populateLevelsForVulnerability");
  //   render(<App />);
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // it("renders correctly", () => {
  //   const mock = () => jest.fn();
  //   const state = {
  //     isSuccessfullyLoaded: false,
  //     activateAboutUsPage: false,
  //     activateHomePage: true,
  //     showHints: false,
  //   };
  //   const { container } = render(
  //     <Header setGlobalState={mock} globalState={state} />
  //   );
  //   expect(container).toMatchSnapshot();
  // });
});
