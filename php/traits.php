<?php

trait Something {
    public static function do_something() {
        echo 'bla bla';
    }
}

class Person {
    use Something;
}

echo Person::do_something();
