#!/bin/bash

function compile_c_file() {
    C_FILE=$1

    gcc -o example $C_FILE
}

function run_exe_file() {
    EXE_FILE=$1

    $EXE_FILE
}

function init() {
    compile_c_file $1
    run_exe_file $2
}

init "./src/calculator.c" "./example.exe"
