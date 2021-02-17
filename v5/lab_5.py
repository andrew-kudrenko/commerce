import numpy as np


def averaged(limits, size):
    matrix = np.random.randint(*limits, size)
    averaged_matrix = np.zeros((size[0] + 1, size[1] + 1))

    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            averaged_matrix[row][col] = matrix[row][col]

    np.mean(matrix, axis=0, out=averaged_matrix[-1][:-1:])

    for i, value in enumerate(np.mean(matrix, axis=1)):
        averaged_matrix[i][-1] = value

    return averaged_matrix


limits = (0, 10)
size = (4, 4)

matrix = averaged(limits, size)

print(f'Matrix with averages:\n{matrix}')

