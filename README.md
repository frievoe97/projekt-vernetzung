[Website](https://projekt-vernetzung.friedrichvoelkers.de)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Dokumentation für die Webseite des Projekts Vernetzung

Willkommen zur offiziellen Dokumentation des Projekts Vernetzung. Dieses Projekt basiert auf React und Vite und dient der nahtlosen Integration verschiedener Komponenten und Technologien.

## Einrichtung des Projekts

### Voraussetzungen

Um das Projekt auf Ihrem lokalen System auszuführen, müssen Sie sicherstellen, dass folgende Voraussetzungen erfüllt sind:

- Node.js (empfohlen wird Version 14 oder höher)
- npm oder yarn

### Projektinstallation

Folgen Sie diesen Schritten, um das Projekt auf Ihrem lokalen Entwicklungssystem einzurichten:

1. Klonen Sie das Projekt-Repository.

2. Navigieren Sie in das Hauptverzeichnis des Projekts.

3. Installieren Sie die erforderlichen Abhängigkeiten.

## Verfügbare Skripte

Dieses Projekt stellt verschiedene npm-Skripte zur Verfügung, die Ihnen bei der Entwicklung und Bereitstellung helfen. Hier sind einige der wichtigsten Skripte:

- `npm run dev`: Startet die Entwicklungsumgebung mithilfe von Vite und ermöglicht Live-Reload während der Entwicklung.

- `npm run build`: Erzeugt eine optimierte Produktionsversion des Projekts.

- `npm run lint`: Führt ESLint über den gesamten Projektcode aus, um potenzielle Probleme zu identifizieren.

- `npm run preview`: Startet eine lokale Vorschau der Produktionsversion des Projekts.

## Abhängigkeiten

Dieses Projekt nutzt eine Reihe von Abhängigkeiten, um reibungslose Funktionalität zu gewährleisten. Hier sind einige der Hauptabhängigkeiten:

- `react`: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.

- `react-router-dom`: Eine Bibliothek zur Navigation in React-Anwendungen.

- `framer-motion`: Eine Animationsbibliothek für React.

- `tailwindcss`: Ein CSS-Framework zur schnellen Gestaltung von Benutzeroberflächen.

- Andere Abhängigkeiten sind in der `package.json`-Datei aufgeführt.

## Entwicklungsumgebung

Dieses Projekt verwendet Vite als Entwicklungsumgebung und Build-Tool, um effiziente Entwicklung und Bereitstellung zu gewährleisten.

## Lizenz

Dieses Projekt unterliegt der MIT-Lizenz. Weitere Details finden Sie in der `LICENSE`-Datei.

## Kontakt

Bei Fragen, Anregungen oder Problemen können Sie mich jederzeit unter [friedrich.voelkers@me.com](mailto:friedrich.voelkers@me.com) kontaktieren.

# Daten ändern

## Anlaufstellen/Interviews

Die Daten sind gespeichert in [src/data/anlaufstellenData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/anlaufstellenData.yaml). Jede Anlaufstelle hat eine id (darf nicht doppelt sein, am besten fortlaufend), einen Namen, ein Bild (URL), eine Beschreibung, einen Link, Tags (für die Suchfilter), ein Datum (für das Interview) und eine Kurzbeschreibung für das Interview.

## Farben

Die Farben sind gespeichert unter [tailwind.config.js](https://github.com/frievoe97/projekt-vernetzung/blob/main/tailwind.config.js) und sind im HEX-Code angegeben. Aktuell werden die Farben blue_light, yellow, blue_dark, red und lavendar verwendet. Für die Farbänderung muss der sechstellige HEX-Code geändert werden. Wichtig ist, dass dieser in Anführungszeichen steht und mit einem '#' beginnt.




# Bearbeitung des Inhalts

Alle textlichen Inhalte sind in diesem [Ordner](https://github.com/frievoe97/projekt-vernetzung/tree/main/src/data) gespeidchert.

## Inhalte der Startseite

Auf der Startseite gibt es einmal die Beiträge ("Alle Branchen und Lebensbereiche betroffen", "Was tun wir?" etc.) und die Slideshow unten auf der Seite. 

Für die Bearbeitung der Beiträge müsst ihr die Datei [homeData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/homeData.yaml) anpassen. Jeder Beitrag hat folgendes Format:

```yaml
  - imageSrc: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    title: "Alle Branchen und Lebensbereiche betroffen"
    text: >
      Nicht jeder Fall von Machtmissbrauch gleicht den zuletzt medial stark
      thematisierten Extremen. Viel passiert “im Kleinen”. Zudem bleiben drastische
      Fälle, aus Angst der Betroffenen zu Sprechen, im Dunkeln. Dabei gleichen sich
      übergeordnete Strukturen, die Machtmissbrauch befördern, aber auch von
      Täter:innen angewandte Strategien über verschiedene Bereiche hinweg. Eine
      vorbeugende gesellschaftliche und individuelle Auseinandersetzung mit diesen
      Mustern ist wichtig, um frühzeitiger für Betroffene eingreifen zu können.
    buttonText: "Mehr erfahren"
```



































