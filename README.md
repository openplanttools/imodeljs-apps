# Plant Viewer (in development)

Stages in a task:

1. *ongoing*
2. *in progress*
3. *partially done*
4. *mostly done*
5. **Done**

## Current To-Do

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

## Development Setup

1. If you do not have a ProjectWise Project, register a sample one. Otherwise, you can skip this step.
   - Select whether you are in [Production](https://imodeljs.github.io/iModelJs-docs-output/getting-started/registration-dashboard/) or [QA](http://builds.bentley.com/prgbuilds/AzureBuilds/iModelJsDocs/public/getting-started/registration-dashboard/).
   - Go to **Registered Products**, and select **+ New Project**.
   - Under **iModel Source**, use the sample **Bentley Example** with the **Retail Building Sample** selection
2. Open the Command Prompt.
3. Clone the rpeository from GitHub on your local machine with the following command:
   - `git clone https://github.com/OpenPlantDev/PlantViewer`
4. Navigate to the cloned directory with the following command:
   - `cd PlantViewer`
5. Open the directory in Visual Studio Code with the following command:
   - `code .`
6. Open **src/common/configuration.json** and scroll down to the bottom underneath the **CONFIGURATION SETTINGS** comment.
7. Comment/uncomment the lines of code for production/QA (**Production** requires 1 line, and **QA** requires 2 lines).
8. Set the names of the Project, iModel, and Drawing in the lines below.
9. Save your changes.
10. Type **CTRL+`** to open the terminal in Visual Studio Code.
11. If you have not done so already, type the following command in the terminal to install the dependencies:
    - `npm install`
    - *NOTE: This only needs to be done one time even if you change the configuration settings.*
12. Type the following command in the terminal to build the application:
    - `npm run build`
13. Type in the following command to run (and open) the application:
    - `npm run electron`
14. When prompted, sign-in and click on the **Open iModel** button.
15. *To view other projects/models, repeat steps 6-10 & 12-14.*
    - *NOTE: Step 11 does not need to be repeated.*

## Git Developer Guide

Before using Git on windows command prompt or git bash, you will need to install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### **Setup local git repository**

Get a local copy of the repository (`master` branch):

- `git clone https://bentleycs@dev.azure.com/bentleycs/iModelTechnologies/_git/imodeljs-openplant-viewer`

If you already have a local git repository set up, then run the following to ensure that you are synchronized with VSTS (check with a team member - this may be done for you already):

- `git remote set-url origin https://bentleycs@dev.azure.com/bentleycs/iModelTechnologies/_git/imodeljs-openplant-viewer`

You may verify your remote handles:

- `git remote -v`

*IMPORTANT:* We never work directly off of the `master` branches on our local machines!

### **Regularly update your development branch**

*IMPORTANT:* It is recommended to do this twice a day!

Instead of the above, you may also do the following:

1. `git fetch origin master`
2. `git merge origin/master`

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
