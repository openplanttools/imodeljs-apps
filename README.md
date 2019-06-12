# In Development PlantView application

## Current TODO
1. Manually pick which project to view - Nick *in progress*
2. Fix the sign-in button. - Zach *in progress*
3. Formatting/updating viewer relative to model that is chosen. - Zach *in progress*
4. Display only relevant documents in tree. - Zach *in progress*
5. Automatically update on changes.
6. Be able to edit properties in the viewer.
7. Resolve all warnings/errors.
Convert backend to be entirely electron/desktop based. - Nick **Done**

Display only relevant documents in tree. - Zach *in progress*

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
