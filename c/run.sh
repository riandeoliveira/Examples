#!/bin/bash

C_FILE_NAME="string-functions.c"
C_FILE_PATH="$(find -iname $C_FILE_NAME)"
EXE_FILE_PATH="./c/example"

gcc -o $EXE_FILE_PATH $C_FILE_PATH

$EXE_FILE_PATH
