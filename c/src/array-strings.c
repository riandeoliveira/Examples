#include <stdio.h>
#include <string.h>

int main() {
    char cars[][10] = {"Mustang", "Corvette", "Camaro"};
    int carsLength = sizeof(cars) / sizeof(cars[0]);

    strcpy(cars[0], "Tesla"); // {"Tesla", "Corvette", "Camaro"}

    for (int i = 0; i < carsLength; i++) {
        int carIndex = i + 1;

        printf("%d. %s\n", carIndex, cars[i]);
    }

    // 1. Tesla
    // 2. Corvette
    // 3. Camaro

    return 0;
}
