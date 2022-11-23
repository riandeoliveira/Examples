<?php

$current_hour = date('H');

// if / else / else if
if ($current_hour < 12) {
  echo 'Good Morning!';
} else if ($current_hour < 17) {
  echo 'Good Afternoon!';
} else {
  echo 'Good Evening!';
}

$favorite_color = 'blue';

// switch case
switch ($favorite_color) {
  case 'red':
    echo 'Your favorite color is red';
    break;
  case 'blue':
    echo 'Your favorite color is blue';
    break;
  case 'yellow':
    echo 'Your favorite color is yellow';
    break;
  case 'green':
    echo 'Your favorite color is green';
    break;
  default:
    echo 'Your favorite color is not red, blue, yellow or green.';
}
