import pandas as pd
import yaml
import re
import math

# Excel-Datei einlesen (ersetzen Sie 'data.xlsx' durch den tatsächlichen Dateinamen)
excel_file = "data.xlsx"
df = pd.read_excel(excel_file, engine='openpyxl')

# Funktion zum Extrahieren von Links aus einer Zelle
def extract_links(text):
    if isinstance(text, str):
        links = re.findall(r'\*\*\s*(.*?)\s*\(LINK\)', text)
        print(links)
        return [link.strip() for link in links]
    return []

# Funktion zum Entfernen von Zeilenumbrüchen und "**"
def clean_social_media(text):
    if isinstance(text, str):
        cleaned_text = text.replace("\n", "").replace("\r", "").replace("**", "").strip()
        return re.sub(r"\s+", " ", cleaned_text)
    return text    

# Entferne Zeilen mit NaN-Werten in den erforderlichen Spalten
df.dropna(subset=["Vorname", "Nachname", "Branche"], inplace=True)

# Daten in ein YAML-freundliches Format konvertieren
data_dict = []
for _, row in df.iterrows():
    kategorie_machtmissbrauch = row["Kategorie Machtmissbrauch"]
    if isinstance(kategorie_machtmissbrauch, str):
        kategorie_machtmissbrauch = [item.strip() for item in kategorie_machtmissbrauch.split("/")]
    else:
        kategorie_machtmissbrauch = []

    social_media_präsenz = clean_social_media(row["Social Media-Präsenz"])
    organisation_projekt = clean_social_media(row["Organisation / Projekt"])

    social_media_links = extract_links(social_media_präsenz)
    organisation_links = extract_links(organisation_projekt)
    
    person_data = {
        "Vorname": row["Vorname"],
        "Nachname": row["Nachname"],
        "Branche": row["Branche"],
        "Kategorie Machtmissbrauch": kategorie_machtmissbrauch,
        "Social Media-Präsenz": social_media_präsenz,
        "Social Media-Links": social_media_links,
        "Organisation / Projekt": organisation_projekt,
        "Organisation / Projekt-Links": organisation_links,
    }

    data_dict.append(person_data)

# YAML-Datei erstellen
output_yaml_file = "output.yaml"
with open(output_yaml_file, "w", encoding='utf-8') as yaml_file:
    yaml.dump(data_dict, yaml_file, default_flow_style=False, allow_unicode=True)

print(f"Die YAML-Datei wurde unter '{output_yaml_file}' erstellt.")
