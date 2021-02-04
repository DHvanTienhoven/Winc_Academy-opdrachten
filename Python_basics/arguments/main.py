# Do not modify these lines
__winc_id__ = '7b9401ad7f544be2a23321292dd61cb6'
__human_name__ = 'arguments'

# Add your code after this line


def greet(name, greeting_template='Hello, <name>!'):
    return greeting_template.replace('<name>', name)


def force(mass, body='earth'):
    if body == 'earth':
        return mass * 9.8
    if body == 'sun':
        return mass * 274
    if body == 'jupiter':
        return mass * 24.9
    if body == 'neptune':
        return mass * 11.2
    if body == 'saturn':
        return mass * 10.4
    if body == 'uranus':
        return mass * 8.9
    if body == 'venus':
        return mass * 8.9
    if body == 'mars':
        return mass * 3.7
    if body == 'mercury':
        return mass * 3.7
    if body == 'moon':
        return mass * 1.6
    if body == 'pluto':
        return mass * 0.6


def pull(m1, m2, d):
    G = 6.674*10**-11
    return G*((m1*m2)/d**2)
