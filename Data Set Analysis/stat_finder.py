import csv
import pprint as pp

with open('athlete_events.csv') as read_f:
    reader = csv.reader(read_f)
    events = list(reader)
    gold_per_year_dict = {}
    for row in events[15:]:
        if row[13] == "Bronze":
            if row[8] not in gold_per_year_dict:
                gold_per_year_dict[row[8]] = 1
            else:
                gold_per_year_dict[row[8]] += 1
        # if row[3] == 'NA':
        #     pass
        #     # index 3 is age
        # elif int(row[3]) == 97:
        #     print(row) 
        #     break
pp.pprint(gold_per_year_dict)
