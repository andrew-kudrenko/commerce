print('Enter an array of integers')

duplicates = []
nums = [int(item) for item in input('> ').split()]

for i in range(0, len(nums), 2):
    if nums[i] not in duplicates:
        intersections = 0

        for j in range(i + 2, len(nums), 2):
            if nums[i] == nums[j]:
                intersections += 1

            if intersections > 2:
                duplicates.append(nums[i])
                break

ordered = [item for item in duplicates]

for i in range(len(ordered)):
    for j in range(len(ordered) - 1):
        if ordered[j] > ordered[j + 1]:
            ordered[j], ordered[j + 1] = ordered[j + 1], ordered[j]

print(ordered)
