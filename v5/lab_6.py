def get_map():
    return {
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять',
        10: 'десять',
        11: 'одиннадцать',
        12: 'двенадцать',
        13: 'тринадцать',
        14: 'четырнвдцать',
        15: 'пятнадцать',
        16: 'шестнадцать',
        17: 'семнадцать',
        18: 'восемнадцать',
        19: 'девятнадцать',
        20: 'двадцать',
        30: 'тридцать',
        40: 'сорок',
        50: 'пятьдесят',
        60: 'шестьдесят',
        70: 'семьдесят',
        80: 'восемьдесят',
        90: 'девяносто',
    }


def to_string(value):
    number_map = get_map()

    if value in number_map:
        return number_map[value]

    keys = list(number_map.keys())
    str_repr = ''

    for i, key in enumerate(keys):
        if value > key:
            if (i == len(keys) - 1 ) or (value < keys[i + 1]):
                str_repr = f'{number_map[key]} {number_map[int(str(value)[1])]}'

    return str_repr

#
# for i in range(1, 100):
#     print(f'{i}: {to_string(i)}')


print('Enter a number')
num = int(input("> "))
print(to_string(num))
