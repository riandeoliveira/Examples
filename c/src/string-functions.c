#include <stdio.h>
#include <string.h>

int main() {
    char firstName[] = "John";
    char lastName[] = "Doe";

    strcat(firstName, lastName); // JohnDoe
    strcmp(firstName, lastName); // 1 (false)
    strlen(firstName); // 4
    strlwr(firstName); // john
    strrev(firstName); // nhoJ
    strupr(firstName); // JOHN

    return 0;
}
