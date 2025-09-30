# 3dc Tools

**3dc Tools** die Powertoys fuers 3DCenter.

Features:
- Darkmode
- WISIWYG-Editor


## Voraussetzungen
- Node.js (empfohlen: aktuelle LTS-Version)
- PNPM als Package-Manager (wird in `package.json` spezifiziert)
- Ein kompatibler Browser (Chrome oder Firefox) für Tests

## Installation
1. Klone das Repository (falls nicht schon vorhanden):
   ``
   git clone https://github.com/golden-apple-research/3dctools
   cd 3dctools
   ``
2. Installiere die Abhängigkeiten:
   ``
   pnpm install
   ``
   Dies führt auch `wxt prepare` aus (postinstall-Script).

## Entwicklung
Starte den Entwicklungsmodus:
- Für Chrome: `pnpm dev`
- Für Firefox: `pnpm dev:firefox`

Die Extension wird automatisch in den Browser geladen (über WXT). Änderungen in `src/` werden hot-reloaded.

## Build und Deployment
- Baue die Extension: `pnpm build`
- Für Firefox: `pnpm build:firefox`
- Erstelle eine ZIP-Datei zum Laden: `pnpm zip` (oder `pnpm zip:firefox`)

Der Build-Output landet in `dist/`. Lade die ZIP in deinen Browser-Extensions-Manager hoch.

## Projektstruktur
``
|-3dctools
├── src/
│   ├── app.config.ts      # WXT-Konfiguration
│   ├── assets/            # Statische Assets (Bilder, Icons etc.)
│   └── entrypoints/       # Extension-Entry-Points (z. B. Popup, Background-Scripts)
├── public/                # Öffentliche Dateien
├── dist/                  # Build-Output
├── package.json           # Abhängigkeiten und Scripts
├── tsconfig.json          # TypeScript-Konfiguration
├── wxt.config.ts          # WXT-spezifische Einstellungen
└── README.md              # Diese Datei
``

## Abhängigkeiten
- **WXT**: Framework für Web-Extensions (^0.20.6)
- **TypeScript**: Für typsichere Entwicklung (^5.9.2)
- **SCEditor**: Der BB-Code WISIWYG-Editor

## TypeScript-Kompilierung prüfen
Führe `pnpm compile` aus, um Syntax-Fehler zu überprüfen (ohne Ausgabe).

## Beitrag
- Forke das Repo und erstelle einen Pull Request.
- Halte dich an TypeScript-Best Practices und teste Änderungen im Dev-Modus.
- Für Issues: Beschreibe das Problem und füge Logs bei.

## Lizenz
Dieses Projekt ist derzeit ohne explizite Lizenz. Füge eine `LICENSE`-Datei hinzu, z. B. MIT oder GPL, je nach Bedarf.
