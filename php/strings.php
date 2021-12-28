<?php

// Funções para manipulação de strings.

// Imprime algo na tela já com formatação.

$product = "leite";
$price = 4.5;

printf("O %s está custando R$ %.2f", $product, $price);

echo "<br><br>";

// Exibe um array de forma mais legível. Útil para testes.

$x[0] = 4;
$x[1] = 8;
$x[2] = 3;

var_dump($x);

echo "<br><br>";

// Retorna o tamanho de uma string.

$text = "Curso em Vídeo";

$size = strlen($text);

echo $size;

echo "<br><br>";

// Remove os espaços desnecessários do início e do final da string.

$name = "   José da Silva   ";

$formattedName = trim($name);

echo $formattedName;

echo "<br><br>";

// Retorna a quantidade de palavras dentro de uma string.

$phrase = "Eu vou estudar PHP!";

$countedWords = str_word_count($phrase, 0);

echo $countedWords;

echo "<br><br>";

// Retorna a letra do código passado.

$codeLetter1 = 82;

$letter1 = chr($codeLetter1);

echo "A letra de código $codeLetter1 é $letter1.";

echo "<br><br>";

// Retorna o código da letra passada.

$letter2 = "A";

$codeLetter2 = ord($letter2);

echo "O código da letra $letter2 é $codeLetter2.";

echo "<br><br>";

// Transforma todas as palavras em maiúsculas.

$words = "Meu nome é Rian Oliveira.";

$upperCase = strtoupper($words);

echo $upperCase;

echo "<br><br>";

// Transforma todas as palavras em minúsculas.

$lowerCase = strtolower($words);

echo $lowerCase;

echo "<br><br>";

// Inverte uma string.

$myName = "Rian Dias de Oliveira";

$reverse = strrev($myName);

echo $reverse;

echo "<br><br>";

// Retorna a posição de algo na string, conforme passado.

$position = strpos($myName, "n");

echo $position;

echo "<br><br>";

// Retorna quantas vezes algo apareceu em uma string.

$example = "Estou aprendendo PHP no Curso em Vídeo de PHP.";

$cont = substr_count($example, "PHP");

echo "PHP encontrado $cont vezes!";

echo "<br><br>";

// Pega uma parte determinada de uma string através de índices.

$sub = substr($example, 0, 5);

echo $sub;

echo "<br><br>";

// Repete uma string em número n de vezes.

$repeat = str_repeat("Oi", 10);

echo $repeat;

echo "<br><br>";

// Troca uma parte da string por outra.

$oldPhrase = "Gosto de estudar Matemática.";

$newPhrase = str_replace("Matemática", "PHP", $oldPhrase);

echo $newPhrase;