#include <stdio.h>

void printAge(int *pAge) {
    printf("You are %d years old!\n", *pAge);
}

int main() {
    int age = 21;
    int *pAge = &age;

    printf("Address of age: %p\n", &age);
    printf("Value of pAge: %p\n", pAge);

    printf("Value of age: %d\n", age);
    printf("Value at stored address: %d\n", *pAge);

    printAge(pAge);

    return 0;
}
