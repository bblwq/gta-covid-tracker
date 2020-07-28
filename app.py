from flask import Flask, render_template
import time
import os
import pandas as pd


app = Flask(__name__, static_url_path='/')
app.config.from_envvar('SETTING', silent=False)


@app.route('/')
def hello_world():
    data = pd.read_csv(app.config['CSVFILE'])
    confirm = int(data.loc[data.index[-1], "Sum.of.Cases"])
    deceased = int(data.loc[data.index[-1], "Sum.of.Death"])
    more = int(data.loc[data.index[-1], "Change"])
    mdtime = time.localtime(os.path.getmtime(app.config['CSVFILE']))
    mdtime = time.strftime('%H:%M %B %d %Y', mdtime)
    return render_template('index.html', confirm_case=confirm,
                           deceased_case=deceased, more_case=more,
                           update_time=mdtime)
