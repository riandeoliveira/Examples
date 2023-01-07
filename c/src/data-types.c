#include <stdbool.h>

int main() {
    // single character
    char sex = 'M'; // %c

    // array of characters
    char name[] = "John Doe"; // %s

    // 1 byte (-128 to +127)
    char counter = 64; // %d or %c

    // 1 byte (0 to +255)
    unsigned char age = 21; // %d or %c

    // 2 bytes (-32,768 to +32,767)
    short int random = -14721; // %d

    // 2 bytes (0 to +65,535)
    unsigned short int civilizationAge = 6000; // %d

    // 4 bytes (-2,147,483,648 to +2,147,483,647)
    int lifeAge = 1946275192; // %d

    // 4 bytes (0 to +4,294,967,295)
    unsigned int planetAge = 4164793850; // %u

    // 8 bytes (-9 quintillion to + 9 quintillion)
    long long int bigNegativeRandom = -9223372036854775807; // %lld

    // 8 bytes (0 to +18 quintillion)
    unsigned long long int bigPositiveRandom = 18446744073709551615U; // %llu

    // 4 bytes (32 bits of precision) 6 - 7 digits
    float pi = 3.141592; // %f

    // 8 bytes (64 bits of precision) 15 - 16 digits
    double longPi = 3.141592653589793; // %lf

    // 1 byte (true or false)
    bool single = true; // %d

    return 0;
}
