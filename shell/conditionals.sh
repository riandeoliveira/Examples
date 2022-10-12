#!/bin/bash

NAME="John"

# (if / else / elif) statements
if [ $NAME == "John" ]; then
  echo "Hi John!"
elif [ $NAME == "Jack" ]; then
  echo "Hi Jack!"
else
  echo "Who are you?"
fi

read -p "Are you 21 or over? Y/N " ANSWER

# This works like the switch case statement ↓
case $ANSWER in
  [yY] | [yY][eE][sS])
    echo "You can have a beer :)"
    ;;
  [nN] | [nN][oO])
    echo "Sorry, no drinking :("
    ;;
  *)
    echo "Please, enter y/yes or n/no :|"
    ;;
esac
