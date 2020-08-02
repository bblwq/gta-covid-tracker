from flask import Flask, render_template
from datetime import datetime
import os
import pytz
import pandas as pd


app = Flask(__name__, static_url_path='/')
app.config.from_envvar('SETTING', silent=False)


@app.route('/')
def index():
    data = pd.read_csv(app.config['CSVFILE'])
    confirm = int(data.loc[data.index[-1], "Sum.of.Cases"])
    deceased = int(data.loc[data.index[-1], "Sum.of.Death"])
    more = int(data.loc[data.index[-1], "Change"])
    tz = pytz.timezone('America/New_York')
    modify_time = os.path.getmtime(app.config['CSVFILE'])
    modify_time = datetime.fromtimestamp(modify_time, tz=tz).strftime('%H:%M %B %d %Y')
    return render_template('index.html', confirm_case=confirm,
                           deceased_case=deceased, more_case=more,
                           update_time=modify_time)
