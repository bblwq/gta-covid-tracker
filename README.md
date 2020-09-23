# [GTA COVID-19 Tracker](https://gtacovid19.ca)

## About

This project is developed by University of Toronto Faculty of Information and University of Toronto Faculty of Applied Science and Engineering graduate students.

The website was mainly develop with [Flask](https://flask.palletsprojects.com/en/1.1.x/) and [Caddy](https://caddyserver.com), and hosting on [Centos7](https://www.centos.org) on [Google Cloud Platform](https://cloud.google.com).

Data is scraping daily from Durham, Halton, Peel, Toronto, and York regions government website using [RStudio](https://rstudio.com).

[Tableau](https://www.tableau.com) is using for data visulation.

## Deploy Environment

The backend Flask app needs the path of csv which store covid19 data to run, for esay furthur development, we place the path into the setting.py and export it as global environment 'SETTING' on the GCP CentOS instance.

```python
export SETTING = /path/to/config/file
```

Currently the setting.py only contain the path of covid19 dataset, it looks like this:

```python
CSVFILE = "/path/to/csv/file.csv"
```

## Update History

#### v2.1

- Implement Falsk RESTful
- Separate frontend and backend
- Provides an [api](https://gtacovid19.ca/api) for frontend HTML use and future development

#### v2.0

- Rebuild the site with Flask

#### v1.0

- Initial release! Check timly covid-19 situation in the great toronto area.
- Use Tableau for data visulization

## Vistor Count

Stats: http://statcounter.com/p12226816/summary/?guest=1