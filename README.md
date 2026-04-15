# Chinese → English Translator App (TXT + EPUB)

This project is now a **working desktop app** (Tkinter) that translates:

- `.txt` files (Chinese text)
- `.epub` files (extracts readable content then translates)
- pasted Chinese text

It uses **LibreTranslate** for machine translation.

## What it does

1. Open a TXT or EPUB file (or paste text).
2. Splits long text into safe API-sized chunks.
3. Sends each chunk to LibreTranslate (`zh` → `en`).
4. Shows translated English output.
5. Save output as `.txt`.

## Requirements

- Python 3.10+
- LibreTranslate endpoint (public or self-hosted)
- Optional LibreTranslate API key (some hosted providers require this)

## Setup

### 1) Configure LibreTranslate

```bash
export LIBRETRANSLATE_URL="https://libretranslate.com/translate"
export LIBRETRANSLATE_API_KEY="YOUR_KEY_HERE"
export TRANSLATION_BACKEND="libre"
```

On Windows PowerShell:

```powershell
$env:LIBRETRANSLATE_URL="https://libretranslate.com/translate"
$env:LIBRETRANSLATE_API_KEY="YOUR_KEY_HERE"
$env:TRANSLATION_BACKEND="libre"
```

### 2) Run the app

```bash
python run_translator.py
```

## Notes

- Source language is currently fixed to Chinese (`zh`) and target is English (`en`).
- EPUB parser reads XHTML/HTML sections in spine order.
- If an EPUB uses DRM/proprietary structure, extraction may be incomplete.
- If your LibreTranslate provider is rate-limited, use a private/self-hosted endpoint.
- `TRANSLATION_BACKEND=google` is supported as a compatibility alias for merge/rebase scenarios; it routes through the same translator interface.

## Files

- `run_translator.py`: launcher
- `translator/app.py`: Tkinter UI + workflow
- `translator/libre_translate.py`: LibreTranslate API client
- `translator/google_translate.py`: compatibility shim for older branches
- `translator/epub_reader.py`: EPUB extraction
