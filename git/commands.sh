# adds a change in the working directory to the staging area
git add "file.txt" # git ad

#
git branch "" # git br

#
git checkout "" # git co

# creates a copy of a specific repository or branch within a repository
git clone "https://github.com/user/repo" "local-repo"


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

#
git diff

#
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

#
git merge

# updates the local version of a repository from a remote repository
git pull origin "main"

# transfer commits from the local repository to a remote repository
git push origin "main" # git po

#
git rebase

#
git reset

#
git restore

#
git revert

#
git rm

# displays the state of the working directory and the staging area
git status # git st

#
git tag

#
git worktree
