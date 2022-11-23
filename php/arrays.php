<?php

// Simple Array
$person_data = ['John Doe', 20, 1.80, true];

$person_data[0]; // 'John Doe'

// Associative Array
$person = [
  'name' => 'John Doe',
  'age' => 20,
  'height' => 1.80,
  'single' => true
];

$person['name']; // 'John Doe'

// Array Functions
$numbers = [1, 2, 3, 4];
$names = ['Rick', 'Jane', 'Michelle', 'Richard'];

array_combine($numbers, $names); // { '1': 'Rick', '2': 'Jane', '3': 'Michelle' '4': 'Richard' }
array_chunk($names, 2); // [ [ 'Rick', 'Jane' ], [ 'Michelle', 'Richard' ] ]
array_filter($numbers, fn ($number) => $number < 3); // [ 1, 2 ]
array_flip($names); // { 'Rick': 0, 'Jane': 1, 'Michelle': 2 'Richard': 3 }
array_keys($names); // [ 0, 1, 2, 3 ]
array_map(fn ($number) => $number * 5, $numbers); // [ 5, 10, 15, 25 ]
array_pop($names); // [ 'Rick', 'Jane', 'Michelle' ]
array_push($names, 'Nancy'); // [ 'Rick', 'Jane', 'Michelle', 'Richard', 'Nancy' ]
array_reduce($numbers, fn ($carry, $number) => $carry + $number); // 10
array_shift($names); // [ 'Jane', 'Michelle', 'Richard' ]
array_unshift($names, 'Joseph'); // [ 'Joseph', 'Rick', 'Jane', 'Michelle', 'Richard' ]
count($names); // 4
