# AIIMS Patna Sarthi

**Hospital navigation and OPD companion app for patients at AIIMS Patna, Bihar, India.**

A patient arriving at a large government hospital loses hours finding the right department, understanding the token system, locating the correct lab counter, and coming back for a report. AIIMS Patna Sarthi puts all of that in one free app that works offline.

### ▶ Open the app: https://abhinavpathak4120.github.io/aiims-patna-sarthi/

Free · No login server · Works offline after the first open · Hindi, English, Bhojpuri, Maithili

---

## What it does

| Feature | What the patient gets |
|---|---|
| **OPD token and live queue** | Token number, how many people are ahead, estimated wait time |
| **Indoor department navigation** | Floor plan, QR checkpoints and GPS — turn-by-turn from the gate to the right room |
| **Tests and lab token** | Choose tests, find the exact collection counter, get a lab token |
| **Reports** | Read a lab report in simple language, track report status |
| **Payment and receipt** | See charges, pay, download or share a receipt |
| **Emergency** | One-tap call to 108, emergency registration, bed and blood availability |
| **Appointments** | Book, reschedule, follow-up reminders |
| **Sample tracker (Phase 2 demo)** | Scan the QR on a sample tube and see live status: collected → lab → in queue → report ready |
| **Accessibility** | Large text, dark mode, voice guidance |
| **4 languages** | Hindi, English, Bhojpuri, Maithili |

136 screens · single self-contained HTML file · no backend required

---

## AI features — and what they do not do

The app has two AI helpers:

- **Health information assistant** — the patient describes a problem (fever, cough, pain) and gets general health information.
- **Prescription reader** — reads medicine names from a photo of a prescription and explains them in simple language.

**These do not diagnose, prescribe, monitor or predict any disease, and they do not control any medical device.** Every answer carries the line: *"This is general information, not a diagnosis. Please consult a doctor."*

This app is a **navigation and OPD workflow tool**. It is not a medical device, and no diagnostic claim is made. See [`docs/CDSCO_AIIMS-Patna-Sarthi-English.pdf`](docs/CDSCO_AIIMS-Patna-Sarthi-English.pdf) for the full intended-use statement.

---

## Files in this repository

| File | Purpose |
|---|---|
| `index.html` | The whole app — one self-contained file (136 screens, 4 languages) |
| `manifest.json` | PWA manifest (install to home screen, app name, icons) |
| `sw.js` | Service worker — works offline after one online visit |
| `icon-192.png`, `icon-512.png` | App icons |
| `robots.txt`, `sitemap.xml` | Search engine discovery |
| `version.json` | Current app version, used for the self-update check |

---

## Documents (`docs/`)

| File | What it is |
|---|---|
| `AIIMS-Patna-Sarthi-App-Guide.pdf` | One-page colourful overview of every feature |
| `AIIMS-Patna-Sarthi-Concept-Note.pdf` | Problem, solution, market, team, ask |
| `AIIMS-Patna-Sarthi-Pilot-Proposal.pdf` | Four-week no-cost pilot plan for one OPD department |
| `CDSCO_AIIMS-Patna-Sarthi-English.pdf` | Regulatory position and intended-use statement |
| `AIIMS-Patna-Sarthi-Phase2-Biotech-Plan.pdf` | Phase 2 plan — QR sample kit (biotech consumable) |
| `AIIMS-Patna-Sarthi-Pitch-Deck.html` | Pitch deck (open in a browser, arrow keys to move) |
| `aiims_patna_sarthi_problem_solution.pdf` | Problem and solution one-pager |
| `apic_workshop_guide.pdf` | Workshop preparation and question list |
| `aiims_checklist.pdf` | Checklist before visiting AIIMS Patna |
| `business_plan_one_pager.pdf` | Business plan, one page |
| `project_budget.xlsx` | Project cost and funding sheet |
| `followup_email_whatsapp.pdf` | Follow-up email and WhatsApp templates |
| `demo_video_script.pdf` | Two-minute demo video script |
| `poster_small.pdf`, `qr_poster.pdf` | QR posters |
| `visiting_card.pdf` | Visiting card |

---

## Roadmap

- **Phase 1 (done)** — the app, live and free
- **Phase 2** — QR-labelled specimen collection vial plus live sample tracking, built with a licensed manufacturing partner
- **Next** — pilot in one AIIMS Patna OPD department, then other government hospitals in Bihar

---

## Keywords

AIIMS Patna · AIIMS Patna app · AIIMS Patna OPD · OPD token · hospital navigation app · patient app Patna · hospital wayfinding · Bihar health app · ABHA · Ayushman Bharat · digital health India

---

## Contact

**Abhinav Kumar**
Mobile: +91 7903083597 / +91 8864097706
Email: sanjaykumarpathak1377@gmail.com

> **Demo note:** this is a working prototype using sample data only. Please do not enter real patient information.
