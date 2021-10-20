__winc_id__ = '25a8041d2d5e4e3ab61ab1be43bfb863'
__human_name__ = 'dictionaries'

from datetime import date

def check_date_format(date_of_birth):
    date.fromisoformat(date_of_birth)

def create_passport(name: str, date_of_birth: str, place_of_birth: str, height: float, nationality: str):
    try:
        check_date_format(date_of_birth)
        passport = {
            'name': name,
            'date of birth': date_of_birth,
            'place of birth': place_of_birth,
            'height': height,
            'nationality': nationality
        }
        return passport
    except: 
        print('The date of birth is not provided in the right format, please provide it as YYYY-MM-DD')
        pass

my_passport = create_passport(10, '1986-09-13', 'Amsterdam', 1.82, 'Dutch')

print(my_passport)