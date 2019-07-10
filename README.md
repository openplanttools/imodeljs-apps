# **Plant Viewer (in development)**

Stages in a task:

1. *ongoing*
2. *in progress*
3. *partially done*
4. *mostly done*
5. **Done**

## **Current Tasks**

1. Fix configuration reading, and comply with config.json. *mostly done* - Nick
2. Fix CSS formatting. *mostly done* - Nick
3. Rework titles. *mostly done* - Nick
4. Resolve all warnings/errors. *mostly done* - Zach
5. Pick which project to view. *mostly done* - Zach
6. Move dropdown boxes for project, iModel, and drawing selections to the header. *mostly done* (waiting for all buttons to be fully functional) - Nick/Zach
7. Fix weird character bug (e.g. miscellaneous). *in progress* - Nick
8. Resolve list of projects in production. *in progress* - Zach
9. Pick which drawing to view. *in progress* - Zach
10. Fix the broken log-in in QA (right now, no log-in is required, but lacking access to currently fix this).
11. Move configuration.ts set-up into the electron viewer instead.
12. Fix initial button page.
13. Put button selection sin the menu.
14. Fix the briefcase id error in production.
15. Modify dependencies list, strip unused pieces, and keep only browser specific portions.
16. Add configurable options to options bar, and have those be saved in a JSON.
17. In the bottom properties display widget, add functionality to click on a category to display only that category, and click on it again to switch back to all categories.
18. Display both the 3D and 2D views in the viewport.
19. Only display and allow to pass in the projcet, iModel, and drawing names.
20. Maybe move the menu button to the window menu or in the toolbar in the viewport.
21. Look into token restoration after certain periods of time (i.e. does token expire after an hour even if using it?).
22. Implement loading circle function upon switching views/iModels/projects (possibly does not need to be done...).
23. Implement nicer loading functionality (possibly does no tneed to be done...).
24. Fix the sign-in button (lacking access to currently fix this).
25. Manually view all projects **Done** - Nick
26. Display only relevant documents in tree, and create new component to replace tree view for plant document models. **Done** - Nick
27. Automatically update on changes. **Done** - Nick
28. Be able to change the views in the viewer. **Done** - Nick
29. Be able to edit properties in the viewer. **Done** - Nick
30. Add scrolling to property. **Done** - Nick
31. Clean up code base. **Done** - Nick
32. Comment parts for explanations. **Done** - Nick
33. Convert backend to be entirely electron/desktop based. **Done** - Nick
34. Fix clashes with electron IPC and configuration of front-back communication. **Done** - Nick
35. Determine the necessity of webpack in browser runtime environment. **Done** - Nick
36. If we end up keeping webpack, reconfigure its options to be better suited (right now, it's causing some problems on the backend). **Done** - Nick
37. Determine whether/how to implement ipcMain-ipcRenderer communication. **Done** - Nick
38. Get viewport to successfully update. **Done** - Nick
39. Determine whether or not to migrate configuration.ts to a JSON. **Done** - Nick
40. Add unified selection capability back into the tree. **Done** - Nick
41. Fix scrolling issue with properties tool. **Done** - Nick

## **User Guide**

### **About**

- This is an electron application to view P&ID drawings of iModels.
- Provide the credentials of the iModel to view.
- An electron application opens up and presents the iModel.

### **Install**

1. If you do not already have a project, create a new project with the default settings by clicking [here for **Production**](https://imodeljs.github.io/iModelJs-docs-output/getting-started/registration-dashboard/) or [here for **QA**](http://builds.bentley.com/prgbuilds/AzureBuilds/iModelJsDocs/public/getting-started/registration-dashboard/).
2. Open the Command Prompt and navigate to where you would like the repository to be created (it will create a new folder called **imodeljs-openplant-viewer**).
3. Type the following command to clone the repository in the "imodeljs-openplant-viewer" folder.
   - **`git clone https://bentleycs.visualstudio.com/iModelTechnologies/_git/imodeljs-openplant-viewer`**
4. Type the following commands to open the repository in Visual Studio Code.
   - **`cd imodeljs-openplant-viewer`**
   - **`code .`**
5. _Proceed to Build!_

### **Build**

1. Open the **src/common/configuration.json** file, and scroll down to the "**CONFIGURATION SETTINGS**" comment near the bottom of the file.
2. Comment/uncomment the lines of code for which client you are in.
   - **Production** requires 1 line, and **QA** requires 2 lines.
   - Update the names of the **project**, **iModel**, and **drawing (optional)** to what you want the viewer to present.
3. Save your changes.
4. Type **[CTRL+`]** to open the terminal in Visual Studio Code.
5. Type the following command in the terminal to install the dependencies (may take a few minutes).
   - **`npm install`**
   - **_This only has to be done once even if you make changes and build again!_**
6. Type the following command in the terminal to build the applicaiton (should only take a few seconds).
   - **`npm run build`**
7. _Proceed to Run!_

### **Run**

1. Type the following command in the temrinal to run the application. An electron window will open within seconds.
2. View the **Call Stack** section below to see how to use the application.
3. Close the electron window to stop running the application.
4. If you want to re-run the application without any changes to the program files, go back to step 1.
5. If you want to re-run the application and make changes to the program files, go back to the **Build** section above to re-build the application.
6. _Proceed to Workflow!_

### **Call Stack**

1. When prompted, **log-in** with your credentials. This grants access to the backend servers that contain the iModel information.
2. When a blue button that reads "**Open iModel**" comes up, click on it. This will pull the iModel information from the web and display it.
3. Click on "**Expand Menu**" (top-right of screen) to see options and properties, as well as the Tree. This can be collapsed by clicking on the same button.
4. To change the **project**, **iModel**, and/or **drawing**, use the dropdown options (right-middle of screen). Tihs will update the viewer.
5. To switch drawings, click on a **drawing** under the **Tree** (top-right of screen). This will update the viewer.
6. To select a **graphic** in a drawing, either click on it in the viewer, or expand the drawing under **Tree** and select one under **PID Drawing Categories**. When a graphic is selected, it will be highlighted in the viewer and will have its information displayed in **Properties** (bottom of screen).
7. _Return to Run!_

### **Workflow**

1. You can see all the program files (aside from the installed dependencies) on **Azure DevOps** by clicking [here](https://bentleycs.visualstudio.com/iModelTechnologies/_git/imodeljs-openplant-viewer).
2. All updates are made via pull requests on **Azure DevOps**. Requests must be approved and pass unit and integration tests to build correctly.
3. Development standards and help can be found in the "**Git Developer Guide**" below.

## **Git Developer Guide**

Before using Git on windows command prompt or git bash, you will need to install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### **Set up local git repository**

Get a local copy of the repository (`master` branch):

- `git clone https://bentleycs@dev.azure.com/bentleycs/iModelTechnologies/_git/imodeljs-openplant-viewer`

If you already have a local git repository set up, then run the following to ensure that you are synchronized with VSTS (check with a team member - this may be done for you already):

- `git remote set-url origin https://bentleycs@dev.azure.com/bentleycs/iModelTechnologies/_git/imodeljs-openplant-viewer`

You may verify your remote handles:

- `git remote -v`

*IMPORTANT:* We never work directly off of the `master` branches on our local machines!

### **Create a new feature branch for each work item**

1. Ensure that you are on the `master` branch:
   - `git checkout master`
2. Pull the latest changes:
   - `git pull`
3. Create a new feature branch for your work item:
   - `git checkout - b [UR-branch-name]`

Use the following branch naming convention:

- `{InitialsAllCaps}-{descriptive-name-of-branch-with-dashes}`
  - ex. `AM-this-is-a-sample`

### **Regularly update your development branch**

*IMPORTANT:* It is recommended to do this twice a day!

Instead of the above, you may also do the following:

1. `git fetch origin master`
2. `git merge origin/master`

### **Check in your work**

1. Review your local changes (make sure you know what you're changing):
   - `git status`
2. Stage your changes that you intend to check in:
   - `git add [fileName1 fileName2 ...]`
3. Commit your changes with a descriptive message:
   - `git commit -m "[Commit message]"`
4. Push your changes:
   - `git push origin [UR-branch-name]`
5. Navigate over to view all branches via [VSTS](https://bentleycs@dev.azure.com/bentleycs/iModelTechnologies/_git/imodeljs-openplant-viewer).
6. Set the `master` branch as the compare branch.
7. Submit a pull request and be sure to add at least one team member to review your work.
8. Once someone reviews your work and approves your changes, merge your changes to the `master` branch.
9. *IMPORTANT:* Please be sure to delete your feature branch after you merge your changes! (you can check the option to do this on the merge confirmation page)
