#!/bin/bash

# return to the home directory
cd

# go up one level in the directory tree
cd ..

# go down one or more levels in the directory tree
cd coding/it-studies/bash

# clean the terminal screeen
clear

# copy files or directories
cp file.txt file_final.txt

# write to file instead of stdout
curl https://api.github.com/users/riandeoliveira -o data.json

# allows you to transfer data to or from a network server
curl https://example.com

# include protocol response headers in the output
curl https://example.com -i

# show document info only
curl https://example.com -I

# allows you to set or display the system date and time
date

# display a line of text that is passed in as an argument
echo Hello World

# used to exit a shell with a given status
exit

# get information from a specific file
file something.txt

# find files or directories
find . -type f -iname "*.jpg"

# get information regarding a built-in shell command
help

# displays the history of recently used commands
history

# displays the contents of a file
less file.txt

# list directories and files
ls

# list directories and files with more informations
ls -lha

# list directories and files with more informations in order of size
ls -lhaS

# create many new directories
mkdir -p my-dir/another-dir

# create a new directory
mkdir my-dir

# move one or more directories to another place
mv file.txt another-dir

# rename a file or directory
mv old-file.txt new-file.md

# report the absolute path of the current working directory
pwd

# remove a file or a directory
rm -r file.txt

# remove a file or directory without asking for permission
rm -rf large-dir

# allows you to suspend the calling process for a specified time
sleep

# start a program, command or batch script (opens in a new window)
start

# create one or more new files
touch new-file.txt

# identify and report the location of the provided executable
which python3

# displays the currently logged-in user
whoami
