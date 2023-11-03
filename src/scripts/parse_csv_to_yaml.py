import csv
import yaml

# Name der CSV-Datei
csv_file = 'data.csv'

# Name der YAML-Datei
yaml_file = 'data.yaml'

# Öffne die CSV-Datei zum Lesen
with open(csv_file, 'r', newline='', encoding='utf-8') as csv_file:
    # Lese die CSV-Daten und entferne Zeilenumbrüche und leere Einträge
    csv_reader = csv.reader(csv_file)
    data = [list(map(lambda x: x.strip().replace('\n', ''), row)) for row in csv_reader if any(row)]

# Initialisiere die Kategorie-Variable
category = None

# Erstelle ein Dictionary aus den bereinigten CSV-Daten
result = {}
for row in data:
    if row[0]:
        category = row[0]
        print(category)
        result[category] = []
    elif category is not None and row[1]:
        kategorie_machtmissbrauch = [item.strip() for item in row[4].split('/')]
        entry = {
            'Vorname': row[1],
            'Nachname': row[2],
            'Branche': row[3],
            'Kategorie Machtmissbrauch': kategorie_machtmissbrauch,
            'Social Media-Präsenz': row[5],
            'Organisation / Projekt': row[6],
            'Publikationen': row[7],
            'Contacted': row[8],
            'Status': row[9]
        }
        # Filtere leere Werte aus dem Eintrag
        entry = {k: v for k, v in entry.items() if v}
        if entry:
            result[category].append(entry)

# Speichere das Dictionary in einer YAML-Datei
with open(yaml_file, 'w', encoding='utf-8') as yaml_file:
    yaml.dump(result, yaml_file, allow_unicode=True)

print(f'Die CSV-Datei wurde in {yaml_file} konvertiert und gespeichert.')
