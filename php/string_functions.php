<?php

$message = "Hello, World!";

str_replace("World", "Everyone", $message); // "Hello, Everyone!"
strlen($message); // 13
strpos($message, "l"); // 2
strrev($message); // "!dlroW ,olleH"
strrpos($message, "l"); // 10
strtolower($message); // "hello, world!"
strtoupper($message); // "HELLO, WORLD!"
substr($message, 0, 5); // "Hello"
ucwords($message); // "Hello, World!"
