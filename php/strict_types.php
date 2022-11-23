<?php

declare(strict_types=1);

interface IPerson {
    public function speak(string $message): void;
}

class Person implements IPerson {
    public string $name;
    public int $age;
    public bool $single;

    public function __construct(string $name, int $age, bool $single) {
        $this->name = $name;
        $this->age = $age;
        $this->single = $single;
    }

    public function speak(string $message): void {
        echo $message;
    }
}

$person = new Person('John Doe', 20.5, true); // Expected type 'int'. Found 'float'.
$person->speak(5); // Expected type 'string'. Found 'int'.
