# How git works

https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

1.  Files are either Untracked or Tracked
2.  use 'git add' to Staged (a staged file is ready to commit) Untracked files
3.  Tracked files that have just been committed are Unmodified
4.  After editing a Tracked file, it will automatically be moved to Modified
5.  In order to move a Modified file to Staged, use 'git add'

- 'git add is a multipurpose command
- you use it to begin tracking new files, to stage files, and to do other things like marking merge-conflicted files as resolved.
- It may be helpful to think of it more as “add precisely this content to the next commit”

6.  In order to get a Snapshot (which is done throught a Commit) it needs to be Staged first

- You can have the same file Staged and not Staged. When you Commit, it will commit the version that was staged (aka the one that was 'git add')

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

# Contributing

1.  Go to CONTRIBUTING.md (if it exists);
2.  Open an issue (with title and comments) and submit. Maintainer will get an email.

# Flow

1. Branch
2. Add (stage changes) / Commit
3. Open pull request
4.
