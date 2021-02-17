def merged(a, b):
    last_used_a = last_used_b = 0
    result = []

    while (last_used_a != len(a)) and (last_used_b != len(b)):
        if last_used_a == len(a):
            for i in range(last_used_a, len(a)):
                result.append(a[i])
            break
        elif last_used_b == len(b):
            for i in range(last_used_b, len(b)):
                result.append(b[i])
            break
        elif a[last_used_a] > b[last_used_b]:
            result.append(a[last_used_a])
            last_used_a += 1
        else:
            result.append(b[last_used_b])
            last_used_b += 1

    return result


a = [228, 69, 33, 11, 0]
b = [1337, 18, 1, -9, -1984]

print(merged(a, b))
