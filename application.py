import os
import ast
from flask import Flask, render_template, redirect, url_for, send_file, session, request, flash
from flask_script import Manager
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, SelectField, SelectMultipleField, validators
application = Flask(__name__)
application.config['SECRET_KEY'] = 'hard to guess string'

import StringIO

manager = Manager(application)
bootstrap = Bootstrap(application)
moment = Moment(application)


@application.route('/', methods=['GET'])
def heartbeat():

    return render_template('heartbeat.html')


@application.route('/testing', methods=['GET'])
def testing():

    return render_template('index.html')

@application.route('/<sector>')
def visualizer(sector):

    filename = 'audio/{}.mp3'.format(sector)

    return render_template('moneysounds.html', filename=filename)

if __name__ == '__main__':
    manager.run()

