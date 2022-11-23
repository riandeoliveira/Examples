<?php

// For Loop
for ($i = 0; $i < 10; $i++) {
  echo $i; // 0 1 2 3 4 5 6 7 8 9
}

// While Loop
$j = 0;

while ($j < 10) {
  echo $j; // 0 1 2 3 4 5 6 7 8 9

  $j++;
}

// Do While Loop
$k = 0;

do {
  echo $k; // 0 1 2 3 4 5 6 7 8 9

  $k++;
} while ($k < 10);

// Foreach Loop
$blog_posts = ['First Post', 'Second Post', 'Third Post'];

foreach ($blog_posts as $index => $post) {
  echo $index + 1 . '- ' . $post; // 1- First Post 2- Second Post 3- Third Post
}
