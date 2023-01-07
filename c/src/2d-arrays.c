#include <stdio.h>

int main() {
    char ticTacToeTable[3][3] = {
        {'X', 'O', 'X'},
        {' ', 'O', 'X'},
        {'O', ' ', 'X'},
    };

    // X O X
    //   O X
    // O   X

    int gameRows = sizeof(ticTacToeTable) / sizeof(ticTacToeTable[0]);
    int gameColumns = sizeof(ticTacToeTable[0]) / sizeof(ticTacToeTable[0][0]);

    for (int i = 0; i < gameColumns; i++) {
        for (int j = 0; j < gameColumns; j++) {
            printf("%c ", ticTacToeTable[i][j]);
        }

        printf("\n");
    }

    int numbers[3][3];

    int numberRows = sizeof(numbers) / sizeof(numbers[0]);
    int numberColumns = sizeof(numbers[0]) / sizeof(numbers[0][0]);

    numbers[0][0] = 1;
    numbers[0][1] = 2;
    numbers[0][2] = 3;
    numbers[1][0] = 4;
    numbers[1][1] = 5;
    numbers[1][2] = 6;
    numbers[2][0] = 7;
    numbers[2][1] = 8;
    numbers[2][2] = 9;

    for (int i = 0; i < numberRows; i++) {
        for (int j = 0; j < numberColumns; j++) {
            printf("%d ", numbers[i][j]);
        }

        printf("\n");
    }

    // 1 2 3
    // 4 5 6
    // 7 8 9

    return 0;
}
