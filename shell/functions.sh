#!/bin/bash

function say_hello() {
  echo "Hello, World!"
}

say_hello

function greet() {
  echo "Hello! My name is $1 and I am $2 years old."
}

greet "John" 20

function sum() {
  echo "The sum between $1 and $2 is $(($1 + $2))!"
}

sum 5 8
