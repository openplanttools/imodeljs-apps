// import * as backendMain from "../../../src/backend/main";
import * as fs from "fs";
import * as electronMain from "../../../src/backend/electron/main";
import { expect } from "chai";
import * as path from "path";

describe("Reading from local files", () => {
  it("should return the actual values stored in the settings.json", () => {
    fs.readFile(path.join(__dirname, "../../../lib/common/settings.json"), (error: Error | null, data: any) => {
      if (error) {
        // tslint:disable-next-line: no-console
        console.log(error);
      }
      const jsonObject = JSON.parse(data);
      const actualJSONObject = electronMain.readData();
      if (actualJSONObject) {
        expect(actualJSONObject).to.be.equal(jsonObject);
      }
    });
  });
});

describe("Editing local files", () => {
  it("should correctly write strings to JSON file", () => {
    electronMain.changeiModel("Config_Test");
    fs.readFile(path.join(__dirname, "../../../lib/common/settings.json"), (error: Error | null, data: any) => {
      if (error) {
        // tslint:disable-next-line: no-console
        console.log(error);
      }
      const jsonObject = JSON.parse(data);
      expect(jsonObject.imodel_name).to.be.equal("Config_Test");
    });
  });
});
