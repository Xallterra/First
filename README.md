# Chinese → English Translator App (TXT + EPUB)

This project is now a **working desktop app** (Tkinter) that translates:

- `.txt` files (Chinese text)
- `.epub` files (extracts readable content then translates)
- pasted Chinese text

<<<<<<< HEAD
It uses **LibreTranslate** for machine translation.
=======
It uses the **Google Cloud Translation API** for machine translation.
>>>>>>> origin/master

## What it does

1. Open a TXT or EPUB file (or paste text).
2. Splits long text into safe API-sized chunks.
<<<<<<< HEAD
3. Sends each chunk to LibreTranslate (`zh` → `en`).
=======
3. Sends each chunk to Google Translate (`zh` → `en`).
>>>>>>> origin/master
4. Shows translated English output.
5. Save output as `.txt`.

## Requirements

- Python 3.10+
<<<<<<< HEAD
- LibreTranslate endpoint (public or self-hosted)
- Optional LibreTranslate API key (some hosted providers require this)

## Setup

### 1) Configure LibreTranslate

```bash
export LIBRETRANSLATE_URL="https://libretranslate.com/translate"
export LIBRETRANSLATE_API_KEY="YOUR_KEY_HERE"
export TRANSLATION_BACKEND="libre"
=======
- Google Cloud project with Translation API enabled
- API key with access to Translation API

## Setup

### 1) Set your API key

```bash
export GOOGLE_API_KEY="YOUR_KEY_HERE"
>>>>>>> origin/master
```

On Windows PowerShell:

```powershell
<<<<<<< HEAD
$env:LIBRETRANSLATE_URL="https://libretranslate.com/translate"
$env:LIBRETRANSLATE_API_KEY="YOUR_KEY_HERE"
$env:TRANSLATION_BACKEND="libre"
=======
$env:GOOGLE_API_KEY="YOUR_KEY_HERE"
>>>>>>> origin/master
```

### 2) Run the app

```bash
python run_translator.py
```

## Notes

- Source language is currently fixed to Chinese (`zh`) and target is English (`en`).
- EPUB parser reads XHTML/HTML sections in spine order.
- If an EPUB uses DRM/proprietary structure, extraction may be incomplete.
<<<<<<< HEAD
- If your LibreTranslate provider is rate-limited, use a private/self-hosted endpoint.
- `TRANSLATION_BACKEND=google` is supported as a compatibility alias for merge/rebase scenarios; it routes through the same translator interface.
=======
>>>>>>> origin/master

## Files

- `run_translator.py`: launcher
- `translator/app.py`: Tkinter UI + workflow
<<<<<<< HEAD
- `translator/libre_translate.py`: LibreTranslate API client
- `translator/google_translate.py`: compatibility shim for older branches
=======
- `translator/google_translate.py`: Google API client
>>>>>>> origin/master
- `translator/epub_reader.py`: EPUB extraction
