# Encontre o maior entre 2 números.

value1 = int(input("Insira o primeiro valor: "))
value2 = int(input("Insira o segundo valor: "))
if value1 > value2:
    print("O primeiro valor é maior!")
elif value1 == value2:
    print("Os valores são iguais!")
else:
    print("O segundo valor é maior!")