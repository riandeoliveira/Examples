#!/bin/bash

COUNT=1

# While loop
while [ $COUNT -le 5 ]
do
  echo $COUNT # 1, 2, 3, 4, 5

  COUNT=$(($COUNT + 1))
done

# For loop
NAMES="Brad Kevin Alice Mark"

for NAME in $NAMES
  do
    echo $NAME # Brad, Kevin, Alice, Mark
done
