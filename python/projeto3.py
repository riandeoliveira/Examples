# Levando em consideração a velocidade máxima permitida de 80km em uma determinada rua. Crie um programa que recebe do usuário um valor que representa a velocidade e com base nessa velocidade diga se a pessoa tomou uma multa leve, grave ou gravíssima. Levando em consideração que se a pessoa estiver abaixo da velocidade máxima seu programa deve exibir: "não houve multa", caso esteja até 10km acima, deve exibir: "levou multa leve", caso esteja entre 11 a 20km acima da velocidade máxima, exibir: "levou multa grave", e caso esteja acima de 20km acima da velocidade máxima, exiba: "levou multa gravíssima".


speed = int(input("Que velocidade em km/h você está viajando agora? "))
print("Velocidade detectada:")
print(speed)

if speed < 80:
    print("Você não levou nenhuma multa, continue viajando abaixo de 80km/h.")
elif speed >= 80 and speed <= 90:
    print("Você recebeu uma multa leve por estar entre 80km/h e 90km/h. Mais cuidado da próxima vez!")
elif speed >= 90 and speed <= 100:
    print("Você recebeu uma multa grave por estar entre 90km/h e 100km/h. Seja mais atento!!")
elif speed > 100:
    print("Você recebeu uma multa gravíssima por estar acima de 100km/h. Levará muitos pontos na carteira!!!")