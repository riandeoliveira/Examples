#include <stdio.h>
#include <math.h>

int main() {
    double a;
    double b;
    double c;

    printf("Enter side A: ");
    scanf("%lf", &a);

    printf("Enter side B: ");
    scanf("%lf", &b);

    c = sqrt(a*a + b*b);

    printf("Side C: %lf", c);

    return 0;
}
