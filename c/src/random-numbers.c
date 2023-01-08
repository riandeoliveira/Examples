#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0));

    int number_1 = (rand() % 10) + 1;
    int number_2 = (rand() % 10) + 1;
    int number_3 = (rand() % 10) + 1;

    printf("%d\n", number_1);
    printf("%d\n", number_2);
    printf("%d\n", number_3);

    return 0;
}
