#include <stdio.h>

int main() {
    int age;
    char grade;

    printf("\nEnter your age: ");
    scanf(" %d", &age);

    // if | else | else if
    if (age >= 18) {
        printf("You are now signed up!");
    } else if (age == 0) {
        printf("You can't sign up! You were just born!");
    } else if (age < 0) {
        printf("You haven't been born yet!");
    } else {
        printf("You are too young to sign up!");
    }

    printf("\n\nEnter a letter grade: ");
    scanf(" %c", &grade);

    // switch case
    switch(grade) {
        case 'A':
            printf("Perfect!\n");
            break;

        case 'B':
            printf("You did good!\n");
            break;

        case 'C':
            printf("You did okay!\n");
            break;

        case 'D':
            printf("At least it's not an F!\n");
            break;

        case 'F':
            printf("YOU FAILED!\n");
            break;

        default:
            printf("Please enter only valid grades");
            break;
    }

    return 0;
}
