<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Action</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body>
    <?php
    $fullName = isset($_GET["full-name"]) ? $_GET["full-name"] : null;
    $birthDate = isset($_GET["birth-date"]) ? $_GET["birth-date"] : null;
    $sex = isset($_GET["sex"]) ? $_GET["sex"] : null;
    $maritalStatus = isset($_GET["marital-status"]) ? $_GET["marital-status"] : null;
    $email = isset($_GET["email"]) ? $_GET["email"] : null;
    $password = isset($_GET["password"]) ? $_GET["password"] : null;

    echo "<h1>Algumas informações sobre você...</h1>";

    echo "<p>Olá <strong>$fullName</strong>. Você é uma pessoa do sexo <strong>$sex</strong> que nasceu em <strong>$birthDate</strong>, é do estado civil <strong>$maritalStatus</strong>, seu e-mail é <strong>$email</strong> e a sua senha é <strong>$password</strong>. Muito obrigado pelos seus dados :)</p>";
    ?>
</body>

</html>