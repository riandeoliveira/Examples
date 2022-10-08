person = {
    'name': 'John',
    'age': 20,
    'single': True
}

'name' in person  # True

list(person.keys())  # ['name', 'age', 'single']
list(person.values())  # ['John', 20, True]

person['name']  # John
