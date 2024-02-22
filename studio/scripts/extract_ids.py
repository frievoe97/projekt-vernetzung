import json

# create csv file
# sanity documents query '*[_type == "glossary"]' --dataset production --format json > glossary_ids.json

# delete documents
# sanity documents delete id1 id2 id3

# publish documents
# sanity dataset import sanity_data.ndjson production 

# Pfad zur JSON-Datei
json_file = 'glossary_ids.json'

# Funktion zum Einlesen der JSON-Datei und Ausgabe der _id-Felder
def print_ids_from_json(json_file):
    with open(json_file, 'r') as f:
        data = json.load(f)
        # Sammle alle IDs in einer Liste
        ids = [entry['_id'] for entry in data]
        # Gib die IDs in einer Zeile mit Leerzeichen dazwischen aus
        print(' '.join(ids))

# Aufruf der Funktion
print_ids_from_json(json_file)
