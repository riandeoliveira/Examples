count = 1

while count <= 3:
    print(count)  # 1, 2, 3

    count += 1

for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for j in range(1, 9, 2):
    print(j)  # 1, 3, 5, 7

for k in "John":
    print(k)  # J, o, h, n

for l in ["apple", "banana", "cherry"]:
    print(l)  # apple, banana, cherry

for index, element in enumerate(["John", 20, True]):
    print(index, element)  # 0 John, 1 20, 2 True
