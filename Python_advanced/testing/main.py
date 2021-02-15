def get_none():
    return None


def flatten_dict(dic):
    list = []
    values = dic.values()
    for value in values:
        list.append(value)
    return list


print(flatten_dict({'a':{'inner_a': 42, 'inner_b': 350}, 'b': 3.14}))
