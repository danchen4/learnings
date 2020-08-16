# Contributing to project

1. Fork

Creates new copy of repo under my Github account with URL:
https://github.com/<YourUserName>/demo

2. Clone

Make a copy onto my computer
git clone https://github.com/<YourUserName>/demo'

3. Branch & New Remote

Create a branch
git checkout -b new_branch

Create new remote for upstream repo (_upstream repo_ refers to original repo you created my fork from)
git remote add upstream https://github.com/kedark3/demo

4. Once i push to repo, the **Compare & Pull** request button will appear. After clicking will allow to **Create Pull Request**

# Git

Untracked Files -> Unstage changes -> Staged Changes (git add) -> Commits (git commit)

**Untracked Files** are files that have not been committed previously

**Unstaged Change** are files that have been previously committed, but have been changed

Bring things over to **staged changes** by command: git add

## Setting up Github

git remote add origin https://github.com/danchen4/weatherApp.git

Sets up channel of communication with github

**remote** A version of project hosted somewhere else
**add**
**origin** Name of remote (first remote should be origin)

git push -u origin master
**-u** to set the upstream (to origin)
push commits to remote name of origin to Master branch
