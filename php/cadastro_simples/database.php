<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados Recebidos</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "register";

    $connection = mysqli_connect($hostname, $username, $password, $database);

    if (!$connection) {
        die("Desculpe, nós não conseguimos conectar: " . mysqli_connect_error());
    }

    $full_name = isset($_GET["full-name"]) ? $_GET["full-name"] : null;
    $birth_date = isset($_GET["birth-date"]) ? $_GET["birth-date"] : null;
    $sex = isset($_GET["sex"]) ? $_GET["sex"] : null;
    $marital_status = isset($_GET["marital-status"]) ? $_GET["marital-status"] : null;
    $email = isset($_GET["email"]) ? $_GET["email"] : null;
    $password = isset($_GET["password"]) ? $_GET["password"] : null;

    $query = "INSERT INTO users VALUES (
        DEFAULT,
        '$full_name',
        '$birth_date',
        '$sex',
        '$marital_status',
        '$email',
        '$password'
    );";

    $exec = mysqli_query($connection, $query);

    echo "<h1>Dados recebidos pelo servidor com sucesso! Muito obrigado, tenha um Feliz Ano Novo ;)</h1>";

    ?>
</body>

</html>