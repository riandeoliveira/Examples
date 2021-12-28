<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays</title>
</head>

<body>
    <pre>
        <?php

        // Arrays e funções para manipulá-los.

        // Declaração de um array.
        $defaultArray = array(3, 5, 8, 2);

        $defaultArray[] = 7;

        print_r($defaultArray);

        echo "<br><br>";

        // Cria um array especificando o seu primeiro e último valor e seus passos.
        $rangeArray = range(4, 30, 2);

        print_r($rangeArray);

        echo "<br><br>";

        // Retorna a quantidade de elementos de um array.

        $count = count($defaultArray);

        echo $count;

        echo "<br><br>";

        // Adiciona um elemento no final do array.

        array_push($defaultArray, 14);

        print_r($defaultArray);

        echo "<br><br>";

        // Remove um elemento no final do array.

        array_pop($defaultArray);

        print_r($defaultArray);

        echo "<br><br>";

        // Adiciona um elemento no início do array.

        array_unshift($defaultArray, 1);

        print_r($defaultArray);

        echo "<br><br>";

        // Remove um elemento no início do array.

        array_shift($defaultArray);

        print_r($defaultArray);

        echo "<br><br>";

        // Ordena os valores dentro do array em ordem crescente.

        sort($defaultArray);

        print_r($defaultArray);

        echo "<br><br>";

        // Ordena os valores dentro do array em ordem decrescente.

        rsort($defaultArray);

        print_r($defaultArray);

        ?>
    </pre>
</body>

</html>