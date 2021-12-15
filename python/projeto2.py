# Escreva um programa que, ao iniciar gera um valor aleatório de 1 a 10 e permite que o usuário chute um número até que o valor aleatório gerado no início do programa seja chutado corretamente.
# O programa deve informar se o chute foi acima, abaixo ou igual ao valor aleatório gerado no início do programa.


from random import randint
drawnNumber = randint(1, 10)
hit = False

while hit == False:
    chosenNumber = int(input("Chute um número de 1 a 10: "))
    if chosenNumber < 1 or chosenNumber > 10:
        print("Por favor, insira um número entre 1 e 10.")
    else:
        if chosenNumber > drawnNumber:
            print("O número gerado está abaixo do número chutado.")
        elif chosenNumber < drawnNumber:
            print("O número gerado está acima do número chutado.")
        else:
            print("O número chutado foi:")
            print(drawnNumber)
            print("Você acertou o chute!")
            hit = True