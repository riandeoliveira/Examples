#!/bin/bash

# adds a change in the working directory to the staging area
git add "file.txt" # git ad

# delete the specific branch
git branch -d "develop"

# rename the current branch
git branch -m "dev"

# create a new branch
git branch "develop"

# list all branches in the repository
git branch # git br

# navigate between branches created by git branch
git checkout "develop" # git co

# creates a copy of a specific repository or branch within a repository
git clone "https://github.com/user/repo" "local-repo"

# convenient way to modify the most recent commit
git commit --amend -m "refactor: update message"

# captures a snapshot of the project's currently staged changes
git commit -m "feat: initial commit" # git cm

# shows all Git config properties throughout all of the variously scoped git files
git config --list

# sets the default git text editor
git config core.editor "nano"

# change the email that is associated with your git commits
git config user.email "johndoe@email.com"

# change the password that is associated with your git commits
git config user.password "littlejohn12345"

# lists out the changes between your current working directory and your staging area
git diff

# initialize git flow in a repository
git flow init

# creates a new git repository
git init # git in

# displays all of the commits in a repository's history
git log

# display all commits with date filter
git log --after "2022-09-30" --before "2022-10-05"

# display all commits filtered by regular expressions
git log --grep="text"

# display the output as one commit per line
git log --oneline

# allows you to merge branches from Git
git merge "develop"

# updates the local version of a repository from a remote repository
git pull origin "main"

# transfer commits from the local repository to a remote repository
git push origin "main" # git po

# displays the remote repository url
git remote -v

# add a new remote
git remote add origin "https://github.com/user/repo"

# remove a remote
git remote rm origin "https://github.com/user/repo"

# remove files from staging area and bring back to working tree
git reset

# remove files from staging area and erase them forever
git reset --hard

# displays details about git objects such as blobs, trees, tags and commits
git show

# displays the state of the working directory and the staging area
git status # git st
