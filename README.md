# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Daten ändern

## Anlaufstellen/Interviews

Die Daten sind gespeichert in [src/data/anlaufstellenData.yaml](https://github.com/frievoe97/projekt-vernetzung/blob/main/src/data/anlaufstellenData.yaml). Jede Anlaufstelle hat eine id (darf nicht doppelt sein, am besten fortlaufend), einen Namen, ein Bild (URL), eine Beschreibung, einen Link, Tags (für die Suchfilter), ein Datum (für das Interview) und eine Kurzbeschreibung für das Interview.

## Farben

Die Farben sind gespeichert unter [tailwind.config.js](https://github.com/frievoe97/projekt-vernetzung/blob/main/tailwind.config.js) und sind im HEX-Code angegeben. Aktuell werden die Farben blue_light, yellow, blue_dark, red und lavendar verwendet. Für die Farbänderung muss der sechstellige HEX-Code geändert werden. Wichtig ist, dass dieser in Anführungszeichen steht und mit einem '#' beginnt.
