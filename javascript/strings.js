const words = "Hello World! My name is Rick Parker.";

words.charAt(6); // "W"
words.endsWith("."); // true
words.includes("Parker"); // true
words.indexOf("W"); // 6
words.repeat(2); // "Hello World! My name is Rick Parker.Hello World! My name is Rick Parker."
words.replace("World", "People"); // "Hello People! My name is Rick Parker."
words.slice(13); // "My name is Rick Parker."
words.split(" "); // ["Hello", "World!", "My", "name", "is", "Rick", "Parker."]
words.startsWith("H"); // true
words.toLowerCase(); // "hello world! my name is rick parker".
words.toUpperCase(); // "HELLO WORLD! MY NAME IS RICK PARKER."
words.trim(); // "Hello World! My name is Rick Parker."
