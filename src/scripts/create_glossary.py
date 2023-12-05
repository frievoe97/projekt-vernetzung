import csv
import os
import yaml

# Pfad zur CSV-Datei
csv_datei = 'glossary.csv'

# Initialisiere ein leeres Array, um die Daten zu speichern
glossary_data = []

# Initialisiere ein leeres Set, um alle eindeutigen Tags zu sammeln
alle_tags = set()

# Öffne die CSV-Datei und lese sie ein
with open(csv_datei, newline='', encoding='utf-8') as csvfile:
    csv_reader = csv.reader(csvfile)
    header = next(csv_reader)  # Die erste Zeile enthält die Spaltenüberschriften
    for row in csv_reader:
        begriff = row[0].strip()  # Trimme den Begriff
        definition = row[1].strip()  # Die Definition ist der gleiche Wert wie der Begriff
        website_verlinkung = row[2].strip()  # Trimme die Website-Verlinkung
        quellen = row[3].strip()  # Trimme die Quellen
        tags = [header[i].strip() for i in range(4, len(header)) if i < len(row) and row[i] == 'x']

        # Füge die Tags zum Set aller Tags hinzu
        alle_tags.update(tags)

        # Erstelle einen Eintrag für den aktuellen Begriff
        eintrag = {
            'Begriff': begriff,
            'Definition': definition,
            'Website-Verlinkung': website_verlinkung,
            'Quellen': quellen,
            'Tags': tags
        }

        glossary_data.append(eintrag)

# Berechne die Anzahl der Einträge
anzahl_eintraege = len(glossary_data)

# Berechne den benötigten Speicherplatz
speicherplatz_in_bytes = yaml.dump(glossary_data, allow_unicode=True).encode('utf-8')
speicherplatz_in_kb = len(speicherplatz_in_bytes) / 1024
speicherplatz_in_mb = speicherplatz_in_kb / 1024

# Ausgabe der Zusammenfassung der Eckdaten
print("Zusammenfassung:")
print("Anzahl der Einträge:", anzahl_eintraege)
print("Alle Tags:", ", ".join(alle_tags))
print("Anzahl der Tags insgesamt:", len(alle_tags))
print("Benötigter Speicherplatz (in KB):", speicherplatz_in_kb)
print("Benötigter Speicherplatz (in MB):", speicherplatz_in_mb)

# Erstelle ein übergeordnetes Dictionary
glossary_dict = {'glossaryData': glossary_data}

# Speichere die Daten als YAML-Datei
yaml_datei = '../data/pages/glossar_2.yaml'
with open(yaml_datei, 'w', encoding='utf-8') as yamlfile:
    yaml.dump(glossary_dict, yamlfile, allow_unicode=True)

print(f'Daten wurden in {yaml_datei} gespeichert.')
