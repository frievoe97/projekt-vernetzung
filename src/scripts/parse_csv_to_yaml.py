import csv
import yaml

# Pfad zur CSV-Datei
csv_file = 'data.csv'

# Pfad zur YAML-Datei
yaml_file = 'data.yaml'

# Lesen der CSV-Datei und Konvertieren in ein Python-Dictionary
data = []
current_category = None

with open(csv_file, newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    header = next(reader)  # Die erste Zeile enthält die Spaltennamen
    for row in reader:
        if row[0]:  # Wenn die Kategorie-Zeile nicht leer ist
            current_category = {"Kategorie": row[0], "Name": []}
        elif current_category is not None and any(row[1:]):  # Wenn es Tags gibt
            tag = {"Name": row[1], "Tags": [header[col] for col, value in enumerate(row[2:]) if value == "x"]}
            current_category["Name"].append(tag)
        elif current_category is not None:  # Wenn die Tags abgeschlossen sind
            data.append(current_category)
            current_category = None

# Konvertieren des Python-Liste in YAML
with open(yaml_file, 'w', encoding='utf-8') as yamlfile:
    yaml.dump(data, yamlfile, default_flow_style=False, allow_unicode=True)

print(f'Die Daten wurden erfolgreich als {yaml_file} gespeichert.')
