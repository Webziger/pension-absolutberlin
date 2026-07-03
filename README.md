# Pension Absolut Berlin – Redesign-Demo

Demo-Redesign der Startseite von [pension-absolutberlin.de](https://pension-absolutberlin.de/) mit Fokus auf Conversion (Buchung) und SEO.

## Was ist neu gegenüber der Live-Seite?

- **Buchung immer sichtbar:** "Jetzt buchen" im Sticky-Header plus Buchungsleiste direkt im Hero. Beides öffnet das echte Mews-Buchungssystem der Pension.
- **Conversion-Funnel:** Trust-Bar, Zimmerübersicht, rote Vorteils-Sektion mit asymmetrischen Übergängen, Gästestimmen, Lage, Galerie, FAQ, Kontaktformular (öffnet das E-Mail-Programm, Demo ohne Backend).
- **SEO:** schema.org LodgingBusiness + FAQPage (JSON-LD), semantische Struktur, optimierte Bilder (WebP, lazy), statischer Build.
- **Design beibehalten, aber frischer:** Original-Logo, Markenrot `#e62148`, Hausschrift Texta Narrow, Original-Fotos.
- **Mobil optimiert:** große Bilder, sticky Buchen-Button, 1-Spalten-Layouts.

## Hinweise

- Die Gesamtwertung in der Google-Sektion (4,8 von 5, 238 Bewertungen) entspricht den echten Google-Zahlen (Google Hotels, Stand Juli 2026). Die Einzelzitate in `src/components/Reviews.astro` sind Platzhalter auf Basis echter Bewertungsthemen. Vor einem Livegang durch echte Google-Rezensionen ersetzen.
- Bilder, Logo und Schriften stammen von der bestehenden Website der Pension.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Build nach dist/
```

Stack: Astro 4, Tailwind CSS, astro-icon (Phosphor).
