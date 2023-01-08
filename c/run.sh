#!/bin/bash

BASH_FILE_NAME="run.sh"
EXE_FILE_NAME="example.exe"
C_FILE_NAME="pointers.c"

BASH_SRC_DIR="$(find -iname $BASH_FILE_NAME -printf '%h\n')"

EXE_FILE_PATH="$BASH_SRC_DIR/$EXE_FILE_NAME"
C_FILE_PATH="$(find -iname $C_FILE_NAME)"

gcc -o $EXE_FILE_PATH $C_FILE_PATH

$EXE_FILE_PATH
