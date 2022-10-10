const { text, files, tags } = require("./data");

// Find all occurrences
const regex1 = /João/g;
regex1.test(text); // true

// Find all occurrences both uppercase and lowercase
const regex2 = /João/gi;
regex2.test(text); // true

// Find a group of strings, with optional names
const regex3 = /(Maria|João|Luiz)(, hoje sua esposa)/;
regex3.test(text); // true

// Returns all occurrences
const regex4 = /João|Maria/gi;
text.match(regex4); // ["João", "Maria", "joão", "Maria", "Maria"]

// Returns (1) or (n) results
const regex5 = /Jo+ão+/gi;
text.match(regex5); // ["João", "joão", "Joooooooooãoooooo"]

// Returns all files ending with jpg or jpeg extensions
const regex6 = /\.(jpg|jpeg)/gi;
files.map((file) => file.match(regex6)); // [".jpg"][".jpeg"][".jpg"][".JPG"][".JPEG"];

// The letter (e) is optional, it may or may not appear
const regex7 = /\.(jpe?g)/gi;
files.map((file) => file.match(regex7)); // [".jpg"][".jpeg"][".jpg"][".JPG"][".JPEG"];

// { min, max } -> range
const regex8 = /Jo{0,10}ão+/gi;
text.match(regex8); // ["João", "joão", "Joooooooooãoooooo"]

// Validate a HTML tag
const regex9 = /<.+?>.+?<\/.+?>/g;
tags.match(regex9); // ["<p>Olá mundo</p>", "<p>Olá de novo</p>"]
