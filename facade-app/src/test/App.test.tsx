import React from "react";
import { render, screen } from "@testing-library/react";
import { getResource } from "../Utilities/Utils";
import testFixture from "./fixtures";

import App from "../App";

jest.mock("../Utilities/Utils");

describe("App", () => {
  const _renderApp = () => {
    //mock it cuz getResource will not work
    (getResource as jest.Mock).mockImplementation(
      (uri: string, callback: Function, isJson: boolean) => {
        //testFixture structure does not match the web response.
        //so, we refractor it
        const response = {
          VulnerableApp:
            testFixture.applicationData[0].vulnerabilityDefinitions,
          "VulnerableApp-jsp":
            testFixture.applicationData[1].vulnerabilityDefinitions,
          "VulnerableApp-php":
            testFixture.applicationData[2].vulnerabilityDefinitions,
        };

        callback({ isSuccessful: true, data: response });
      }
    );

    return render(<App />);
  };

  it("renders correctly", async () => {
    expect(_renderApp().container).toMatchSnapshot();
  });

  it("renders homepage", () => {
    _renderApp();
    const container = screen.getByTestId("HOME_PAGE_MAIN_CONTAINER");
    expect(container).toBeInTheDocument();
  });

  // const inputs = [
  //   ["CommandInjection"],
  //   ["UnrestrictedFileUpload"],
  //   ["JWTVulnerability"],
  //   ["Http3xxStatusCodeBasedInjection"],
  //   ["PathTraversal"],
  //   ["RemoteFileInclusion"],
  //   ["BlindSQLInjectionVulnerability"],
  //   ["ErrorBasedSQLInjectionVulnerability"],
  //   ["UnionBasedSQLInjectionVulnerability"],
  //   ["SSRFVulnerability"],
  //   ["PersistentXSSInHTMLTagVulnerability"],
  //   ["XSSWithHtmlTagInjection"],
  //   ["XSSInImgTagAttribute"],
  //   ["XXEVulnerability"],
  // ];
  // it.each(inputs)(`should have sub item %s`, (text) => {
  //   _renderApp();

  //   const item = screen.getByText(text);

  //   expect(item).toBeInTheDocument();
  // });
});
