<?php

interface IUser {
    public function greetings();
}

interface IEmployee {
    public function get_title();
}

class User implements IUser {
    public $name;
    public $email;
    public $password;

    public function __construct($name, $email, $password) {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }

    public function greetings() {
        return 'Hello, World! My name is $this->name.';
    }
}

$user_1 = new User('John Doe', 'johndoe2000@email.com', 'littlejohn2876');

$user_1; // { 'name': 'John Doe', 'email': 'johndoe2000@email.com', 'password': 'littlejohn2876' }

$user_1->greetings(); // 'Hello, World! My name is John Doe.'

class Employee extends User implements IEmployee {
    public function __construct($name, $email, $password, $title) {
        parent::__construct($name, $email, $password);

        $this->title = $title;
    }

    public function get_title() {
        return $this->title;
    }
}

$employee_1 = new Employee('Rick Parker', 'rickparker2046@email.com', 'rickass', 'Developer');

$employee_1->get_title(); // 'Developer'
