[[_TOC_]]

# Pull Request Policies

One of the main benefits of using pull requests, is the ability to ensure the code builds and passes all tests before it can go into the master branch. This enforcement is done through policies. There are a number of available policies that can be setup for pull requests, the following are the ones that need to be completed for contributing to iModelJs, or any of its samples.

- Successful build 
- One required reviewer.
    - The [Plant Design Team](https://dev.azure.com/bentleycs/_git/Plant%20Design) is a required reviewer. This means anyone within that team can review and approve the pull request.
    - Note: Members of the Plant Design Team will not be able to approve their **own** pull requests.
- All comments must be resolved.

# Pull Requests using VSCode

## Creating a branch

Creating a pull request requires a new branch off of the 'master' branch. The following steps describe how to create a new branch,

### Command line

1. Ensure you start on the master branch. Running the below command outputs all active branches and puts a `*` next to the one you're currently working on,
    ```sh
    > git branch
    * master
    ```
   - If using bash, the following command returns the name of the current working branch,
        ```sh
        > git branch | grep \* | cut -d ' ' -f2
        master
        ```
1. Create a new branch, substitute {branchName} for the desired name of the new branch,
    ```sh
    > git checkout -b {branchName}
    ```
1. After the branch is created, that branch automatically becomes the working branch.

### VSCode

1. Open the iModelJs repository in VSCode. You can see the active branch is master
2. To create a new branch, click on that branch button in the bottom left.  This will bring up the branch selection menu.
3. Click “+ Create new branch”, then enter a name for your branch at the prompt.
4. Enter a reasonable name for your new branch.
5. Once the branch has been created, you can see that the active branch has changed, and you're now working on your new branch.


## Committing changes to a new branch

Once you are finished making your changes and you're ready to commit, the following steps below walk you through the commit and publishing process.

### Command line

1. Use `git status` or `git diff` to view modified files and the diff of those files, respectively.
2. Before the local changes can be committed they need to be staged.
    - To stage all files that have changed run,
        ```sh
        > git add .
        ```
3. After committing the changes, follow the normal steps for contributing to iModelJs, located in the [README](https://dev.azure.com/bentleycs/_git/Plant%20Design) .under the "Source Code Edit Workflow" header.
4. Once you are ready, you can publish the branch by,
    ```sh
    > git push --set-upstream origin {branch name}
    ```
     - To avoid having to type the entire command above, run `git push` and git will suggest the above command, so just copy and paste the command.

### VSCode

1. The modified files, plus a diff view
2. Before the local changes can be committed they need to be staged. In order to stage a modified file, click the `+` next to each file to be committed. When all files to be committed are staged, add a commit message and click the checkmark icon.
3. After committing the changes, follow the normal steps for contributing to iModelJs, located in the [README](https://dev.azure.com/bentleycs/_git/Plant%20Design) ,under the "Source Code Edit Workflow" header.
4. Once you are ready, you can publish branch by clicking the button pointed to in the image. Click on more button and select option of publish branch.

When the branch has been successfully publish, you can go to VSTS and the new branch that was just pushed will now be in the list of branches.

## Opening a pull request

When you are ready to stage the commits on your branch to be merged into the master branch, a pull request needs to be created. Follow the steps to create a new pull request:

1. There are two ways to create a pull request within VSTS,
  a) If the branch is newly created, in the "Files" view there will be a ribbon at the top asking if you would like to create a pull request with your branch. Click on the create pull request link.
  b) Go to the branches tab, and click on "Create a new pull request".
2. After click on pull request, it will shows many options e.g pull request title, detailed description and reviewers can be set. Once options are set then click on create and pull request will start. 
3. Pull request has been created after clicking the create button
4. Files that are modified in created pull request can be viewable
5. Reviewer can add comments and after that author can respond to those comments

## Complete pull request and merge branch into master

Before completing a pull request make sure to follow the guidelines for contributing, defined in the iModelJs [README](https://dev.azure.com/bentleycs/_git/Plant%20Design) After successfully completing them, and passing all [requirements](#pull-request-policies) of the pull request, you can now merge the branch into master,

1. Click the "Complete" button in the Pull Request view.
2. A modal dialog pops up with a few questions about how you would like to merge the pull request
    -  The top text box will be the commit message of the merge commit (or the commit message itself, more on this later)
    -  The second, larger, text box is for a more detailed description of the changes. The text that is placed here will be added after the first text box value.
    - The "Complete linked work items after merging", will complete any VSTS items that were added either via the Pull Request view or through commit messages.
    - "Delete {your branch} after merging"
        - Recommended to always use.
    - If the "Squash changes when merging" option is checked, all commits in the pull request branch will be combined into a single commit, with the commit message from the above text boxes, when it is merged into master.
        - Recommended when you do not care about the history within the pull request being mirrored in the master branch.
        - Using this option will prevent a "Merge" commit in master.

3. After completion of pull request and changes merged to master the given below image will show.


# FAQ

### What happens if I commit on the wrong branch?

If you accidentally commit to either the master branch, or any other branch, there are several ways to resolve the issue.

If you have only have a single commit that needs to be moved,
- The easiest way to fix the issue is by stripping the last commit and moving it to a the new branch.
    - Undo the last commit, and put it back into your working stage,
        - From VSCode, the 
        - From the command line, run `git reset --soft HEAD~1`.
    - Switch branches from the [VSCode UI](https://code.visualstudio.com/docs/editor/versioncontrol#_branches-and-tags), or run a `git checkout {newBranch}`.

If you have more than one commit commit that needs to be moved follow these instructions provided on [StackOverflow](https://stackoverflow.com/questions/1628563/move-the-most-recent-commits-to-a-new-branch-with-git).

### What if I have merge conflicts in my pull request?

WIP
