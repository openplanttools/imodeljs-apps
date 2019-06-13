import * as React from "react";
import { Id64String } from "@bentley/bentleyjs-core";
import { AccessToken } from "@bentley/imodeljs-clients";
import { IModelConnection, ScreenViewport } from "@bentley/imodeljs-frontend";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "./App.css";
/** React state of the App component */
export interface AppState {
    user: {
        accessToken?: AccessToken;
        isLoading?: boolean;
    };
    offlineIModel: boolean;
    imodel?: IModelConnection;
    viewDefinitionId?: Id64String;
}
/** A component the renders the whole application UI */
export default class App extends React.Component<{}, AppState> {
    /** Creates an App instance */
    constructor(props?: any, context?: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    changeView(newDrawingId: string, vp: ScreenViewport, doFit?: boolean): Promise<void>;
    /**
     * Sets up the display of the drawing model with elements colored by their category
     * @param modelId Drawing model id
     * @param vp Viewport the model is displayed in
     */
    setupDisplayByCategories(modelId: Id64String, vp: ScreenViewport): Promise<void>;
    private _onSelectionChanged;
    private _onOffline;
    private _onStartSignin;
    private _onUserStateChanged;
    /** Pick the first available spatial view definition in the imodel */
    private getFirstViewDefinitionId;
    /** Handle iModel open event */
    private _onIModelSelected;
    private readonly _signInRedirectUri;
    private _menuClick;
    /** The component's render method */
    render(): JSX.Element;
}
//# sourceMappingURL=App.d.ts.map