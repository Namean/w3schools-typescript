import json
import subprocess as s
import sys
import os

# Specify the path to your JSON file
file_path = 'sections.json'

# Open and read the JSON file
with open(file_path, 'r') as file:
    data = json.load(file)

# Print the data
# print(data)


os.chdir('../notes')
for i in range(0, len(data)):
    s.run(['touch', f"{i}-{data[i]}"], shell=True)