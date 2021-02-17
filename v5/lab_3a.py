print('Enter a line')
line = input('> ')

words = line.split()
unique_words = []

for word in words:
    unique = []
    has_repeats = False

    for letter in word:
        if letter in unique:
            has_repeats = True
            break

        unique.append(letter)

    if not has_repeats:
        unique_words.append(word)

print(' '.join(unique_words))

