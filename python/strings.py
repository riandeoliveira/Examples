message = "hello World! My name is John Doe."

message.capitalize()  # Hello world! my name is john doe.
message.casefold()  # hello world! my name is john doe.
message.center(50)  # _________hello World! My name is John Doe._________
message.count("e")  # 3
message.encode()  # b"hello World! My name is John Doe."
message.endswith(".")  # True
message.find("!")  # 11
message.index("!")  # 11
message.isalpha()  # False
message.isdecimal()  # False
message.isdigit()  # False
message.islower()  # False
message.isnumeric()  # False
message.isupper()  # False
message.lower()  # hello world! my name is john doe.
message.replace("Doe", "Parker")  # hello World! My name is John Parker.
message.rfind("e")  # 31
message.rindex("e")  # 31
message.split()  # ["hello", "World!", "My", "name", "is", "John", "Doe."]
message.startswith("h")  # True
message.strip()  # hello World! My name is John Doe.
message.upper()  # HELLO WORLD! MY NAME IS JOHN DOE.
