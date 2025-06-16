# 🛒 Techmax – Online-Shop mit Django & PayPal

Dies ist ein Übungsprojekt basierend auf dem hervorragenden Django-Tutorial von **Fabian Heihoff** (Programmiern Starten).  
Es wurde erweitert und angepasst, um praktische Funktionen wie Cookie-basierten Warenkorb, PayPal-Sandbox-Zahlung, Gastbestellung und ein modernes UI mit Bootstrap zu integrieren.

🔗 **Original-Tutorial auf programmiern-starten.de:**  
https://programmiern-starten.de/

---

##  Features

- Artikelliste mit Bildern und Preisen
- Warenkorb-System für Gäste (per Cookie) und Nutzer (per POST)
- Übersichtliche Bestellseite mit dynamischer Tabelle
- Checkout mit Bestellformular und Adresseingabe
- PayPal-Integration über Sandbox
- Bootstrap-Design (v5.3)
- Flash-Messages & automatische Ausblendung
- Admin-Backend für Bestellungen & Produkte

---

##  Projektstruktur

```
techmax/
├── Pipfile            # pipenv-Konfiguration
├── Pipfile.lock       # Abhängigkeiten (gesperrt)
├── ReadMe             # Projektdokumentation 
├── db.sqlite3         # SQLite-Datenbank (lokal)
├── manage.py          # Django CLI
├── shop/              # Haupt-Django-App mit Views, Models etc.
├── static/            # Eigene statische Dateien
├── staticfiles/       # Gesammelte statische Dateien für Deployment
├── techmax/           # Projektkonfiguration (settings.py, urls.py)
```

## 🛠️ Installation & Setup

### 1. Repository klonen

```bash
git clone https://github.com/dein-user/techmax.git
cd techmax
```

### 2. Virtuelle Umgebung mit pipenv

```bash
pipenv install
pipenv shell
```

### 3. Migrationen durchführen

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Admin-User anlegen

```bash
python manage.py createsuperuser
```

### 5. Server starten

```bash
python manage.py runserver
```

---

## 💳 PayPal-Sandbox einrichten

1. Gehe zu: [https://developer.paypal.com](https://developer.paypal.com)
2. Erstelle eine neue App im Bereich **Sandbox** und kopiere:
   - `CLIENT_ID`
   - `SECRET`

3. Trage die Daten in deine `.env` oder `settings.py` ein:

```python
PAYPAL_CLIENT_ID = "..."
PAYPAL_SECRET = "..."
```

4. Verwende einen **Sandbox-Buyer-Account**, um Zahlungen zu testen.  
   → Dieser wird im Checkout per PayPal-Login verwendet.

---

##  Testablauf (Gast)

1. Artikel anklicken → „Bestellen“ drücken
2. Warenkorb öffnet sich automatisch
3. Formular ausfüllen
4. Mit Sandbox-Buyer über PayPal bezahlen
5. Erfolgreiche Bestellung wird im Backend gespeichert

---

##  Hinweise

- Warenkorb wird für Gäste als JSON im Cookie gespeichert (`document.cookie`)
- Nach einer Bestellung wird der Cookie gelöscht
- Bei eingeloggten Nutzern erfolgt die Warenkorbverarbeitung via POST (`/artikel_backend/`)
- Nach dem Absenden des Formulars wird automatisch zur Startseite weitergeleitet

---

##  Debugging

- Falls der PayPal-Button nicht angezeigt wird:
  - Cookie `warenkorb` prüfen
  - Browser-Schutz (z. B. Brave) deaktivieren
  - Konsole auf Fehler prüfen

- Bei Problemen mit `pipenv`:  
  Stelle sicher, dass du **Python 3.12** verwendest (nicht 3.13!)

---

##  Abhängigkeiten

- Django
- django-paypal
- pipenv
- Bootstrap (CDN)
- JS (natives DOM / fetch API)

---
---

## Geplante Verbesserungen

### Responsiveness
- Das Layout muss für Smartphones und kleine Bildschirme optimiert werden.
- Aktuell ist das Grid (zum Beispiel Artikellisten, Checkout-Bereich) nicht vollständig responsive.
- ToDo:
  - Bootstrap-Utility-Klassen wie `col-12`, `col-sm-6`, `d-flex`, `flex-column`, `gap-2` überprüfen
  - Falls nötig, Media Queries ergänzen oder CSS anpassen

### Artikelfenster-Feedback
- Nach dem Klick auf „Bestellen“ erscheint ein kleines Bestätigungsfenster mit der Artikel-ID.
- Aktuell verschwindet dieses Fenster zu schnell und lässt sich nicht aktiv schließen.
- ToDo:
  - Einblenddauer verlängern (zum Beispiel über `setTimeout`)
  - Optionalen "Schließen"-Button ergänzen
  - Benutzerfreundlichkeit verbessern, etwa durch weiche Ein-/Ausblendung oder bessere Platzierung auf mobilen Geräten

---


---

##  Autor



---

##  Lizenz

Dieses Projekt dient Übungszwecken und steht unter keiner speziellen Lizenz.  
Für kommerzielle Nutzung bitte anfragen.
