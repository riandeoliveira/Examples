#include <stdio.h>
#include <string.h>

struct Student {
    char name[12];
    float gpa;
};

int main() {
    struct Student student_1 = {"SpongeBob", 3.0};
    struct Student student_2 = {"Patrick", 2.5};
    struct Student student_3 = {"Sandy", 4.0};
    struct Student student_4 = {"Squidward", 2.0};

    struct Student students[] = {student_1, student_2, student_3, student_4};

    int students_size = sizeof(students) / sizeof(students[0]);

    for (int i = 0; i < students_size; i++) {
        printf("%-12s\t", students[i].name);
        printf("%.2f\n", students[i].gpa);
    }

    return 0;
}
