<?php

// Simple Function
function sum($value_x, $value_y) {
  return $value_x + $value_y;
}

echo sum(3, 7); // 10

// Anonymous Function
$subtract = function($value_x, $value_y) {
  return $value_x - $value_y;
};

echo $subtract(8, 3); // 5

// Arrow Function
$multiply = fn($value_x, $value_y) => $value_x * $value_y;

echo $multiply(5, 5); // 25
