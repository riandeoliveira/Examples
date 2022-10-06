my_list = ["John", 20, True]

my_list.append("Doe")  # ["John", 20, True, "Doe"]
my_list.clear()  # None
my_list.copy()  # ["John", 20, True]
my_list.count(20)  # 1
my_list.extend([1, 2, 3])  # ["John", 20, True, 1, 2, 3]
my_list.index(True)  # 2
my_list.insert(1, "Doe")  # ["John", "Doe", 20, True]
my_list.pop(1)  # ["John", True]
my_list.remove(True)  # ["John", 20]
my_list.reverse()  # [True, 20, "John"]
