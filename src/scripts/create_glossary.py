import csv
import yaml

# Pfad zur CSV-Datei
csv_datei = 'glossary.csv'

# Initialisiere ein leeres Array, um die Daten zu speichern
glossary_data = []

# Öffne die CSV-Datei und lese sie ein
with open(csv_datei, newline='', encoding='utf-8') as csvfile:
    csv_reader = csv.reader(csvfile)
    header = next(csv_reader)  # Die erste Zeile enthält die Spaltenüberschriften
    for row in csv_reader:
        begriff = row[0].strip()  # Trimme den Begriff
        website_text = row[1].strip()  # Trimme den Website-Text
        website_verlinkung = row[2].strip()  # Trimme die Website-Verlinkung
        quellen = row[3].strip()  # Trimme die Quellen
        tags = [header[i].strip() for i in range(4, len(header)) if row[i] == 'x']  # Trimme die Tags
        
        # Erstelle einen Eintrag für den aktuellen Begriff
        eintrag = {
            'title': begriff,
            'text': website_text,
            'link': website_verlinkung,
            'source': quellen,
            'tags': tags
        }

        glossary_data.append(eintrag)

# Erstelle ein übergeordnetes Dictionary
glossary_dict = {'glossaryData': glossary_data}

# Speichere die Daten als YAML-Datei
yaml_datei = '../data/pages/glossar_2.yaml'
with open(yaml_datei, 'w', encoding='utf-8') as yamlfile:
    yaml.dump(glossary_dict, yamlfile, allow_unicode=True)

print(f'Daten wurden in {yaml_datei} gespeichert.')
