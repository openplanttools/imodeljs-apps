# In Development PlantView application

##### Stages in a task
1. *ongoing*
2. *in progress*
3. *partially done*
4. *mostly done*
5. **Done**


## Current TODO
1. Manually view all projects ***Done*** - Nick
2. Display only relevant documents in tree, and create new component to replace Tree View for plant document models. - Nick **DONE**
3. Automatically update on changes. **Done** - Nick
4. Be able to change the view definition in the viewer. *Unsure if we want to do this*
5. Be able to edit properties in the viewer, *unsure if this one needs to be done.*
6. Resolve all warnings/errors. *TBD*
7. Fix initial button page.
8. Add scrolling to property.
9. Fix the sign-in button (lacking access to currently fix this). *TBD*
10. Convert backend to be entirely electron/desktop based. - Nick **Done**
11. Clean up code base **Done for now** - Nick
12. Comment parts for explanations **Done** - Nick
13. Fix CSS formatting *partially done* - Nick
14. Fix clashes with electron IPC and configuration of front-back communication.
15. Determine the necessity of webpack in browser runtime environment. **Done** - Nick
16. Modify dependencies list, strip unused pieces, keep only browser specific portions.
17. If we end up keeping webpack, reconfigure its options to be better suited, right now its causing some problems on the backend. **Done** - Nick
18. Add configurable options to options bar, have those be saved in a JSON.
19. Determine whether/how to implement ipcMain - ipcRenderer communication **Done** - Nick
20. Get viewport to successfully update **Done** - Nick
21. Determine whether or not to migrate configuration.ts to a JSON
22. Implement loading circle function upon switching views/imodels/projects.
23. Implement nicer loading functionality.
24. Move select new iModel button to project
25. Fix weird character bug (e.g. Miscellaneous).
26. In bottom properties display widget, add functionality to click on category to display only that category, and click on it again to switch back to all categories
27. Display both the 3D and 2D views in the Viewport.
28. Only display and allow to pass in the project, iModel, and drawing names.
29. Maybe move the Menu button to the window menu or in the Toolbar in the Viewport.
30. Add unified selection capability back into the tree **Done** - Nick
31. Pick which project to view. - Zach *in progress*
32. Pick which drawing to view. - Zach *in progress*
33. Move dropdown boxes for project, iModel, and drawing selections to the header. - Nick, Zach *in progress*
34. Move configuration.ts set-up into the Electron viewer instead. - Zach *in progress*
35. In Production, fix the list of projects. - Zach *in progress*
36. In Production, fix the briefcase id error (if this is not just a conncetion issue).
37. Rework Titles - Nick *in progress*

## Development Setup

1.	If you do not have a ProjectWise Project, register a sample one. Otherwise, you can skip this step.
	- For *Production*, go to https://imodeljs.github.io/iModelJs-docs-output/getting-started/registration-dashboard/.
	- For *QA*, go to http://builds.bentley.com/prgbuilds/AzureBuilds/iModelJsDocs/public/getting-started/registration-dashboard/.
	Go to [Registered Products], and select [+ New Project].
	Under [iModel Source], use the sample [Bentley Example] with the [Retail Building Sample] selection.

2.    Open the Command Prompt.

3.	Clone the rpeository from GitHub on your local machine with the following command:
	*	git clone https://github.com/OpenPlantDev/PlantViewer

4.	Navigate to the cloned directory with the following command:
	*	cd PlantViewer

5.	Open the directory in Visual Studio Code with the following command:
	*	code .

6.	Complete step *(1)* in [src/common/configuration.json] by un-commenting one of the four blocks.
	- The first block runs the viewer in the *browser* in *Production*.
	- The second block runs the viewer in the *browser* in *QA*.
	- The third block runs the viewer in *electron* in *Production*.
	- The fourth block runs the viewer in *electron* in *QA*.
	NOTE: Highlighting the block and using [Ctrl + /] will comment/un-comment that section of code.

7.  Complete step *(2)* in [src/common/configuration.json] by setting the project and iModel names.

8.	Save your changes.

9.	Type [Ctrl + `] to open the terminal in Visual Studio Code.

10.	If you have not done so already, type the following command in the terminal to install the dependencies:
	*	npm install
	NOTE: This only needs to be done one time even if you change the configuration settings.

11.	Type the following command in the terminal to build the application:
	*	npm run build

12.	Type one of the following commands in the terminal to run the applicaiton:
	- To run in browser:
		*	npm run start:servers
	- To run in electron:
		*	npm run electron

13.	To run in browser, open [localhost:3000] in a web browser.
	To run in electron, a window will open automatically.

14.	*To view other projects/models, repeat steps 6, 7, 8, 9, 11, 12, and 13.*
	NOTE: Step 10 does not need to be repeated.

## Git instructions

### To Clone:
   - type into any command line, in the directory you want to project to be git clone "urltoproject"

### To push changes

   - cd into your local copy of project
   - type git add .
   - type git commit -m "Your comment on commits"
   - type git push

  It will then push changes, but be careful. If you get something called a merge conflict warning, type git stash, and google how to proceed. a merge conflict will change portions of the code. This is preferably avoided.
  Git stash creates a local copy of your changes, but reverts your files to the main shared version. This is one way to deal with merge conflicts. To apply your changes simply type git stash pop.
  **Warning** If you have a merge conflict, this will jumble the code, you should check what was changed before you commit.

  If you would like to check the files you are about to commit, before you commit type git status.

### To pull changes

  - cd into your local copy of project
  - type git pull

### Important
Don't remove node_modules from your .gitignore file. This is the file listing everything git will ignore
when looking for changes. This is because this file is very big, and everyone should have the same one, so its not necessary to upload it.
You can add files to the gitignore simply by editting it manually, I'm not sure there's a command for that. If you want to remove files in your gitignore from your repository, you may type git clean.
