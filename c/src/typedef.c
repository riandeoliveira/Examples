#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[25];
    char password[20];
} User;

int main() {
    User user1 = {872346, "John", "littlejohn123"};
    User user2 = {296561, "Rick", "rickass"};

    printf("%d\n", user1.id);
    printf("%s\n", user1.name);
    printf("%s\n", user1.password);

    printf("\n");

    printf("%d\n", user2.id);
    printf("%s\n", user2.name);
    printf("%s\n", user2.password);

    return 0;
}
