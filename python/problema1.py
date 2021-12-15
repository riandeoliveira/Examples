# Escreva um programa que retorna o valor hora de um funcionário com base no seu salário mensal e horas trabalhadas por mês.

monthlySal = int(input("Qual é o seu salário mensal?"))
workedHours = int(input("Quantas horas você trabalha por mês?"))
hourlyWage = monthlySal / workedHours
print(hourlyWage)