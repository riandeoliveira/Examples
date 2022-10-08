name = 'John Doe'
single = False
pythonist = True

if name == 'John Doe':
    print('Hi, John!')

else:
    print('Who are you?')

if single and pythonist:
    print('You are single, but at least you know python!')

elif single or pythonist:
    print('You are single or knows python!')

if not single:
    print('Nice, you have a girlfriend!')
