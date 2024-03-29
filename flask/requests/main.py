__winc_id__ = 'cc1b724762854e85a8defa04287f708b'
__human_name__ = 'requests'
from flask import Flask
from markupsafe import escape
app = Flask(__name__)



@app.route('/')
def index():
    return '<p>Home, sweet home.</p>'

@app.route('/greet/')
def greet():
    return '<h1>Hello, world!</h1>'

@app.route('/greet/<example_name>')
def greet_user(example_name):
    return f'<h1>Hello, {example_name}!</h1>'

