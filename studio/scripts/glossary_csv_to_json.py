import csv
import json

# Lese die CSV-Datei
with open('glossary_data.csv', newline='', encoding='utf-8') as csvfile:
    csv_data = csv.DictReader(csvfile)
    sanity_data = []
    for row in csv_data:
        categories = []
        if row['Allgemeine Begrifflichkeiten'] == 'x':
            categories.append('general')
        if row['Psychische Gewalt'] == 'x':
            categories.append('psychologicalViolence')
        if row['Körperliche Gewalt'] == 'x':
            categories.append('physicalViolence')
        if row['Gewalt in der Arbeitswelt'] == 'x':
            categories.append('workplaceViolence')
        if row['Häusliche Gewalt'] == 'x':
            categories.append('domesticViolence')
        if row['Digitale Gewalt'] == 'x':
            categories.append('digitalViolence')

        sanity_entry = {
            "_type": "glossary",
            "term": row['Begriffe'],
            "websiteText": row['Website-Text'],
            "websiteLink": row['Website-Verlinkung'],
            "sources": row['Quellen'],
            "additionalLinkText": row['Zusatz-Link-Text'],
            "additionalLinkURL": row['Zusatz-Link-URL'],
            "category": categories
        }
        # Schreibe jede Zeile in das ndjson-Format
        with open('sanity_data.ndjson', 'a', encoding='utf-8') as f:
            f.write(json.dumps(sanity_entry) + '\n')

print("Conversion to ndjson complete.")
