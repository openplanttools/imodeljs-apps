# In Development PlantView application
##### Stages in a task
1. *ongoing*
2. *in progress*
3. *partially done*
4. *mostly done*
5. **Done**


## Current TODO
1. Manually view all projects ***Done*** - Nick
2. Display only relevant documents in tree, and create new component to replace Tree View for plant document models. - Nick *in progress*
3. Automatically update on changes. **Done** - Nick
4. Be able to change the view definition in the viewer. *Unsure if we want to do this*
5. Be able to edit properties in the viewer, *unsure if this one needs to be done.*
6. Resolve all warnings/errors. *TBD*
7. Fix initial button page.
8. Add scrolling to property.
9. Fix the sign-in button (lacking access to currently fix this). *TBD*
10. Convert backend to be entirely electron/desktop based. - Nick **Done**
11. Pick which project to view. - Zach *in progress*
12. Clean up code base **Done for now** - Nick
13. Comment parts for explanations **Done** - Nick
14. Fix CSS formatting *in progress* - Nick
15. Fix clashes with electron IPC and configuration of front-back communication.
16. Determine the necessity of webpack in browser runtime environment. **Done** - Nick
17. Modify dependencies list, strip unused pieces, keep only browser specific portions.
18. If we end up keeping webpack, reconfigure its options to be better suited, right now its causing some problems on the backend. **Done** - Nick
19. Add configurable options to options bar, have those be saved in a JSON.
20. Determine whether/how to implement ipcMain - ipcRenderer communication **Done** - Nick
21. Get viewport to successfully update **Done** - Nick
22. Determine whether or not to migrate configuration.ts to a JSON
23. Implement loading circle function upon switching views/imodels/projects. - Zach *in progress*
24. Implement nicer loading functionality.
25. Move select new iModel button to project
26. Fix weird character bug (e.g. Miscellaneous). - Zach *in progress*

##### (2) Display only relevant documents in tree.
1. iModelHub project name (e.g. opbimdev01)
2. iModel name (e.g. Nick-May2019)
3. P&ID name (e.g. LakeLand), under PlantDocumentModel>Drawing
4. P&ID graphic (e.g. Pid Graphic-3-29 w/ tag value (e.g. EX-0005), heat exchanger), under Equipment
- keep directories (e.g. Equipment, Valve, etc.)
- group similar ones together (e.g. Equipment > Centrifugal Pump > PMP-0001, PMP-0002)

## Development Setup

1.	If you do not have a ProjectWise Project, register a sample one. Otherwise, you can skip this step.
	- For *Production*, go to https://imodeljs.github.io/iModelJs-docs-output/getting-started/registration-dashboard/.
	- For *QA*, go to http://builds.bentley.com/prgbuilds/AzureBuilds/iModelJsDocs/public/getting-started/registration-dashboard/.
	Go to [Registered Products], and select [+ New Project].
	Under [iModel Source], use the sample [Bentley Example] with the [Retail Building Sample] selection.

2.	Open the Command Prompt.

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
  *Warning* If you have a merge conflict, this jumble the code, you should check what was changed before you commit.

  If you would like to check the files you are about to commit, before you commit type git status.

### To pull changes

  - cd into your local copy of project
  - type git pull

### Important
Don't remove node_modules from your .gitignore file. This is the file listing everything git will ignore
when looking for changes. This is because this file is very big, and everyone should have the same one, so its not necessary to upload it.
You can add files to the gitignore simply by editting it manually, I'm not sure there's a command for that. If you want to remove files in your gitignore from your repository, you may type git clean.
