# Chinese → English Translator App (TXT + EPUB)

This project is now a **working desktop app** (Tkinter) that translates:

- `.txt` files (Chinese text)
- `.epub` files (extracts readable content then translates)
- pasted Chinese text

It uses the **Google Cloud Translation API** for machine translation.

## What it does

1. Open a TXT or EPUB file (or paste text).
2. Splits long text into safe API-sized chunks.
3. Sends each chunk to Google Translate (`zh` → `en`).
4. Shows translated English output.
5. Save output as `.txt`.

## Requirements

- Python 3.10+
- Google Cloud project with Translation API enabled
- API key with access to Translation API

## Setup

### 1) Set your API key

```bash
export GOOGLE_API_KEY="YOUR_KEY_HERE"
```

On Windows PowerShell:

```powershell
$env:GOOGLE_API_KEY="YOUR_KEY_HERE"
```

### 2) Run the app

```bash
python run_translator.py
```

## Notes

- Source language is currently fixed to Chinese (`zh`) and target is English (`en`).
- EPUB parser reads XHTML/HTML sections in spine order.
- If an EPUB uses DRM/proprietary structure, extraction may be incomplete.

## Files

- `run_translator.py`: launcher
- `translator/app.py`: Tkinter UI + workflow
- `translator/google_translate.py`: Google API client
- `translator/epub_reader.py`: EPUB extraction
