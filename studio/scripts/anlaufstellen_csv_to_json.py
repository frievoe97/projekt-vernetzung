import csv
import json

# Pfad zur CSV-Datei
csv_file = 'anlaufstellen.csv'

# Pfad zur Ausgabedatei
json_file = 'anlaufstellen.ndjson'

# Mapping von Kategorien und Tags zu den Werten im Sanity.io-Schema
category_mapping = {
    "Erste Hilfe / Opferhilfe": "erste_hilfe_opferhilfe",
    "Gewalt gegen Frauen": "gewalt_gegen_frauen",
    "Gewalt im eigenen Zuhause / in der Partnerschaft": "gewalt_im_zuhause",
    "Gewalt am Arbeitsplatz": "gewalt_am_arbeitsplatz",
    "Digitale Gewalt": "digitale_gewalt",
    "Gewalt an Kindern und Jugendlichen": "gewalt_an_kindern_und_jugendlichen",
    "Branchenspezifische Anlaufstellen": "branchenspezifische_anlaufstellen",
    "Diskriminierung (Geschlecht, LGBTQI+, Rassismus)": "diskriminierung",
    "Gewalt gegen Männer": "gewalt_gegen_maenner",
    "Beratungsstellen für (potenzielle) Täter": "beratungsstellen_fuer_taeter"
}

tag_mapping = {
    "Opferhilfe": "opferhilfe",
    "Erste Hilfe": "erste_hilfe",
    "Körperliche Gewalt": "koerperliche_gewalt",
    "Psychische Gewalt": "psychische_gewalt",
    "Gewalt gegen Frauen": "gewalt_gegen_frauen",
    "Häusliche Gewalt": "haeusliche_gewalt",
    "Gewalt am Arbeitsplatz": "gewalt_am_arbeitsplatz",
    "Mobbing": "mobbing",
    "Sexuelle Belästigung": "sexuelle_belaestigung",
    "Digitale Gewalt": "digitale_gewalt",
    "Sexueller Missbrauch": "sexueller_missbrauch",
    "Narzissmus": "narzissmus",
    "Gewalt gegen LGBTQI": "gewalt_gegen_lgbtqi",
    "Rassismus": "rassismus",
    "Prozessbegleitung": "prozessbegleitung",
    "Kindesmissbrauch": "kindesmissbrauch",
    "Kind": "kind"
}

# Funktion zur Konvertierung von CSV in NDJSON
def csv_to_ndjson(csv_file, json_file):
    with open(csv_file, 'r', newline='', encoding='utf-8') as csvfile:
        csv_data = csv.DictReader(csvfile)
        with open(json_file, 'w', encoding='utf-8') as ndjsonfile:
            lastCategory = ""
            for row in csv_data:
                if row["Kategorie"] != "":
                    lastCategory = row["Kategorie"]
                if row["Name"] == "":
                    continue
                # Extrahiere Tags basierend auf den Spalten mit "x"
                tags = [tag_mapping[key] for key, value in row.items() if value == "x" and key not in ["Name", "Kategorie", "Links", "Logos"]]
                # Erstelle ein JSON-Objekt
                data = {
                    "_type": "anlaufstellen",
                    "title": row["Name"],
                    "category": [category_mapping[lastCategory]],
                    "link": row["Links"],
                    "logo": row["Logos"],
                    "tags": tags
                }
                # Schreibe das JSON-Objekt in die NDJSON-Datei
                ndjsonfile.write(json.dumps(data) + '\n')

# Aufruf der Funktion zur Konvertierung
csv_to_ndjson(csv_file, json_file)
