# Crie um programa que recebe um número e imprime o fatorial desse número.


number = int(input("Insira um número e eu direi o fatorial dele: "))

if number > 0:
    factorial = 1
    for item in range(1, number + 1):
        factorial = factorial * item
    print(factorial)
else:
    print("Por favor, insira um número positivo.")