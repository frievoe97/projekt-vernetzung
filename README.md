# Daten ändern

## Bearbeitung der Farben

Die Farben sind gespeichert unter [tailwind.config.js](https://github.com/frievoe97/projekt-vernetzung/blob/main/tailwind.config.js) und sind im HEX-Code angegeben. Aktuell werden die Farben color_1, color_2, color_3 und color_4 verwendet. Für die Farbänderung muss der sechstellige HEX-Code geändert werden. Wichtig ist, dass dieser in Anführungszeichen steht und mit einem '#' beginnt.

In Zukunft würde ich den Farben auch bessere Namen geben, aber falls die sich nochmal ändern ist es so vielleicht einfacher.

## Bearbeitung des Inhalts

Alle textlichen Inhalte sind in diesem [Ordner](https://github.com/frievoe97/projekt-vernetzung/tree/main/src/data) gespeidchert.

Die Dateien in denen die Daten gespeichert sind, sind sogenannte .yaml Dateien. Dort können mehrere EInträge gespeichert werden, welche beim Öffnen der Seite automatisch eingelgesen werden. Wichtig ist, dass jeder Eintrag mit einem Bindestrich beginnt und auf die EInrückungstiefe und die Sonderzeichen (Anführungszeichen, Doppelpunkt, Bindestrich und das Größer Als Zeichen bei längeren Texten).

### Inhalte der Startseite

Auf der Startseite gibt es einmal die Beiträge ("Alle Branchen und Lebensbereiche betroffen", "Was tun wir?" etc.) und die Slideshow unten auf der Seite. 

Für die Bearbeitung der Beiträge müsst ihr die Datei [homeData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/homeData.yaml) anpassen. Jeder Beitrag hat folgendes Format:

```yaml
  - imageSrc: "https://example-image/image01.png"
    title: "Titel des Beitrags"
    text: >
      Hier könnt ihr den Text zu dem Beitrag hinzufügen
    buttonText: "Text des Buttons"
```

Für die Bearbeitung der Slideshow müsst ihr die Datei [slideshowData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/slideshowData.yaml) anpassen. Jede Slide hat folgendes Format:

```yaml
  - image: "https://example-image/image01.png"
    name: "Titel der Slide"
    description: >
      Kurze Beschreibung unter dem Titel
```

### Inhalte der Seite "Unsere Mission"

Die Beiträge auf der Seite unsere Mission könnt ihr in der Datei [missionData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/missionData.yaml) anpassen. Jeder Beitrag hat folgendes Format:

```yaml
- title: "Titel des Beitrags"
  text: >
    Text des Beitrags
```

### Inhalte des Glossars

Die Glossareinträge auf der Seite Glossar könnt ihr in der Datei [glossaryData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/glossaryData.yaml) anpassen. Jeder Glossareintrag hat folgendes Format:

```yaml
  - term: "Begriff"
    definition: >
      Definition des Eintrags
```

### Inhalte der Anlaufstellen, der Interviews und der Slideshow auf der Interviewseite

Aktuell sind dort alle Daten in einer Datei gespeichert, da man alle Anlaufstellen über die Suche finden soll und es zu allen Anlaufstellen auch Interviews geben soll. Falls es in der Zukunft Anlaufstellen gibt, die nur auf einer der Seiten angezeigt werden sollen, kann man das trotzdem in einer Datei speichern.

Für die Bearbeitung der Anlaufstellen müsst ihr die Datei [anlaufstellenData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/anlaufstellenData.yaml) ändern. Jede Anlaufstelle hat folgendes Format:

```yaml
- id: 1
    name: "Name der Anlaufstelle"
    image: "https://example-image/image01.png"
    description: "Kurze Beschreibung der Anlaufstelle, welche auf der Seite Anlaufstellen steht"
    link: "https://example.com/anlaufstelle1"
    tags:
      - "Hilfe"
      - "Opfer"
      - "Beratung"
    date: "Datum für das Interview z. B. 12. Oktober 2023"
    interviewShort: "Kurzbeschreibung des Interviews"
```

Die "tags" sind Suchbegriffe, über die die Anlaufstellen leichter zu finden sind in der Suche. Dort könnte zum Beispiel sowas stehen wie die Örtlichkeit (Berlin, Deutschlandweit, Online etc.) oder die Art der Beratung.

Ich würde in Zukunft noch einen Eintrag für ein ausführliches Interview hinzufügen.

### Inhalte der Navigationsleiste

Die Einträge in der Navigationsleiste sind in der Datei [menuItems.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/menuItems.yaml) gespeichert.

Menüitems können entweder direkt zu einer Seite verlinken oder ein Untermenü besitzen. Jeder Menüpunkt hat auch das Attribut "url". Hier wird festgelegt wohin man geleitet wird, wenn auf den Menüpunkt geklickt wird. Damit das funktioniert muss auch an anderer Stelle in dem Code was geändert werden. Deswegen könnt ihr hier erstmal nur den Namen und die Struktur ändern.

Für einfache Menüpunkte muss ein Eintrag folgendes Format haben:

```yaml
  - text: "Name des Menüpunkts"
    url: "/link"
```

Für Menüpunkte mit einem Untermenü muss ein Eintrag folgendes Format haben:

```yaml
  - text: "Name des Oberpunkts"
    subItems:
      - text: "Erster Untermenü Eintrag"
        url: "/link-1"
      - text: "Zweiter Untermenü Eintrag"
        url: "/link-1"
```

# Workflow für Änderungswünsche

Jedes Projekt auf GitHub besitzt den Reiter [Issues](https://github.com/frievoe97/projekt-vernetzung/issues). Dort trage ich alles ein was noch erledigt werden soll. Dort könnt ihr über den Button [New issue](https://github.com/frievoe97/projekt-vernetzung/issues/new/choose) ein neues To-Do hinzufügen und diesem einen Titel und eine Beschreibung hinzufügen.

Auf der rechten Seite gibt es noch ein paar Einstellungsmöglichkeiten wie Assignees (Wer soll die Aufgabe erledigen), Labels (Art der Aufgabe), Projekcts (Hier bitte einfach Dashboard auswählen) und Milestone (Hier bitte auch zutreffendes auswählen).

## Dashboard

Durch die Auswahl Dashboard bei dem Reiter Projects wird die Aufgabe automatisch dem [Dashboard](https://github.com/users/frievoe97/projects/1) hinzugefügt. Hier erhält man eine Übersicht, welche Aufgabe noch zu erledigen ist, welche gerade erledigt wird und welche bereits fertig sind.

## Milestones

Durch die Auswahl des Milestones wird die Aufgabe einem [Meilenstein](https://github.com/frievoe97/projekt-vernetzung/milestones) hinzugefpügt. Ich habe mich dazu entschieden bis jetzt zwei Meilensteine zu erstellen. Einmal [First Release](https://github.com/frievoe97/projekt-vernetzung/milestone/1) und [Future Release](https://github.com/frievoe97/projekt-vernetzung/milestone/2) mit dem Gedanken, dass in [First Release](https://github.com/frievoe97/projekt-vernetzung/milestone/1) alle Aufgaben gesammelt werden, die erledigt werden müssen bis die Seite zum ersten Mal online geht und in [Future Release](https://github.com/frievoe97/projekt-vernetzung/milestone/2) alle Aufgaben gesammelt werden, die auch noch erledigt werden können, wenn die Seite bereits online ist.

# Konfiguration der Seite

[Website](https://projekt-vernetzung.friedrichvoelkers.de)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dokumentation für die Webseite des Projekts Vernetzung

Willkommen zur offiziellen Dokumentation des Projekts Vernetzung. Dieses Projekt basiert auf React und Vite und dient der nahtlosen Integration verschiedener Komponenten und Technologien.

### Einrichtung des Projekts

#### Voraussetzungen

Um das Projekt auf Ihrem lokalen System auszuführen, müssen Sie sicherstellen, dass folgende Voraussetzungen erfüllt sind:

- Node.js (empfohlen wird Version 14 oder höher)
- npm oder yarn

#### Projektinstallation

Folgen Sie diesen Schritten, um das Projekt auf Ihrem lokalen Entwicklungssystem einzurichten:

1. Klonen Sie das Projekt-Repository.

2. Navigieren Sie in das Hauptverzeichnis des Projekts.

3. Installieren Sie die erforderlichen Abhängigkeiten.

### Verfügbare Skripte

Dieses Projekt stellt verschiedene npm-Skripte zur Verfügung, die Ihnen bei der Entwicklung und Bereitstellung helfen. Hier sind einige der wichtigsten Skripte:

- `npm run dev`: Startet die Entwicklungsumgebung mithilfe von Vite und ermöglicht Live-Reload während der Entwicklung.

- `npm run build`: Erzeugt eine optimierte Produktionsversion des Projekts.

- `npm run lint`: Führt ESLint über den gesamten Projektcode aus, um potenzielle Probleme zu identifizieren.

- `npm run preview`: Startet eine lokale Vorschau der Produktionsversion des Projekts.

### Abhängigkeiten

Dieses Projekt nutzt eine Reihe von Abhängigkeiten, um reibungslose Funktionalität zu gewährleisten. Hier sind einige der Hauptabhängigkeiten:

- `react`: Eine JavaScript-Bibliothek zur Entwicklung von Benutzeroberflächen.

- `react-router-dom`: Eine Bibliothek zur Navigation in React-Anwendungen.

- `framer-motion`: Eine Animationsbibliothek für React.

- `tailwindcss`: Ein CSS-Framework zur schnellen Gestaltung von Benutzeroberflächen.

- Andere Abhängigkeiten sind in der `package.json`-Datei aufgeführt.

### Entwicklungsumgebung

Dieses Projekt verwendet Vite als Entwicklungsumgebung und Build-Tool, um effiziente Entwicklung und Bereitstellung zu gewährleisten.

### Lizenz

Dieses Projekt unterliegt der MIT-Lizenz. Weitere Details finden Sie in der `LICENSE`-Datei.

### Kontakt

Bei Fragen, Anregungen oder Problemen können Sie mich jederzeit unter [friedrich.voelkers@me.com](mailto:friedrich.voelkers@me.com) kontaktieren.



































