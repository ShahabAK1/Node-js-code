print("Apply Multiple Math operations on")
First_value = input("1st NO --> ")
Second_value= input("2nd No --> ")
First_value=int(First_value)
Second_value=int(Second_value)
value = input("Enter Operation: ")
if value == '+':
    print(First_value+Second_value)
elif value == '-':
    print(First_value-Second_value)
elif value == '*':
    print(First_value*Second_value)
elif value == '/':
    print(First_value/Second_value)
else:
    print("Invalid operation")
