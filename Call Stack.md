# **Call Stack**

[[_TOC_]]

## **Opening the App**

1. configuration - setupEnv
   - **File:** src/common/configuration.ts
   - **Function:** export default function setupEnv() {
   - **Description:** Setup configuration for the application
2. main - initializeToConsole
   - **File:** src/backend/main.ts
   - **Function:** Logger.initializeToConsole();
   - **Description:** Initialize logging
3. main - startup
   - **File:** src/backend/main.ts
   - **Function:** IModelHost.startup();
   - **Description:** Start host
4. main - initialize
   - **File:** src/backend/main.ts
   - **Function:** Presentation.initialize({
   - **Description:** Initialize presentation-backend
5. electron/main - initialize
   - **File:** src/backend/electron/main.ts
   - **Function:** export default function initialize(rpcs: RpcInterfaceDefinition[]) {
   - **Description:** Initializes Electron backend
6. main - readConfig
   - **File:** src/backend/main.ts
   - **Function:** ipcMain.on("readConfig", (event: Event, arg: any) => {
   - **Description:** Read config file
7. electron/main - readData
   - **File:** src/backend/electron/main.ts
   - **Function:** export const readData = (event?: electron.Event, arg?: string) => {
   - **Description:** This method reads the config, parses it into a JSON object, and returns it back to the renderer

*Proceed to **Selecting a Custom Configuration File**.*

## **Selecting a Custom Configuraton File**

1. electron/main - newWindow
   - **File:** src/backend/electron/main.ts
   - **Function:** export function newWindow(event?: electron.Event) {
   - **Description:** Pops up new window for configuration file selection
2. electron/main - fileSelectionData
   - **File:** src/backend/electron/main.ts
   - **Function:** export const fileSelectionData = (filePath: string[], event?: electron.Event) => {
   - **Description:** Reads and parses the configuration file for valid information
3. electron/main - editConfig
   - **File:** src/backend/electron/main.ts
   - **Function:** export const editConfig = (projectName: string, imodelName: string) => {
   - **Description:** Method to change the iModelName stored in the config.json

- *If valid configuration file, proceed to **Signing In**.*
- *If not, popup error and exit application.*

## **Signing In**

1. App - onStartSignin
   - **File:** src/frontend/components/App.tsx
   - **Function:** private _onStartSignin = async () => {
   - **Description:** Handles beginning of sign-in process
2. App - render
   - **File:** src/frontend/components/App.tsx
   - **Function:** public render() {
   - **Description:** Renders the app
3. Title - componentWillReceiveProps
   - **File:** src/frontend/components/Title.tsx
   - **Function:** public componentWillReceiveProps(newProps: TitleProps) {
   - **Description:** Sets the title with the provided iModel data
4. Title - render
   - **File:** src/frontend/components/Title.tsx
   - **Function:** public render() {
   - **Description:** Renders the title

- *If valid credentials, proceed to **Loading the App**.*
- *If not, popup error and exit application.*

## **Loading the App**

Group - ViewContainer constructor
configuration - setupEnv
SimpleViewerApp - startup
SimpleViewerApp - initializeRpc
SimplerViewerApp - getConncetionInfo
SimpleViewerApp - initializeOidc
App - constructorApp - makeCalls
App - getCorrectProjectName
App - render
App - signInRedirectUri
Title - constructor
Title - render
App - OpenIModelButton componentWillMount
App - OpenIModelButton onClick
App - OpenIModelButton getIModelInfo
App - OpenIModelButton render
App - componentDidMount
App - render
App - signInRedirectUri
Title - componentWillReceiveProps
Title - render
App - OpenIModelButton render
App - render
App - signInRedirectUri
Title - componentWillReceiveProps
Title - render
App - OpenIModelButton render
App - startProcess
App - getIModelInfo
App - OpenIModelButton onIModelSelected
App - startProcess
App - getIModelInfo
App - OpenIModelButton onIModelSelected
App - onIModelSelected
App - OpenIModelButton render
Toolbar - fitView
App - onIModelSelected
App - onIModelSelected
App - getViewDefinitionId
App - viewSort
App - render
App - signInRedirectUri
Title - componentWillReceiveProps
Title - render
Group - GroupWidget render
Group - ViewList constructor
ViewList - viewWidget
App - getInitialView
App - get2DViews
App - get3DViews
App - IMOdelComponents constructor
App - IModelComponents render
Viewport - render
Toolbar - toolbar
Toolbar - fitView

*Proceed to **Making a Selection in the Viewport**.*

## **Making a Selection in the Viewport**

1. Toolbar - select
   - **File:** src/frontend/components/Toolbar.tsx
   - **Function:** export const select = () => {
   - **Description:** Enables making a selection in the viewport
2. App - onSelectionChanged
   - **File:** src/frontend/components/App.tsx
   - **Function:** private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
   - **Description:** When the drawing is changed, handle that change in selection, get a new drawing, and update properties and viewings

*Proceed to **Selecting Fit View in the Toolbar**.*

## **Selecting Fit View in the Toolbar**

1. Toolbar - fitView
   - **File:** src/frontend/components/Toolbar.tsx
   - **Function:** export const fitView = () => {
   - **Description:** Fits the view in the viewport

*Proceed to **Selecting Pan View in the Toolbar**.*

## **Selecting Pan View in the Toolbar**

1. Toolbar - pan
   - **File:** src/frontend/components/Toolbar.tsx
   - **Function:** const pan = () => {
   - **Description:** Enables panning in the viewport

*Proceed to **Selecting Zoom in the Toolbar**.*

## **Selecting Zoom in the Toolbar**

1. Toolbar - zoom
   - **File:** src/frontend/components/Toolbar.tsx
   - **Function:** const zoom = () => {
   - **Description:** Enables zooming in the viewport

*Proceed to **Refreshing the iModel**.*

## **Refreshing the iModel**

App - OpenIModelButton onClick
App - OpenIModelButton getIModelInfo
App - OpenIModelButton render
App - OpenIModelButton onIModelSelected
App - onIModelSelected
App - getViewDefinitionId
App - OpenIModelButton render
App - viewSort
App - signInRedirectUri
Title - componentWillReceiveProps
Title - render
Group - GroupWidget render
Group - ViewList constructor
ViewList - viewWidget
App - getInitialView
App - get2DViews
App - get3DViews
App - IModelComponents render
Viewport - render
Toolbar - toolbar
Toolbar - fitView

*Proceed to **Expanding the Menu**.*

## **Expanding the Menu**

App - menuClick
App - render
App - signInRedirectUri
Title - componentWillReciveProps
Title - render
Group - GroupWidget render
Group - ViewList constructor
ViewList - viewWidget
App - getIniitalView
App - get2DViews
App - get3DViews
App - IModelComponents render
Viewport - render
Toolbar - toolbar
Tree - render
Tree - getDataProvider
Properties - render
Properties - getDataProvider
Table - render
Table - getDataProvider

*Proceed to **Collapsing the Menu**.*

## **Collapsing the Menu**

App - menuClick
App - render
App - signInRedirectUri
Title - componentWillReciveProps
Title - render
Group - GroupWidget render
Group - ViewList constructor
ViewList - viewWidget
App - getIniitalView
App - get2DViews
App - get3DViews
App - IModelComponents render
Viewport - render
Toolbar - toolbar

*Proceed to **Selecting a Drawing in the Header**.*

## **Selecting a Drawing in the Header**

Group - ViewList handleSubmit
Group - ViewContainer setNewView
App - changeView
App - updateView
App - onIModelSelected
App - getViewDefinitionId
App - render
App - signInRedirectUri
Title - componentWillReceiveProps
Title - render
Group - GroupWidget render
Group - ViewList constructor
ViewList - viewWidget
App - getInitialView
App - get2DViews
App - get3DViews
App - IModelComponents render
Viewport - render
Toolbar - toolbar
App - IModelComponents render
Viewport - render
Toolbar - toolbar
Toolbar - fitView

*Proceed to **Selecting a Drawing in the Tree**.*

## **Selecting a Drawing in the Tree**

App - onSelectionChanged
App - changeView
App - setupDisplayByCategories

*Return to **Call Stack**.*
