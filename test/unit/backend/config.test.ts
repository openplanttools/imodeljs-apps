//import * as backendMain from "../../../src/backend/main";
import * as fs from "fs";
import * as electronMain from "../../../src/backend/electron/main";
import { expect } from "chai";
import * as path from "path";

describe("readConfig", () => {
  it("should return the actual values stored in the config.json", () => {
    fs.readFile(path.join(__dirname, "../../../lib/common/settings.json"), (error: Error | null, data: any) => {
      if(error){
        console.log("");
      }
      const jsonObject = JSON.parse(data);
      const actualJSONObject = electronMain.readData();
      expect(actualJSONObject).to.be.equal(jsonObject);
    });

  });
});
