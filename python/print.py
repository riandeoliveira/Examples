person = {
    "name": "John Doe",
    "age": 20,
    "single": True
}


def check_relationship(relationship):
    if relationship:
        return "have a girlfriend"
    else:
        return "don't have a girlfriend"


print("Name:", person["name"])  # Name: John Doe
print("Age:", person["age"])  # Age: 20
print("Single:", person["single"])  # Single: True


print(
    f'\nHello, {person["name"]}, you are {person["age"]} years old and {check_relationship(person["single"])}!'
)
