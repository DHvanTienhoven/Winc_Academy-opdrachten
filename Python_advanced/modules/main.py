# Do not modify these lines
__winc_id__ = '78029e0e504a49e5b16482a7a23af58c'
__human_name__ = 'modules'

# Add your code after this line


import this
import time
import math
import datetime
import sys
from greet import super_greeter


def wait(seconds):
    time.sleep(seconds)
    return None


def my_sin(num):
    return math.sin(num)


def iso_now():
    return datetime.datetime.now().isoformat("T", "minutes")


def platform():
    return sys.platform


def supergreeting_wrapper(name):
    return super_greeter(name)
