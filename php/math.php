<?php

$valueX = 5;
$valueY = 2;

// Retorna o valor absoluto.
echo abs($valueX) . "<br><br>";

// Retorna a potência.
echo pow($valueX, $valueY) . "<br><br>";

// Retorna a raiz quadrada.
echo sqrt($valueX) . "<br><br>";

// Arredonda para cima ou para baixo, de acordo com o número.
echo round($valueX) . "<br><br>";

// Arredonda para BAIXO.
echo floor($valueX) . "<br><br>";

// Arredonda para CIMA.
echo ceil($valueX) . "<br><br>";

// Retorna a parte inteira.
echo intval($valueX) . "<br><br>";

// Formata o número.
echo number_format($valueX, 2, ",", ".") . "<br><br>";