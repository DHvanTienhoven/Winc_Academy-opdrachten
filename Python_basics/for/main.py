from helpers import get_countries


""" Leave this untouched. Wincpy uses it to match this assignment with the
tests it runs. """
__winc_id__ = 'c545bc87620d4ced81cbddb8a90b4a51'
__human_name__ = 'for'

def shortest_names(countries_list):
    list_of_len =[]
    for i in countries_list:
        list_of_len.append(len(i))
    len_of_shortest = min(list_of_len)
    shortest_country_list =[]
    for i in countries_list:
        if len(i)==len_of_shortest:
            shortest_country_list.append(i)
    return shortest_country_list

def count_vowels(string):
    count = 0
    for i in string:
        if(i=="a" or i == "e" or i == "i" or i == "o" or i == "u"):
            count += 1
    return count

top_three = []

def most_vowels(countries_list):
    vowel_count_countries = []
    for i in countries_list:
        vowel_count_countries.append(count_vowels(i))
    highest_count = max(vowel_count_countries)
    new_countries = countries_list.copy()
    for i in countries_list:
        if (count_vowels(i)==highest_count):
            top_three.append(i)
            new_countries.remove(i)
    if(len(top_three) < 3):
        return most_vowels(new_countries)
    if(len(top_three) >3):
        return top_three[0:3]
    else:
        return top_three

def vowel_count_list(countries_list):
    result = []
    for i in countries_list:
        result.append(count_vowels(i))
    result.sort()
    return result

print(vowel_count_list(get_countries()))
print(most_vowels(get_countries()))
print(count_vowels(most_vowels(get_countries())[0]))
print(count_vowels(most_vowels(get_countries())[1]))
print(count_vowels(most_vowels(get_countries())[2]))

def count_unique_characters(string):
    s = set(string.lower().replace(' ', ''))
    return len(s)

result = []

def alphabet_set(countries_list):
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    unique_count_list = []
    for i in countries_list:
        unique_count_list.append(count_unique_characters(i))
    max_unique = max(unique_count_list)
    for i in countries_list:
        if count_unique_characters(i) == max_unique:
            result.append(i)
    for i in result:
        s = set(i.lower())
        for char in s:
            if char in alphabet:
                alphabet.remove(char)
    new_countries = []
    for char in alphabet:
        for i in countries_list:
            if i.lower().find(char) != -1:
                new_countries.append(i)
    unique_result = list(set(result))
    if len(alphabet) > 0:
        return alphabet_set(new_countries)
    else:
        return unique_result

print(alphabet_set(get_countries()))


# This block is only run if this file is the entrypoint; python main.py
# It is not run if it is imported as a module: `from main import *`
if __name__ == '__main__':
    countries = get_countries()


