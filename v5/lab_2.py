smallest = highest = current = None

print('Enter integers. Write a negative number for finishing input')

while (current is None) or (current > 0):
    current = int(input('> '))

    if current < 0:
        break

    if (smallest is None) or (smallest > current):
        smallest = current

    if (highest is None) or (highest < current):
        highest = current

amount = smallest + highest

print(amount)
