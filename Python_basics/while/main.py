from helpers import random_koala_fact

__winc_id__ = 'c0dc6e00dfac46aab88296601c32669f'
__human_name__ = 'while'

# This block is only executed if this script is run directly (python main.py)
# It is not run if you import this file as a module.
if __name__ == '__main__':
    print(random_koala_fact())

def unique_koala_facts(number):
    unique_facts = []
    extra_facts = []
    while len(unique_facts) < number:
        new_fact = random_koala_fact()
        if new_fact not in unique_facts:
            unique_facts.append(new_fact)
        if new_fact in unique_facts:
            extra_facts.append(new_fact)
        if len(extra_facts) > 120:
            return unique_facts
    return unique_facts

def num_joey_facts():
    koala_list = []
    count = 0
    while count <= 30:
        new_fact = random_koala_fact()
        if new_fact in koala_list:
            count += 1
            koala_list.append(new_fact)
        else:
            koala_list.append(new_fact)
    joey_facts = 0
    unique_koala_set = set(koala_list)
    for i in unique_koala_set:
        if i.lower().find('joey') != -1:
            joey_facts += 1
    return joey_facts

def koala_weight():
    new_fact = random_koala_fact()
    while new_fact.find('kg') == -1:
        new_fact = random_koala_fact()
    result = int(new_fact[new_fact.find('kg')-2:new_fact.find('kg')])
    return result

