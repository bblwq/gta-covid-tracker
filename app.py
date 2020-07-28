from flask import Flask, render_template
from datetime import datetime, timedelta
import pandas as pd


app = Flask(__name__, static_url_path='/')
app.config.from_envvar('SETTING', silent=False)


@app.route('/')
def hello_world():
    data = pd.read_csv(app.config['CSVFILE'])
    confirm = int(data.loc[data.index[-1], "Sum.of.Cases"])
    deceased = int(data.loc[data.index[-1], "Sum.of.Death"])
    more = int(data.loc[data.index[-1], "Change"])
    time = datetime.now() - timedelta(hours=5)
    time = time.strftime('%H:%M %B %d %Y')
    return render_template('index.html', confirm_case=confirm,
                           deceased_case=deceased, more_case=more,
                           update_time=time)
