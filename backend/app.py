from flask import Flask
from flask_restful import Resource, Api
from datetime import datetime
import os
import pytz
import pandas as pd


app = Flask(__name__)
api = Api(app)
app.config.from_envvar('SETTING', silent=False)


class Index(Resource):
    def get(self):
        data = pd.read_csv(app.config['CSVFILE'])
        confirm = int(data.loc[data.index[-1], "Sum.of.Cases"])
        deceased = int(data.loc[data.index[-1], "Sum.of.Death"])
        more = int(data.loc[data.index[-1], "Change"])
        tz = pytz.timezone('America/New_York')
        modify_time = os.path.getmtime(app.config['CSVFILE'])
        modify_time = datetime.fromtimestamp(modify_time, tz=tz).strftime('%H:%M %B %d %Y')
        return {'confirm_case': confirm, 'deceased_case': deceased, 'more_case': more, 'modify_time_case': modify_time}


api.add_resource(Index, '/')