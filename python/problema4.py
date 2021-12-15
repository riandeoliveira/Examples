# Dados uma coleção de dados "idades" [15, 46, 75, 34, 23], imprima na tela a soma de todos estes valores.

ages = [15, 46, 75, 34, 23] # Indíces: 0, 1, 2, 3, 4.
totalSum = 0
for age in ages:
    totalSum = totalSum + age
print(totalSum)