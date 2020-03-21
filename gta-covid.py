import urllib3
from bs4 import BeautifulSoup
import json

with open('data.json') as inputfile:
    data = json.load(inputfile)
print("Read " + str(len(data)) + " cases from data.json")
    
gta_regions = ['Toronto', 'Peel', 'York', 'Durham', 'Halton']

try:
    page_url = 'https://api.ontario.ca/api/drupal/page%2F2019-novel-coronavirus?fields=body'
    http = urllib3.PoolManager()
    request = http.request('GET', page_url)
    if request.status == 200:
        html = BeautifulSoup(json.loads(request.data)["body"]["und"][0]["safe_value"], 'html.parser')
        tables = html.find_all("table")
        print(str(len(tables)) + " table(s) found.")
        for table in tables[1:]:
            cases = tables[1].find_all("tr")[1:]
            for case in cases:
                fields = case.find_all("td")
                if fields[2].get_text() in gta_regions:
                    data[fields[0].get_text()] = [f.get_text() for f in fields[1:]]
        with open('data.json', 'w') as outfile:
            print('Writting ' + str(len(data)) + ' cases to data.json')
            json.dump(data, outfile)
    else:
        print("GTA COVID Website Unavailable!")
except Exception as ex:
    print(str(ex))