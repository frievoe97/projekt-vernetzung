import csv
import yaml

# Pfad zur CSV-Datei
csv_datei = 'updates.csv'

# Pfad zur YAML-Datei
yaml_datei = '../data/pages/interviews_v3.yaml'

# Funktion zur Umwandlung in CamelCase
def to_camel_case(text):
    words = text.split()
    return ''.join(word.capitalize() for word in words)

# Liste, um die Daten aus der CSV-Datei zu speichern
daten = []

# CSV-Datei einlesen
with open(csv_datei, 'r', encoding='utf-8') as csvfile:
    csv_reader = csv.DictReader(csvfile)
    for row in csv_reader:
        # Bereinigung der Zeilenumbrüche innerhalb der Zellen
        for key, value in row.items():
            row[key] = value.replace('\\', '').replace('\n', ' ')
        
        # Spaltennamen in CamelCase umwandeln und Schlüssel ohne Anführungszeichen speichern
        bereinigte_row = {to_camel_case(key.strip()): value.strip() for key, value in row.items()}
        daten.append(bereinigte_row)

# Ein übergeordnetes Objekt erstellen und das Array hinzufügen
daten_objekt = {'interviews': daten}

# YAML-Datei schreiben
with open(yaml_datei, 'w', encoding='utf-8') as yamlfile:
    yaml.dump(daten_objekt, yamlfile, allow_unicode=True, default_style=None)

print(f'Daten wurden erfolgreich von {csv_datei} nach {yaml_datei} konvertiert.')
