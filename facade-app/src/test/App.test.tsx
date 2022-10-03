import React from "react";
import { render, screen, act } from "@testing-library/react";
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

  it("renders left nav container", () => {
    _renderApp();
    const container = screen.getByTestId("LEFT_NAV_CONTAINER");
    expect(container).toBeInTheDocument();
  });

  const inputs = [
    ["CommandInjection"],
    ["UnrestrictedFileUpload"],
    ["JWTVulnerability"],
    ["Http3xxStatusCodeBasedInjection"],
    ["PathTraversal"],
    ["RemoteFileInclusion"],
    ["BlindSQLInjectionVulnerability"],
    ["ErrorBasedSQLInjectionVulnerability"],
    ["UnionBasedSQLInjectionVulnerability"],
    ["SSRFVulnerability"],
    ["PersistentXSSInHTMLTagVulnerability"],
    ["XSSWithHtmlTagInjection"],
    ["XSSInImgTagAttribute"],
    ["XXEVulnerability"],
  ];
  it.each(inputs)(`should have sub item %s`, (text) => {
    _renderApp();

    const item = screen.getByText(text);

    expect(item).toBeInTheDocument();
  });

  const levels = [
    ["VulnerableApp.CommandInjection.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.CommandInjection.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.CommandInjection.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.CommandInjection.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.CommandInjection.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.CommandInjection.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_7", "LEVEL_7"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_8", "LEVEL_8"],
    ["VulnerableApp.UnrestrictedFileUpload.LEVEL_9", "LEVEL_9"],
    ["VulnerableApp.JWTVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.JWTVulnerability.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.JWTVulnerability.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.JWTVulnerability.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.JWTVulnerability.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.JWTVulnerability.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.JWTVulnerability.LEVEL_7", "LEVEL_7"],
    ["VulnerableApp.JWTVulnerability.LEVEL_8", "LEVEL_8"],
    ["VulnerableApp.JWTVulnerability.LEVEL_9", "LEVEL_9"],
    ["VulnerableApp.JWTVulnerability.LEVEL_10", "LEVEL_10"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_7", "LEVEL_7"],
    ["VulnerableApp.Http3xxStatusCodeBasedInjection.LEVEL_8", "LEVEL_8"],
    ["VulnerableApp.PathTraversal.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.PathTraversal.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.PathTraversal.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.PathTraversal.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.PathTraversal.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.PathTraversal.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.PathTraversal.LEVEL_7", "LEVEL_7"],
    ["VulnerableApp.PathTraversal.LEVEL_8", "LEVEL_8"],
    ["VulnerableApp.PathTraversal.LEVEL_9", "LEVEL_9"],
    ["VulnerableApp.PathTraversal.LEVEL_10", "LEVEL_10"],
    ["VulnerableApp.PathTraversal.LEVEL_11", "LEVEL_11"],
    ["VulnerableApp.PathTraversal.LEVEL_12", "LEVEL_12"],
    ["VulnerableApp.RemoteFileInclusion.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.RemoteFileInclusion.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.BlindSQLInjectionVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.BlindSQLInjectionVulnerability.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.BlindSQLInjectionVulnerability.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.ErrorBasedSQLInjectionVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.ErrorBasedSQLInjectionVulnerability.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.ErrorBasedSQLInjectionVulnerability.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.ErrorBasedSQLInjectionVulnerability.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.ErrorBasedSQLInjectionVulnerability.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.UnionBasedSQLInjectionVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.UnionBasedSQLInjectionVulnerability.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.UnionBasedSQLInjectionVulnerability.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.UnionBasedSQLInjectionVulnerability.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.SSRFVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.PersistentXSSInHTMLTagVulnerability.LEVEL_7", "LEVEL_7"],
    ["VulnerableApp.XSSWithHtmlTagInjection.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.XSSWithHtmlTagInjection.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.XSSWithHtmlTagInjection.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_4", "LEVEL_4"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_5", "LEVEL_5"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_6", "LEVEL_6"],
    ["VulnerableApp.XSSInImgTagAttribute.LEVEL_7", "LEVEL_7"],
    ["VulnerableApp.XXEVulnerability.LEVEL_1", "LEVEL_1"],
    ["VulnerableApp.XXEVulnerability.LEVEL_2", "LEVEL_2"],
    ["VulnerableApp.XXEVulnerability.LEVEL_3", "LEVEL_3"],
    ["VulnerableApp.XXEVulnerability.LEVEL_4", "LEVEL_4"],
  ];

  it.each(levels)("should have test id %s and text %s", (testId, label) => {
    _renderApp();

    const link = screen.getByTestId(testId);
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(label);
  });

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
