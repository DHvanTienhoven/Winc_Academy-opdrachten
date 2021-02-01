# Do not modify these lines
__winc_id__ = '49bce82ef9cc475ca3146ee15b0259d0'
__human_name__ = 'functions'

# Add your code after this line

def greet(name):
    greeting = 'Hello, ' + name + '!'
    return greeting

print(greet('Bob'))

def add(a, b, c):
    answer = a + b + c
    return answer

print(add(5,3,2))

def scottish_greet(name, is_child):
    if(is_child):
        return f'Hello, wee {name}!'
    else: 
        return f'Hello, {name}!'

print(scottish_greet('Jamie', False))
print(scottish_greet('Jamie', True))

def positive(a):
    return a>0

print(positive(71))
print(positive(-2))
print(positive(0))

def negative(a):
    return a<0

print(negative(50))
print(negative(-50))
print(negative(0))

def sign(a):
    if(type(a) == int or type (a) ==float):
        if(positive(a)):
            return 1
        if(negative(a)):
            return -1
        else:
            return 0
    else:
        return 'This doesn\'t have a sign'

print(sign(50))
print(sign(-50))
print(sign(0))
print(sign('Bob'))

def nag(person, item, number):
    if(type(person) == str and type(item)== str and type(number)== int):
        return (person +'.' *number + 'Why can\'t I have a ' + item + '!? \n') * number
    else:
        return False

print(nag('Auntie', 'race car', 2))
print(nag('Mommy', 'cookie', 5))
print(nag(2, True, 'Mommy'))