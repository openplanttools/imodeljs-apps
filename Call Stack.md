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

1. Group - ViewContainer constructor
   - *File:* src/frontend/components/Group.tsx
   - *Function:* constructor() {
   - *Description:* initializes view container for view selection dropdown box
2. configuration - setupEnv
   - *File:* src/common/configuration.ts
   - *Function:* export default function setupEnv() {
   - *Description:* Setup configuration for the application
3. SimpleViewerApp - startup
   - *File:* src/frontend/api/SimpleViewerApp.ts
   - *Function:* public static startup() {
   - *Description:* Handles app start-up
4. SimpleViewerApp - initializeRpc
   - *File:* src/frontend/api/SimpleViewerApp.ts
   - *Function:* private static async initializeRpc(): Promise<void> {
   - *Description:* Initializes rpc with connection info
5. SimplerViewerApp - getConnectionInfo
   - *File:* src/frontend/api/SimpleViewerApp.ts
   - *Function:* private static async getConnectionInfo(): Promise<BentleyCloudRpcParams | undefined> {
   - *Description:* Gets connection info to initialize rpc
6. SimpleViewerApp - initializeOidc
   - *File:* src/frontend/api/SimpleViewerApp.ts
   - *Function:* private static async initializeOidc() {
   - *Description:* Initializes oidc with configuration ids & uri
7. App - constructor
   - *File:* src/frontend/components/App.tsx
   - *Function:* constructor(props?: any, context?: any) {
   - *Description:* Creates an App instance
8. App - makeCalls
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async makeCalls() {
   - *Description:* Makes calls on initial start-up to set-up the app
9. App - getCorrectProjectName
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async _getCorrectProjectName() {
   - *Description:* Gets the current desired project as saved either from the settings.json file or from the Config.App singleton
10. Title - constructor
    - *File:* src/frontend/components/Title.tsx
    - *Function:* constructor(props: TitleProps) {
    - *Description:* Constructs a TitleBar object
11. App - OpenIModelButton componentWillMount
    - *File:* src/frontend/components/App.tsx
    - *Function:* public componentWillMount() {
    - *Description:* Performs onClick on initial start-up
12. App - OpenIModelButton onClick
    - *File:* src/frontend/components/App.tsx
    - *Function:* private _onClick = async () => {
    - *Description:* Handles on-click for open iModel button
13. App - OpenIModelButton getIModelInfo
    - *File:* src/frontend/components/App.tsx
    - *Function:* private async getIModelInfo(): Promise<{ projectId: string, imodelId: string }> {
    - *Description:* Finds project and iModel ID's using their names
14. App - componentDidMount
    - *File:* src/frontend/components/App.tsx
    - *Function:* public componentDidMount() {
    - *Description:* React method, after a component mounted sets up non-ui portions
15. App - startProcess
    - *File:* src/frontend/components/App.tsx
    - *Function:* private _startProcess = async (projectName: string, imodelName: string) => {
    - *Description:* Handles on-click for initial open iModel button
16. App - getIModelInfo
    - *File:* src/frontend/components/App.tsx
    - *Function:* private async getIModelInfo(projectName: string, imodelName: string): Promise<{ projectId: string, imodelId: string }> {
    - *Description:* Finds project and iModel ID's using their names
17. App - OpenIModelButton onIModelSelected
    - *File:* src/frontend/components/App.tsx
    - *Function:* private _onIModelSelected = async (imodel: IModelConnection | undefined, viewId?: string) => {
    - *Description:* Handles iModel open event
18. App - onIModelSelected
    - *File:* src/frontend/components/App.tsx
    - *Function:* private async onIModelSelected(imodel: IModelConnection | undefined) {
    - *Description:* Handles iModel open event
19. App - OpenIModelButton render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the open iModel button
20. App - getViewDefinitionId
    - *File:* src/frontend/components/App.tsx
    - *Function:* private async getViewDefinitionId(imodel: IModelConnection, viewId?: string): Promise<Id64String> {
    - *Description:* Picks the first available spatial view definition in the iModel
21. App - viewSort
    - *File:* src/frontend/components/App.tsx
    - *Function:* private viewSort(a: ViewDefinitionProps, b: ViewDefinitionProps): number {
    - *Description:* Helper method to sort an array of view definitions
22. App - render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the app
23. App - signInRedirectUri
    - *File:* src/frontend/components/App.tsx
    - *Function:* private get _signInRedirectUri() {
    - *Description:* Grabs the configuration redirect URI
24. Title - componentWillReceiveProps
    - *File:* src/frontend/components/Title.tsx
    - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
    - *Description:* Sets the title with the provided iModel data
25. Title - render
    - *File:* src/frontend/components/Title.tsx
    - *Function:* public render() {
    - *Description:* Renders the title
26. Group - GroupWidget render
    - *File:* src/frontend/components/Group.tsx
    - *Function:* public render() {
    - *Description:* Renders the GroupWidget
27. Group - ViewList constructor
    - *File:* src/frontend/components/Group.tsx
    - *Function:* constructor(props: any) {
    - *Description:* Constructs a dropdown list selecting a view
28. ViewList - viewWidget
    - *File:* src/frontend/components/ViewList.tsx
    - *Function:* const viewWidget = () => {
    - *Description:* Creates and exports widget with list of view definitions
29. App - getInitialView
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function getInitialView() {
    - *Description:* Returns initial ViewDefinitionProps object
30. App - get2DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
31. App - get3DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
32. App - IModelComponents constructor
    - *File:* src/frontend/components/App.tsx
    - *Function:* constructor(props: IModelComponentsProps) {
    - *Description:* Creates an iModel component instance
33. App - IModelComponents render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the iModel component
34. Viewport - render
    - *File:* src/frontend/components/Viewport.tsx
    - *Function:* public render() {
    - *Description:* Renders the Viewport
35. Toolbar - toolbar
    - *File:* src/frontend/components/Toolbar.tsx
    - *Function:* const toolbar = () => {
    - *Description:* Toolbar containing simple navigation tools
36. Toolbar - fitView
    - *File:* src/frontend/components/App.tsx
    - *Function:* export const fitView = () => {
    - *Description:* Fits the view in the viewport

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

1. App - OpenIModelButton onClick
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onClick = async () => {
   - *Description:* Handles on-click for open iModel button
2. App - OpenIModelButton getIModelInfo
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async getIModelInfo(): Promise<{ projectId: string, imodelId: string }> {
   - *Description:* Finds project and iModel ID's using their names
3. App - OpenIModelButton render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the open iModel button
4. App - OpenIModelButton onIModelSelected
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onIModelSelected = async (imodel: IModelConnection | undefined, viewId?: string) => {
   - *Description:* Handles iModel open event
5. App - onIModelSelected
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async onIModelSelected(imodel: IModelConnection | undefined) {
   - *Description:* Handles iModel open event
6. App - getViewDefinitionId
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async getViewDefinitionId(imodel: IModelConnection, viewId?: string): Promise<Id64String> {
   - *Description:* Picks the first available spatial view definition in the iModel
7. App - OpenIModelButton render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the open iModel button
8. App - viewSort
   - *File:* src/frontend/components/App.tsx
   - *Function:* private viewSort(a: ViewDefinitionProps, b: ViewDefinitionProps): number {
   - *Description:* Helper method to sort an array of view definitions
9. App - signInRedirectUri
   - *File:* src/frontend/components/App.tsx
   - *Function:* private get _signInRedirectUri() {
   - *Description:* Grabs the configuration redirect URI
10. Title - componentWillReceiveProps
    - *File:* src/frontend/components/Title.tsx
    - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
    - *Description:* Sets the title with the provided iModel data
11. Title - render
    - *File:* src/frontend/components/Title.tsx
    - *Function:* public render() {
    - *Description:* Renders the title
12. Group - GroupWidget render
    - *File:* src/frontend/components/Group.tsx
    - *Function:* public render() {
    - *Description:* Renders the GroupWidget
13. Group - ViewList constructor
    - *File:* src/frontend/components/Group.tsx
    - *Function:* constructor(props: any) {
    - *Description:* Constructs a dropdown list selecting a view
14. ViewList - viewWidget
    - *File:* src/frontend/components/ViewList.tsx
    - *Function:* const viewWidget = () => {
    - *Description:* Creates and exports widget with list of view definitions
15. App - getInitialView
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function getInitialView() {
    - *Description:* Returns initial ViewDefinitionProps object
16. App - get2DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
17. App - get3DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
18. App - IModelComponents render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the iModel component
19. Viewport - render
    - *File:* src/frontend/components/Viewport.tsx
    - *Function:* public render() {
    - *Description:* Renders the Viewport
20. Toolbar - toolbar
    - *File:* src/frontend/components/Toolbar.tsx
    - *Function:* const toolbar = () => {
    - *Description:* Toolbar containing simple navigation tools
21. Toolbar - fitView
    - *File:* src/frontend/components/App.tsx
    - *Function:* export const fitView = () => {
    - *Description:* Fits the view in the viewport

*Proceed to **Expanding the Menu**.*

## **Expanding the Menu**

1. App - menuClick
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _menuClick = async () => {
   - *Description:* Handles full screen menu button state change
2. App - render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the app
3. App - signInRedirectUri
   - *File:* src/frontend/components/App.tsx
   - *Function:* private get _signInRedirectUri() {
   - *Description:* Grabs the configuration redirect URI
4. Title - componentWillReciveProps
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
   - *Description:* Sets the title with the provided iModel data
5. Title - render
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public render() {
   - *Description:* Renders the title
6. Group - GroupWidget render
   - *File:* src/frontend/components/Group.tsx
   - *Function:* public render() {
   - *Description:* Renders the GroupWidget
7. Group - ViewList constructor
   - *File:* src/frontend/components/Group.tsx
   - *Function:* constructor(props: any) {
   - *Description:* Constructs a dropdown list selecting a view
8. ViewList - viewWidget
   - *File:* src/frontend/components/ViewList.tsx
   - *Function:* const viewWidget = () => {
   - *Description:* Creates and exports widget with list of view definitions
9. App - getIniitalView
   - *File:* src/frontend/components/App.tsx
   - *Function:* export function getInitialView() {
   - *Description:* Returns initial ViewDefinitionProps object
10. App - get2DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
11. App - get3DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
12. App - IModelComponents render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the iModel component
13. Viewport - render
    - *File:* src/frontend/components/Viewport.tsx
    - *Function:* public render() {
    - *Description:* Renders the Viewport
14. Toolbar - toolbar
    - *File:* src/frontend/components/Toolbar.tsx
    - *Function:* const toolbar = () => {
    - *Description:* Toolbar containing simple navigation tools
15. Tree - render
    - *File:* src/frontend/components/Tree.tsx
    - *Function:* public render() {
    - *Description:* Fills the tree using the data provider when the app is updated
16. Tree - getDataProvider
    - *File:* src/frontend/components/Tree.tsx
    - *Function:* private getDataProvider(props: Props) {
    - *Description:* Returns a data provider for the tree
17. Properties - render
    - *File:* src/frontend/components/Properties.tsx
    - *Function:* public render() {
    - *Description:* Renders the Properties widget
18. Properties - getDataProvider
    - *File:* src/frontend/components/Properties.tsx
    - *Function:* private getDataProvider(props: Props) {
    - *Description:* Gets the data provider to fill the Properties widget
19. Table - render
    - *File:* src/frontend/components/Table.tsx
    - *Function:* public render() {
    - *Description:* Renders the Table widget
20. Table - getDataProvider
    - *File:* src/frontend/components/Table.tsx
    - *Function:* private getDataProvider(props: Props) {
    - *Description:* Gets the data provider to fill the Table widget

*Proceed to **Collapsing the Menu**.*

## **Collapsing the Menu**

1. App - menuClick
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _menuClick = async () => {
   - *Description:* Handles full screen menu button state change
2. App - render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the app
3. App - signInRedirectUri
   - *File:* src/frontend/components/App.tsx
   - *Function:* private get _signInRedirectUri() {
   - *Description:* Grabs the configuration redirect URI
4. Title - componentWillReciveProps
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
   - *Description:* Sets the title with the provided iModel data
5. Title - render
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public render() {
   - *Description:* Renders the title
6. Group - GroupWidget render
   - *File:* src/frontend/components/Group.tsx
   - *Function:* public render() {
   - *Description:* Renders the GroupWidget
7. Group - ViewList constructor
   - *File:* src/frontend/components/Group.tsx
   - *Function:* constructor(props: any) {
   - *Description:* Constructs a dropdown list selecting a view
8. ViewList - viewWidget
   - *File:* src/frontend/components/ViewList.tsx
   - *Function:* const viewWidget = () => {
   - *Description:* Creates and exports widget with list of view definitions
9. App - getIniitalView
   - *File:* src/frontend/components/App.tsx
   - *Function:* export function getInitialView() {
   - *Description:* Returns initial ViewDefinitionProps object
10. App - get2DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
11. App - get3DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
12. App - IModelComponents render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the iModel component
13. Viewport - render
    - *File:* src/frontend/components/Viewport.tsx
    - *Function:* public render() {
    - *Description:* Renders the Viewport
14. Toolbar - toolbar
    - *File:* src/frontend/components/Toolbar.tsx
    - *Function:* const toolbar = () => {
    - *Description:* Toolbar containing simple navigation tools

*Proceed to **Selecting a Drawing in the Header**.*

## **Selecting a Drawing in the Header**

1. Group - ViewList handleSubmit
   - *File:* src/frontend/components/Group.tsx
   - *Function:* public handleSubmit() {
   - *Description:* Handles new form submission of dropdown elements from the list
2. Group - ViewContainer setNewView
   - *File:* src/frontend/components/Group.tsx
   - *Function:* public setNewView(view: string) {
   - *Description:* Set initial view
3. App - changeView
   - *File:* src/frontend/components/App.tsx
   - *Function:* export function changeView(viewId: string) {
   - *Description:* Changes the App's view definition
4. App - updateView
   - *File:* src/frontend/components/App.tsx
   - *Function:* public updateView(viewId: string) {
   - *Description:* Updates the App's view definition
5. App - onIModelSelected
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async onIModelSelected(imodel: IModelConnection | undefined) {
   - *Description:* Handles iModel open event
6. App - getViewDefinitionId
   - *File:* src/frontend/components/App.tsx
   - *Function:* private async getViewDefinitionId(imodel: IModelConnection, viewId?: string): Promise<Id64String> {
   - *Description:* Picks the first available spatial view definition in the iModel
7. App - render
   - *File:* src/frontend/components/App.tsx
   - *Function:* public render() {
   - *Description:* Renders the app
8. App - signInRedirectUri
   - *File:* src/frontend/components/App.tsx
   - *Function:* private get _signInRedirectUri() {
   - *Description:* Grabs the configuration redirect URI
9. Title - componentWillReceiveProps
   - *File:* src/frontend/components/Title.tsx
   - *Function:* public componentWillReceiveProps(newProps: TitleProps) {
   - *Description:* Sets the title with the provided iModel data
10. Title - render
    - *File:* src/frontend/components/Title.tsx
    - *Function:* public render() {
    - *Description:* Renders the title
11. Group - GroupWidget render
    - *File:* src/frontend/components/Group.tsx
    - *Function:* public render() {
    - *Description:* Renders the GroupWidget
12. Group - ViewList constructor
    - *File:* src/frontend/components/Group.tsx
    - *Function:* constructor(props: any) {
    - *Description:* Constructs a dropdown list selecting a view
13. ViewList - viewWidget
    - *File:* src/frontend/components/ViewList.tsx
    - *Function:* const viewWidget = () => {
    - *Description:* Creates and exports widget with list of view definitions
14. App - getInitialView
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function getInitialView() {
    - *Description:* Returns initial ViewDefinitionProps object
15. App - get2DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get2DViews() {
    - *Description:* Returns array of 2D ViewDefinitionProps objects
16. App - get3DViews
    - *File:* src/frontend/components/App.tsx
    - *Function:* export function get3DViews() {
    - *Description:* Returns array of 3D ViewDefinitionProps objects
17. App - IModelComponents render
    - *File:* src/frontend/components/App.tsx
    - *Function:* public render() {
    - *Description:* Renders the iModel component
18. Viewport - render
    - *File:* src/frontend/components/Viewport.tsx
    - *Function:* public render() {
    - *Description:* Renders the Viewport
19. Toolbar - toolbar
    - *File:* src/frontend/components/Toolbar.tsx
    - *Function:* const toolbar = () => {
    - *Description:* Toolbar containing simple navigation tools
20. Toolbar - fitView
    - *File:* src/frontend/components/App.tsx
    - *Function:* export const fitView = () => {
    - *Description:* Fits the view in the viewport

*Proceed to **Selecting a Drawing in the Tree**.*

## **Selecting a Drawing in the Tree**

1. App - onSelectionChanged
   - *File:* src/frontend/components/App.tsx
   - *Function:* private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
   - *Description:* When the drawing is changed, handle that change in selection, get a new drawing, and update properties and viewings
2. App - changeView
   - *File:* src/frontend/components/App.tsx
   - *Function:* export function changeView(viewId: string) {
   - *Description:* Changes the App's view definition
3. App - setupDisplayByCategories
   - *File:* src/frontend/components/App.tsx
   - *Function:* public async setupDisplayByCategories(modelId: Id64String, vp: ScreenViewport) {
   - *Description:* Sets up the display of the drawing model with elements colored by their category

*Return to **Call Stack**.*
