#include <stdio.h>

int main() {
    double prices[6] = {5.00, 10.00, 15.00, 25.00, 20.00, 30.00};
    int arrayLength = sizeof(prices) / sizeof(prices[0]);

    printf("$%.2lf", prices[2]); // $15.00

    for (int i = 0; i < arrayLength; i++) {
        printf("\n$%.2lf", prices[i]);
    }

    return 0;
}
