#include <stdio.h>

void array_sort(int array[], int array_size) {
    for (int i = 0; i < array_size - 1; i++) {
        for (int j = 0; j < array_size - 1; j++) {
            if (array[j] > array[j + 1]) {
                int temp = array[j];

                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

void print_array(int array[], int array_size) {

    for (int i = 0; i < array_size; i++) {
        printf("%d ", array[i]);
    }
}

int main() {
    int random_numbers[] = {9, 1, 8, 2, 7, 3, 6, 4, 5};
    int array_size = sizeof(random_numbers) / sizeof(random_numbers[0]);

    printf("\nOld array:\n");
    print_array(random_numbers, array_size);
    printf("\n");

    array_sort(random_numbers, array_size);

    printf("\nSorted array:\n");
    print_array(random_numbers, array_size);
    printf("\n");

    return 0;
}
