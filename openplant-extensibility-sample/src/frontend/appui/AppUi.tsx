/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";

import {
  ConfigurableUiManager, ContentLayoutProps,
} from "@bentley/ui-framework";

/** Include application registered Controls in Webpack
 */
import { ProjectAndIModelSelectFrontstage } from "./ProjectAndIModelSelectFrontstage";
import { ProjectOnlySelectFrontstage } from "./ProjectOnlySelectFrontstage";
import { SignInFrontstage } from "./SignInFrontstage";
import { AppFrontstage } from "./AppFrontStage";

/** Example Ui Configuration for an iModelJS App
 */
export class AppUi {

  public static initialize() {
    ConfigurableUiManager.initialize();

    AppUi.defineFrontstages();
    AppUi.defineContentLayouts();
  }

  /** Define Frontstages
   */
  private static defineFrontstages() {

    ConfigurableUiManager.addFrontstageProvider(new ProjectAndIModelSelectFrontstage());
    ConfigurableUiManager.addFrontstageProvider(new ProjectOnlySelectFrontstage());
    ConfigurableUiManager.addFrontstageProvider(new SignInFrontstage());
    ConfigurableUiManager.addFrontstageProvider(new AppFrontstage());
  }

  /** Define Content Layouts referenced by Frontstages.
   */
  private static defineContentLayouts() {
    const contentLayouts: ContentLayoutProps[] = AppUi.getContentLayouts();
    ConfigurableUiManager.loadContentLayouts(contentLayouts);
  }

  private static getContentLayouts(): ContentLayoutProps[] {
    const singleContent: ContentLayoutProps = {
      id: "SingleContent",
    };

    const contentLayouts: ContentLayoutProps[] = [];
    contentLayouts.push(singleContent);
    return contentLayouts;
  }
}
