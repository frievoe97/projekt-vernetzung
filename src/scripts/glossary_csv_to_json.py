import csv
import json

# Lese die CSV-Datei
with open('glossary_data.csv', newline='', encoding='utf-8') as csvfile:
    csv_data = csv.DictReader(csvfile)
    sanity_data = []
    for row in csv_data:
        sanity_entry = {
            "_type": "glossary",
            "term": row['Begriffe'],
            "websiteText": row['Website-Text'],
            "websiteLink": row['Website-Verlinkung'],
            "sources": row['Quellen'],
            "additionalLinkText": row['Zusatz-Link-Text'],
            "additionalLinkURL": row['Zusatz-Link-URL'],
            "general": row['Allgemeine Begrifflichkeiten'] == 'x',
            "psychologicalViolence": row['Psychische Gewalt'] == 'x',
            "physicalViolence": row['Körperliche Gewalt'] == 'x',
            "workplaceViolence": row['Gewalt in der Arbeitswelt'] == 'x',
            "domesticViolence": row['Häusliche Gewalt'] == 'x',
            "digitalViolence": row['Digitale Gewalt'] == 'x'
        }
        sanity_data.append(sanity_entry)

# Speichere die konvertierten Daten in eine JSON-Datei
with open('sanity_data.json', 'w') as f:
    json.dump(sanity_data, f, indent=2)
