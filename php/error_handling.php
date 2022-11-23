<?php

function inverse($value) {
  if (!$value) {
    throw new Exception('Division by zero');
  }

  return 1 / $value;
}

try {
  echo inverse(5); // 0.2
  echo inverse(0); // Caught Exception
} catch (Exception $error) {
  echo 'Caught Exception', $error->getMessage(), ' '; // Division by zero
} finally {
  echo 'End of the error handling';
}
