def shorter(lines):
    found = None

    for line in lines:
        if (found is None) or (len(line) < len(found)):
            found = line

    return found


def main():
    in_filename = 'input_lab_7.txt'
    out_filename = 'output_lab_7.txt'

    in_file = open(in_filename, encoding='utf-8', mode='r')
    out_file = open(out_filename, encoding='utf-8', mode='w')

    lines = in_file.readlines()
    shorter_line = shorter(lines)

    out_file.write(shorter_line)
    out_file.writelines([lines[- 1 - i] for i in range(len(lines))])
    out_file.write(shorter_line)

    in_file.close()
    out_file.close()


main()