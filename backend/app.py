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
        update_time = os.path.getmtime(app.config['CSVFILE'])
        update_time = datetime.fromtimestamp(update_time, tz=tz).strftime('%H:%M %B %d %Y')
        return {'confirm_cases': confirm, 'deceased_cases': deceased,
                'daily_different': more, 'latest_update': update_time}


api.add_resource(Index, '/')