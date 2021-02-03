# Do not modify these lines
__winc_id__ = '6eb355e1a60f48a28a0bbbd0c88d9ab4'
__human_name__ = 'lists'

# Add your code after this line

def alphabetical_order(movie_list):
    return sorted(movie_list)

def won_golden_globe(movie_name):
    if(movie_name.lower().find('jaws') == -1 and
    movie_name.lower().find('star wars: episode iv') == -1 and
    movie_name.lower().find('extra-terrestrial') == -1 and
    movie_name.lower().find('memoirs of a geisha') == -1):
        return False
    else:
        return True

def remove_toto_albums(movie_list):
    if('Fahrenheit' in movie_list):
        movie_list.remove('Fahrenheit')
    if('The Seventh One' in movie_list):
        movie_list.remove('The Seventh One')
    if('Toto XX' in movie_list):
        movie_list.remove('Toto XX')
    if('Falling in Between' in movie_list):
        movie_list.remove('Falling in Between')
    if('35th Anniversary - Live in Poland' in movie_list):
        movie_list.remove('35th Anniversary - Live in Poland')
    if('Toto XIV' in movie_list):
        movie_list.remove('Toto XIV')
    if('Old Is New' in movie_list):
        movie_list.remove('Old Is New')
    if('40 Tours Around The Sun - Live in Holland' in movie_list):
        movie_list.remove('40 Tours Around The Sun - Live in Holland')
    return movie_list