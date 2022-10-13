#!/bin/bash

# While loop
COUNTER=1

while [ $COUNTER -le 5 ]; do
  echo $COUNTER # 1, 2, 3, 4, 5

  ((COUNTER++))
done

# For loop
NAMES="Brad Kevin Alice Mark"

for NAME in $NAMES; do
  echo $NAME # Brad, Kevin, Alice, Mark
done

# Until loop
INDEX=0

until [ $INDEX -gt 2 ]; do
  echo "Index: $INDEX" # Index: 0, Index: 1, Index: 2

  ((INDEX++))
done
