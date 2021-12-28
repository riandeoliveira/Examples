<?php

// Permite usar os códigos escritos de outro arquivo PHP.
include "functions.php";

countNumbers();

// Semelhante ao include, mas não continua com o programa se os códigos chamados retornarem um erro.
require "functions-2.php";

writeSomething();