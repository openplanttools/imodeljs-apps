# **Plant Viewer (in development)**

## **User Guide**

### **About**

- This is an electron application to view P&ID drawings of iModels.
- Provide the credentials of the iModel to view.
- An electron application opens up and presents the iModel.

### **Install**

1. If you do not already have a project, create a new project with the default settings by clicking [here for **Production**](https://imodeljs.github.io/iModelJs-docs-output/getting-started/registration-dashboard/) or [here for **QA**](http://builds.bentley.com/prgbuilds/AzureBuilds/iModelJsDocs/public/getting-started/registration-dashboard/).
2. Open the Command Prompt and navigate to where you would like the repository to be created (it will create a new folder called **imodeljs-openplant-viewer**).
3. Type the following command to clone the repository in the "imodeljs-openplant-viewer" folder.
   - **`git clone https://dev.azure.com/bentleycs/Plant%20Design/_git/imodeljs-openplant-viewer`**
4. Type the following commands to open the repository in Visual Studio Code.
   - **`cd imodeljs-openplant-viewer`**
   - **`code .`**

### **Build**

1. Open src/common/configuration.json, scroll down to the very bottom, and comment/uncomment the lines for your client (Production or QA).
2. Open the src/common/settings.json, and put the names of the project, iModel, and drawing (optional).
3. Save your changes.
4. Type **[CTRL+`]** to open the terminal in Visual Studio Code.
5. Type the following command in the terminal to install the dependencies (may take a few minutes).
   - **`npm install`**
   - **_This only has to be done once even if you make changes and build again!_**
6. Type the following command in the terminal to build the applicaiton (should only take a few seconds).
   - **`npm run build`**

### **Run**

1. Type the following command in the terminal to run the application. An electron window will open within seconds.
   - **`npm run electron`**
2. View the **Help** section below to see how to use the application.
3. Close the electron window to stop running the application.
4. If you want to re-run the application without any changes to the program files, go back to step 1.
5. If you want to re-run the application and make changes to the program files, go back to the **Build** section above to re-build the application.

### **Configuration**
How to change the imodel/project combination you would like to view.
    - **As of right now all project must be on the QA server**
##### Method 1
1. Navigate to imodeljs-openplant-viewer/lib/common and open iModel.Settings.json and from there edit the project and imodel values.
2. Run the application normally.
##### Method 2
1. Create a new file called <FileName>.Settings.json
2. Populate this file in the same format as iModel.Settings.json, fill in your own values.
3. Run the application, and on the opening screen navigate to and select your new configuration file.

### **Help**

1. When prompted, **log-in** with your credentials. This grants access to the backend servers that contain the iModel information.
2. When a blue button that reads "**Open iModel**" comes up, click on it. This will pull the iModel information from the web and display it.
3. Click on "**Expand Menu**" (top-right of screen) to see options and properties, as well as the Tree. This can be collapsed by clicking on the same button.
4. Click on "**Reload iModel**" (top-right of screen) to refresh the iModel you are viewing if it was updated on the cloud after you opened it in the viewer.
5. To switch drawings, click on a **drawing** under the **Tree** (top-right of screen). This will update the viewer.
6. To select a **graphic** in a drawing, either click on it in the viewer, or expand the drawing under **Tree** and select one under **PID Drawing Categories**. When a graphic is selected, it will be highlighted in the viewer and will have its information displayed in **Properties** (bottom of screen).

### **Workflow**

- The [**Azure DevOps repository**](https://dev.azure.com/bentleycs/Plant%20Design/_git/imodeljs-openplant-viewer) contains all up-to-date revisions.
- The [**GitHub repository**](https://github.com/openplanttools/ElectronPlantViewer) contains only the published, operational, user-friendly revisions.

1. To push changes to either repository, type the following command in the terminal to create a new branch.
   - **`git checkout -b [branch name]`**
2. Type in the following command to stage your changes to the new branch.
   - **`git add .`**
3. Type in the following command to commit your changes to the new branch.
   - **`git commit -m "[comment describing changes]"`**
4. Type in the following command to push your changes to the new branch.
   - **`git push origin [branch name]`**
5. Open the repository in the browser ([**Azure DevOps**](https://dev.azure.com/bentleycs/Plant%20Design/_git/imodeljs-openplant-viewer) or [**GitHub**](https://github.com/openplanttools/ElectronPlantViewer)).
6. Create a pull request for the new branch, and then approve and complete it.
7. The master branch has now been updated with the pushed changes.
8. Remember to type the following commands in your terminal to get the updated master branch.
   - **`git checkout master`**
   - **`git pull origin master`**

## **Git Developer Guide**

Before using Git on windows command prompt or git bash, you will need to install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### **Set up local git repository**

Get a local copy of the repository (`master` branch):

- `git clone https://bentleycs.visualstudio.com/iModelTechnologies/_git/imodeljs-openplant-viewer`

If you already have a local git repository set up, then run the following to ensure that you are synchronized with VSTS (check with a team member - this may be done for you already):

- `git remote set-url origin https://bentleycs.visualstudio.com/iModelTechnologies/_git/imodeljs-openplant-viewer`

You may verify your remote handles:

- `git remote -v`

*IMPORTANT:* We never work directly off of the `master` branches on our local machines!

### **Create a new feature branch for each work item**

1. Ensure that you are on the `master` branch:
   - `git checkout master`
2. Pull the latest changes:
   - `git pull origin master`
3. Create a new feature branch for your work item:
   - `git checkout - b [UR-branch-name]`

Use the following branch naming convention:

- `{InitialsAllCaps}-{descriptive-name-of-branch-with-dashes}`
  - ex. `AM-this-is-a-sample`

### **Regularly update your development branch**

*IMPORTANT:* It is recommended to do this twice a day!

Instead of the above, you may also do the following:

1. `git fetch origin master`
2. `git merge origin master`

### **Check in your work**

1. Review your local changes (make sure you know what you're changing):
   - `git status`
2. Stage your changes that you intend to check in:
   - `git add [fileName1 fileName2 ...]`
3. Commit your changes with a descriptive message:
   - `git commit -m "[Commit message]"`
4. Push your changes:
   - `git push origin [UR-branch-name]`
5. Navigate over to view all branches via [VSTS](https://bentleycs.visualstudio.com/iModelTechnologies/_git/imodeljs-openplant-viewer).
6. Set the `master` branch as the compare branch.
7. Submit a pull request and be sure to add at least one team member to review your work.
8. Once someone reviews your work and approves your changes, merge your changes to the `master` branch.
9. *IMPORTANT:* Please be sure to delete your feature branch after you merge your changes! (you can check the option to do this on the merge confirmation page)
