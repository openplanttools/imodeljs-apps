# In Development PlantView application

## Current TODO
1. Manually pick which project to view -Nick In Progress, dependant on 5
2. Display only relevant documents in tree. -Zach
3. Automatically update on changes.
4. Formatting/updating viewer relative to model that is chosen.
5. Convert backend to be entirely electron/desktop based. - Nick
6. Be able to edit properties in the viewer.
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
