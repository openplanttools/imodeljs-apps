<<<<<<< HEAD
# **Call Stack**

[[_TOC_]]

## **Opening the App**

1. configuration - setupEnv
   - *File:* src/common/configuration.ts
   - *Function:* export default function setupEnv() {
   - *Description:* Setup configuration for the application
2. main - initializeToConsole
   - *File:* src/backend/main.ts
   - *Function:* Logger.initializeToConsole();
   - *Description:* Initialize logging
3. main - startup
   - *File:* src/backend/main.ts
   - *Function:* IModelHost.startup();
   - *Description:* Start host
4. main - initialize
   - *File:* src/backend/main.ts
   - *Function:* Presentation.initialize({
   - *Description:* Initialize presentation-backend
5. electron/main - initialize
   - *File:* src/backend/electron/main.ts
   - *Function:* export default function initialize(rpcs: RpcInterfaceDefinition[]) {
   - *Description:* Initializes Electron backend
6. main - readConfig
   - *File:* src/backend/main.ts
   - *Function:* ipcMain.on("readConfig", (event: Event, arg: any) => {
   - *Description:* Read config file
7. electron/main - readData
   - *File:* src/backend/electron/main.ts
   - *Function:* export const readData = (event?: electron.Event, arg?: string) => {
   - *Description:* This method reads the config, parses it into a JSON object, and returns it back to the renderer

*Proceed to **Selecting a Custom Configuration File**.*

## **Selecting a Custom Configuraton File**

1. electron/main - newWindow
   - *File:* src/backend/electron/main.ts
   - *Function:* export function newWindow(event?: electron.Event) {
   - *Description:* Pops up new window for configuration file selection
2. electron/main - fileSelectionData
   - *File:* src/backend/electron/main.ts
   - *Function:* export const fileSelectionData = (filePath: string[], event?: electron.Event) => {
   - *Description:* Reads and parses the configuration file for valid information
3. electron/main - editConfig
   - *File:* src/backend/electron/main.ts
   - *Function:* export const editConfig = (projectName: string, imodelName: string) => {
   - *Description:* Method to change the iModelName stored in the config.json

- *If valid configuration file, proceed to **Signing In**.*
- *If not, popup error and exit application.*

## **Signing In**

1. App - onStartSignin
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onStartSignin = async () => {
   - *Description:* Handles beginning of sign-in process
2. App - render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the app
3. Title - componentWillReceiveProps
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
   - *Description:* Sets the title with the provided iModel data
4. Title - render
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public render() {
   - *Description:* Renders the title

- *If valid credentials, proceed to **Loading the App**.*
- *If not, popup error and exit application.*

## **Loading the App**

### [WIP]

1. Group - ViewContainer constructor
   - *File:*
   - *Function:*
   - *Description:*
2. configuration - setupEnv
   - *File:*
   - *Function:*
   - *Description:*
3. SimpleViewerApp - startup
   - *File:*
   - *Function:*
   - *Description:*
4. SimpleViewerApp - initializeRpc
   - *File:*
   - *Function:*
   - *Description:*
5. SimplerViewerApp - getConncetionInfo
   - *File:*
   - *Function:*
   - *Description:*
6. SimpleViewerApp - initializeOidc
   - *File:*
   - *Function:*
   - *Description:*
7. App - constructor
   - *File:*
   - *Function:*
   - *Description:*
8. App - makeCalls
   - *File:*
   - *Function:*
   - *Description:*
9. App - getCorrectProjectName
   - *File:*
   - *Function:*
   - *Description:*
10. Title - constructor
    - *File:*
    - *Function:*
    - *Description:*
11. App - OpenIModelButton componentWillMount
    - *File:*
    - *Function:*
    - *Description:*
12. App - OpenIModelButton onClick
    - *File:*
    - *Function:*
    - *Description:*
13. App - OpenIModelButton getIModelInfo
    - *File:*
    - *Function:*
    - *Description:*
14. App - componentDidMount
    - *File:*
    - *Function:*
    - *Description:*
15. App - startProcess
    - *File:*
    - *Function:*
    - *Description:*
16. App - getIModelInfo
    - *File:*
    - *Function:*
    - *Description:*
17. App - OpenIModelButton onIModelSelected
    - *File:*
    - *Function:*
    - *Description:*
18. App - onIModelSelected
    - *File:*
    - *Function:*
    - *Description:*
19. App - OpenIModelButton render
    - *File:*
    - *Function:*
    - *Description:*
20. App - getViewDefinitionId
    - *File:*
    - *Function:*
    - *Description:*
21. App - viewSort
    - *File:*
    - *Function:*
    - *Description:*
22. App - render
    - *File:*
    - *Function:*
    - *Description:*
23. App - signInRedirectUri
    - *File:*
    - *Function:*
    - *Description:*
24. Title - componentWillReceiveProps
    - *File:*
    - *Function:*
    - *Description:*
25. Title - render
    - *File:*
    - *Function:*
    - *Description:*
26. Group - GroupWidget render
    - *File:*
    - *Function:*
    - *Description:*
27. Group - ViewList constructor
    - *File:*
    - *Function:*
    - *Description:*
28. ViewList - viewWidget
    - *File:*
    - *Function:*
    - *Description:*
29. App - getInitialView
    - *File:*
    - *Function:*
    - *Description:*
30. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
31. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
32. App - IModelComponents constructor
    - *File:*
    - *Function:*
    - *Description:*
33. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
34. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
35. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
36. Toolbar - fitView
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Making a Selection in the Viewport**.*

## **Making a Selection in the Viewport**

1. Toolbar - select
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* export const select = () => {
   - *Description:* Enables making a selection in the viewport
2. App - onSelectionChanged
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
   - *Description:* When the drawing is changed, handle that change in selection, get a new drawing, and update properties and viewings

*Proceed to **Selecting Fit View in the Toolbar**.*

## **Selecting Fit View in the Toolbar**

1. Toolbar - fitView
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* export const fitView = () => {
   - *Description:* Fits the view in the viewport

*Proceed to **Selecting Pan View in the Toolbar**.*

## **Selecting Pan View in the Toolbar**

1. Toolbar - pan
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* const pan = () => {
   - *Description:* Enables panning in the viewport

*Proceed to **Selecting Zoom in the Toolbar**.*

## **Selecting Zoom in the Toolbar**

1. Toolbar - zoom
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* const zoom = () => {
   - *Description:* Enables zooming in the viewport

*Proceed to **Refreshing the iModel**.*

## **Refreshing the iModel**

### [WIP]

1. App - OpenIModelButton onClick
   - *File:*
   - *Function:*
   - *Description:*
2. App - OpenIModelButton getIModelInfo
   - *File:*
   - *Function:*
   - *Description:*
3. App - OpenIModelButton render
   - *File:*
   - *Function:*
   - *Description:*
4. App - OpenIModelButton onIModelSelected
   - *File:*
   - *Function:*
   - *Description:*
5. App - onIModelSelected
   - *File:*
   - *Function:*
   - *Description:*
6. App - getViewDefinitionId
   - *File:*
   - *Function:*
   - *Description:*
7. App - OpenIModelButton render
   - *File:*
   - *Function:*
   - *Description:*
8. App - viewSort
   - *File:*
   - *Function:*
   - *Description:*
9. App - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
10. Title - componentWillReceiveProps
    - *File:*
    - *Function:*
    - *Description:*
11. Title - render
    - *File:*
    - *Function:*
    - *Description:*
12. Group - GroupWidget render
    - *File:*
    - *Function:*
    - *Description:*
13. Group - ViewList constructor
    - *File:*
    - *Function:*
    - *Description:*
14. ViewList - viewWidget
    - *File:*
    - *Function:*
    - *Description:*
15. App - getInitialView
    - *File:*
    - *Function:*
    - *Description:*
16. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
17. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
18. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
19. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
20. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
21. Toolbar - fitView
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Expanding the Menu**.*

## **Expanding the Menu**

### [WIP]

1. App - menuClick
   - *File:*
   - *Function:*
   - *Description:*
2. App - render
   - *File:*
   - *Function:*
   - *Description:*
3. App - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
4. Title - componentWillReciveProps
   - *File:*
   - *Function:*
   - *Description:*
5. Title - render
   - *File:*
   - *Function:*
   - *Description:*
6. Group - GroupWidget render
   - *File:*
   - *Function:*
   - *Description:*
7. Group - ViewList constructor
   - *File:*
   - *Function:*
   - *Description:*
8. ViewList - viewWidget
   - *File:*
   - *Function:*
   - *Description:*
9. App - getIniitalView
   - *File:*
   - *Function:*
   - *Description:*
10. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
11. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
12. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
13. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
14. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
15. Tree - render
    - *File:*
    - *Function:*
    - *Description:*
16. Tree - getDataProvider
    - *File:*
    - *Function:*
    - *Description:*
17. Properties - render
    - *File:*
    - *Function:*
    - *Description:*
18. Properties - getDataProvider
    - *File:*
    - *Function:*
    - *Description:*
19. Table - render
    - *File:*
    - *Function:*
    - *Description:*
20. Table - getDataProvider
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Collapsing the Menu**.*

## **Collapsing the Menu**

### [WIP]

1. App - menuClick
   - *File:*
   - *Function:*
   - *Description:*
2. App - render
   - *File:*
   - *Function:*
   - *Description:*
3. App - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
4. Title - componentWillReciveProps
   - *File:*
   - *Function:*
   - *Description:*
5. Title - render
   - *File:*
   - *Function:*
   - *Description:*
6. Group - GroupWidget render
   - *File:*
   - *Function:*
   - *Description:*
7. Group - ViewList constructor
   - *File:*
   - *Function:*
   - *Description:*
8. ViewList - viewWidget
   - *File:*
   - *Function:*
   - *Description:*
9. App - getIniitalView
   - *File:*
   - *Function:*
   - *Description:*
10. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
11. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
12. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
13. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
14. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Selecting a Drawing in the Header**.*

## **Selecting a Drawing in the Header**

### [WIP]

1. Group - ViewList handleSubmit
   - *File:*
   - *Function:*
   - *Description:*
2. Group - ViewContainer setNewView
   - *File:*
   - *Function:*
   - *Description:*
3. App - changeView
   - *File:*
   - *Function:*
   - *Description:*
4. App - updateView
   - *File:*
   - *Function:*
   - *Description:*
5. App - onIModelSelected
   - *File:*
   - *Function:*
   - *Description:*
6. App - getViewDefinitionId
   - *File:*
   - *Function:*
   - *Description:*
7. App - render
   - *File:*
   - *Function:*
   - *Description:*
8. bApp - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
9. Title - componentWillReceiveProps
   - *File:*
   - *Function:*
   - *Description:*
10. Title - render
    - *File:*
    - *Function:*
    - *Description:*
11. Group - GroupWidget render
    - *File:*
    - *Function:*
    - *Description:*
12. Group - ViewList constructor
    - *File:*
    - *Function:*
    - *Description:*
13. ViewList - viewWidget
    - *File:*
    - *Function:*
    - *Description:*
14. App - getInitialView
    - *File:*
    - *Function:*
    - *Description:*
15. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
16. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
17. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
18. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
19. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
20. Toolbar - fitView
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Selecting a Drawing in the Tree**.*

## **Selecting a Drawing in the Tree**

### [WIP]

1. App - onSelectionChanged
   - *File:*
   - *Function:*
   - *Description:*
2. App - changeView
   - *File:*
   - *Function:*
   - *Description:*
3. App - setupDisplayByCategories
   - *File:*
   - *Function:*
   - *Description:*

*Return to **Call Stack**.*
=======
# **Call Stack**

[[_TOC_]]

## **Opening the App**

1. configuration - setupEnv
   - *File:* src/common/configuration.ts
   - *Function:* export default function setupEnv() {
   - *Description:* Setup configuration for the application
2. main - initializeToConsole
   - *File:* src/backend/main.ts
   - *Function:* Logger.initializeToConsole();
   - *Description:* Initialize logging
3. main - startup
   - *File:* src/backend/main.ts
   - *Function:* IModelHost.startup();
   - *Description:* Start host
4. main - initialize
   - *File:* src/backend/main.ts
   - *Function:* Presentation.initialize({
   - *Description:* Initialize presentation-backend
5. electron/main - initialize
   - *File:* src/backend/electron/main.ts
   - *Function:* export default function initialize(rpcs: RpcInterfaceDefinition[]) {
   - *Description:* Initializes Electron backend
6. main - readConfig
   - *File:* src/backend/main.ts
   - *Function:* ipcMain.on("readConfig", (event: Event, arg: any) => {
   - *Description:* Read config file
7. electron/main - readData
   - *File:* src/backend/electron/main.ts
   - *Function:* export const readData = (event?: electron.Event, arg?: string) => {
   - *Description:* This method reads the config, parses it into a JSON object, and returns it back to the renderer

*Proceed to **Selecting a Custom Configuration File**.*

## **Selecting a Custom Configuraton File**

1. electron/main - newWindow
   - *File:* src/backend/electron/main.ts
   - *Function:* export function newWindow(event?: electron.Event) {
   - *Description:* Pops up new window for configuration file selection
2. electron/main - fileSelectionData
   - *File:* src/backend/electron/main.ts
   - *Function:* export const fileSelectionData = (filePath: string[], event?: electron.Event) => {
   - *Description:* Reads and parses the configuration file for valid information
3. electron/main - editConfig
   - *File:* src/backend/electron/main.ts
   - *Function:* export const editConfig = (projectName: string, imodelName: string) => {
   - *Description:* Method to change the iModelName stored in the config.json

- *If valid configuration file, proceed to **Signing In**.*
- *If not, popup error and exit application.*

## **Signing In**

1. App - onStartSignin
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onStartSignin = async () => {
   - *Description:* Handles beginning of sign-in process
2. App - render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the app
3. Title - componentWillReceiveProps
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
   - *Description:* Sets the title with the provided iModel data
4. Title - render
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public render() {
   - *Description:* Renders the title

- *If valid credentials, proceed to **Loading the App**.*
- *If not, popup error and exit application.*

## **Loading the App**

### [WIP]

1. Group - ViewContainer constructor
   - *File:*
   - *Function:*
   - *Description:*
2. configuration - setupEnv
   - *File:*
   - *Function:*
   - *Description:*
3. SimpleViewerApp - startup
   - *File:*
   - *Function:*
   - *Description:*
4. SimpleViewerApp - initializeRpc
   - *File:*
   - *Function:*
   - *Description:*
5. SimplerViewerApp - getConncetionInfo
   - *File:*
   - *Function:*
   - *Description:*
6. SimpleViewerApp - initializeOidc
   - *File:*
   - *Function:*
   - *Description:*
7. App - constructor
   - *File:*
   - *Function:*
   - *Description:*
8. App - makeCalls
   - *File:*
   - *Function:*
   - *Description:*
9. App - getCorrectProjectName
   - *File:*
   - *Function:*
   - *Description:*
10. Title - constructor
    - *File:*
    - *Function:*
    - *Description:*
11. App - OpenIModelButton componentWillMount
    - *File:*
    - *Function:*
    - *Description:*
12. App - OpenIModelButton onClick
    - *File:*
    - *Function:*
    - *Description:*
13. App - OpenIModelButton getIModelInfo
    - *File:*
    - *Function:*
    - *Description:*
14. App - componentDidMount
    - *File:*
    - *Function:*
    - *Description:*
15. App - startProcess
    - *File:*
    - *Function:*
    - *Description:*
16. App - getIModelInfo
    - *File:*
    - *Function:*
    - *Description:*
17. App - OpenIModelButton onIModelSelected
    - *File:*
    - *Function:*
    - *Description:*
18. App - onIModelSelected
    - *File:*
    - *Function:*
    - *Description:*
19. App - OpenIModelButton render
    - *File:*
    - *Function:*
    - *Description:*
20. App - getViewDefinitionId
    - *File:*
    - *Function:*
    - *Description:*
21. App - viewSort
    - *File:*
    - *Function:*
    - *Description:*
22. App - render
    - *File:*
    - *Function:*
    - *Description:*
23. App - signInRedirectUri
    - *File:*
    - *Function:*
    - *Description:*
24. Title - componentWillReceiveProps
    - *File:*
    - *Function:*
    - *Description:*
25. Title - render
    - *File:*
    - *Function:*
    - *Description:*
26. Group - GroupWidget render
    - *File:*
    - *Function:*
    - *Description:*
27. Group - ViewList constructor
    - *File:*
    - *Function:*
    - *Description:*
28. ViewList - viewWidget
    - *File:*
    - *Function:*
    - *Description:*
29. App - getInitialView
    - *File:*
    - *Function:*
    - *Description:*
30. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
31. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
32. App - IModelComponents constructor
    - *File:*
    - *Function:*
    - *Description:*
33. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
34. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
35. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
36. Toolbar - fitView
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Making a Selection in the Viewport**.*

## **Making a Selection in the Viewport**

1. Toolbar - select
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* export const select = () => {
   - *Description:* Enables making a selection in the viewport
2. App - onSelectionChanged
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
   - *Description:* When the drawing is changed, handle that change in selection, get a new drawing, and update properties and viewings

*Proceed to **Selecting Fit View in the Toolbar**.*

## **Selecting Fit View in the Toolbar**

1. Toolbar - fitView
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* export const fitView = () => {
   - *Description:* Fits the view in the viewport

*Proceed to **Selecting Pan View in the Toolbar**.*

## **Selecting Pan View in the Toolbar**

1. Toolbar - pan
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* const pan = () => {
   - *Description:* Enables panning in the viewport

*Proceed to **Selecting Zoom in the Toolbar**.*

## **Selecting Zoom in the Toolbar**

1. Toolbar - zoom
   - *File:* src/frontend/components/Toolbar.tsx
   - *Function:* const zoom = () => {
   - *Description:* Enables zooming in the viewport

*Proceed to **Refreshing the iModel**.*

## **Refreshing the iModel**

### [WIP]

1. App - OpenIModelButton onClick
   - *File:*
   - *Function:*
   - *Description:*
2. App - OpenIModelButton getIModelInfo
   - *File:*
   - *Function:*
   - *Description:*
3. App - OpenIModelButton render
   - *File:*
   - *Function:*
   - *Description:*
4. App - OpenIModelButton onIModelSelected
   - *File:*
   - *Function:*
   - *Description:*
5. App - onIModelSelected
   - *File:*
   - *Function:*
   - *Description:*
6. App - getViewDefinitionId
   - *File:*
   - *Function:*
   - *Description:*
7. App - OpenIModelButton render
   - *File:*
   - *Function:*
   - *Description:*
8. App - viewSort
   - *File:*
   - *Function:*
   - *Description:*
9. App - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
10. Title - componentWillReceiveProps
    - *File:*
    - *Function:*
    - *Description:*
11. Title - render
    - *File:*
    - *Function:*
    - *Description:*
12. Group - GroupWidget render
    - *File:*
    - *Function:*
    - *Description:*
13. Group - ViewList constructor
    - *File:*
    - *Function:*
    - *Description:*
14. ViewList - viewWidget
    - *File:*
    - *Function:*
    - *Description:*
15. App - getInitialView
    - *File:*
    - *Function:*
    - *Description:*
16. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
17. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
18. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
19. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
20. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
21. Toolbar - fitView
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Expanding the Menu**.*

## **Expanding the Menu**

### [WIP]

1. App - menuClick
   - *File:*
   - *Function:*
   - *Description:*
2. App - render
   - *File:*
   - *Function:*
   - *Description:*
3. App - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
4. Title - componentWillReciveProps
   - *File:*
   - *Function:*
   - *Description:*
5. Title - render
   - *File:*
   - *Function:*
   - *Description:*
6. Group - GroupWidget render
   - *File:*
   - *Function:*
   - *Description:*
7. Group - ViewList constructor
   - *File:*
   - *Function:*
   - *Description:*
8. ViewList - viewWidget
   - *File:*
   - *Function:*
   - *Description:*
9. App - getIniitalView
   - *File:*
   - *Function:*
   - *Description:*
10. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
11. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
12. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
13. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
14. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
15. Tree - render
    - *File:*
    - *Function:*
    - *Description:*
16. Tree - getDataProvider
    - *File:*
    - *Function:*
    - *Description:*
17. Properties - render
    - *File:*
    - *Function:*
    - *Description:*
18. Properties - getDataProvider
    - *File:*
    - *Function:*
    - *Description:*
19. Table - render
    - *File:*
    - *Function:*
    - *Description:*
20. Table - getDataProvider
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Collapsing the Menu**.*

## **Collapsing the Menu**

### [WIP]

1. App - menuClick
   - *File:*
   - *Function:*
   - *Description:*
2. App - render
   - *File:*
   - *Function:*
   - *Description:*
3. App - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
4. Title - componentWillReciveProps
   - *File:*
   - *Function:*
   - *Description:*
5. Title - render
   - *File:*
   - *Function:*
   - *Description:*
6. Group - GroupWidget render
   - *File:*
   - *Function:*
   - *Description:*
7. Group - ViewList constructor
   - *File:*
   - *Function:*
   - *Description:*
8. ViewList - viewWidget
   - *File:*
   - *Function:*
   - *Description:*
9. App - getIniitalView
   - *File:*
   - *Function:*
   - *Description:*
10. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
11. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
12. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
13. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
14. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Selecting a Drawing in the Header**.*

## **Selecting a Drawing in the Header**

### [WIP]

1. Group - ViewList handleSubmit
   - *File:*
   - *Function:*
   - *Description:*
2. Group - ViewContainer setNewView
   - *File:*
   - *Function:*
   - *Description:*
3. App - changeView
   - *File:*
   - *Function:*
   - *Description:*
4. App - updateView
   - *File:*
   - *Function:*
   - *Description:*
5. App - onIModelSelected
   - *File:*
   - *Function:*
   - *Description:*
6. App - getViewDefinitionId
   - *File:*
   - *Function:*
   - *Description:*
7. App - render
   - *File:*
   - *Function:*
   - *Description:*
8. bApp - signInRedirectUri
   - *File:*
   - *Function:*
   - *Description:*
9. Title - componentWillReceiveProps
   - *File:*
   - *Function:*
   - *Description:*
10. Title - render
    - *File:*
    - *Function:*
    - *Description:*
11. Group - GroupWidget render
    - *File:*
    - *Function:*
    - *Description:*
12. Group - ViewList constructor
    - *File:*
    - *Function:*
    - *Description:*
13. ViewList - viewWidget
    - *File:*
    - *Function:*
    - *Description:*
14. App - getInitialView
    - *File:*
    - *Function:*
    - *Description:*
15. App - get2DViews
    - *File:*
    - *Function:*
    - *Description:*
16. App - get3DViews
    - *File:*
    - *Function:*
    - *Description:*
17. App - IModelComponents render
    - *File:*
    - *Function:*
    - *Description:*
18. Viewport - render
    - *File:*
    - *Function:*
    - *Description:*
19. Toolbar - toolbar
    - *File:*
    - *Function:*
    - *Description:*
20. Toolbar - fitView
    - *File:*
    - *Function:*
    - *Description:*

*Proceed to **Selecting a Drawing in the Tree**.*

## **Selecting a Drawing in the Tree**

### [WIP]

1. App - onSelectionChanged
   - *File:*
   - *Function:*
   - *Description:*
2. App - changeView
   - *File:*
   - *Function:*
   - *Description:*
3. App - setupDisplayByCategories
   - *File:*
   - *Function:*
   - *Description:*

*Return to **Call Stack**.*
>>>>>>> c85e93bf995acedab9ce50688db82df5a4870e53
