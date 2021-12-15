# Estruturas Condicionais


'''
E aí Rian, bora ir no cinema hoje?
Se eu terminar meu trabalho aqui, eu consigo.
'''

workDone = True
if workDone == True:
    print("Opa! Bora um cineminha então.")
else:
    print("Bah cara, não vou poder sair hoje.")

'''
Ei, você consegue me ajudar a mover essas caixas lá pra fora hoje a tarde?
Se eu estiver livre, sim. Mas se não der pede pro meu amigo te ajudar.
'''

imFree = False
if imFree == True:
    print("Tranquilo, eu te ajudo sim.")
else:
    print("Foi mal, não vai dar não. Pede pro meu amigo te ajudar.")

'''
Eu cheguei atrasado na aula, ainda posso entrar?
Se essa não for sua terceira vez chegando atrasado então pode sim, caso contrário irá tomar uma suspensão.
'''

numberDelays = int(input("Quantas vezes você já chegou atrasado?"))
if numberDelays >= 3:
    print("Você está suspenso!")
elif numberDelays == 1:
    print("Pode entrar, mas se você se atrasar mais duas vezes será suspenso.")
elif numberDelays == 2:
    print("Pode entrar, mas na próxima você será suspenso!")
else:
    print("Pode entrar.")
