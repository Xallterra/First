from __future__ import annotations

<<<<<<< HEAD
from translator.libre_translate import LibreTranslateError, LibreTranslator


class GoogleTranslateError(LibreTranslateError):
    """Compatibility alias to avoid breakage on branches that still import GoogleTranslateError."""


class GoogleTranslator(LibreTranslator):
    """
    Compatibility shim.

    This project now uses LibreTranslate, but older branches may still reference
    GoogleTranslator/GoogleTranslateError. We map those names to LibreTranslate
    so merge resolution stays straightforward.
    """

=======
import json
import os
from typing import Iterable
from urllib import parse, request

GOOGLE_TRANSLATE_URL = "https://translation.googleapis.com/language/translate/v2"


class GoogleTranslateError(RuntimeError):
    """Raised when Google Translate API returns an error response."""


class GoogleTranslator:
    def __init__(self, api_key: str | None = None, source: str = "zh", target: str = "en") -> None:
        self.api_key = api_key or os.getenv("GOOGLE_API_KEY")
        if not self.api_key:
            raise ValueError("Missing GOOGLE_API_KEY. Set it in your environment or pass api_key explicitly.")
        self.source = source
        self.target = target

    def translate_chunks(self, chunks: Iterable[str]) -> list[str]:
        translated: list[str] = []
        for chunk in chunks:
            if not chunk.strip():
                translated.append(chunk)
                continue
            translated.append(self._translate_text(chunk))
        return translated

    def _translate_text(self, text: str) -> str:
        payload = {
            "q": text,
            "source": self.source,
            "target": self.target,
            "format": "text",
            "key": self.api_key,
        }

        data = parse.urlencode(payload).encode("utf-8")
        req = request.Request(GOOGLE_TRANSLATE_URL, data=data, method="POST")

        try:
            with request.urlopen(req, timeout=30) as response:
                body = response.read().decode("utf-8")
        except Exception as exc:  # network/runtime failures
            raise GoogleTranslateError(f"Request failed: {exc}") from exc

        parsed = json.loads(body)
        if "error" in parsed:
            message = parsed["error"].get("message", "Unknown Google Translate error")
            raise GoogleTranslateError(message)

        data_field = parsed.get("data", {})
        translations = data_field.get("translations", [])
        if not translations:
            raise GoogleTranslateError("No translation returned by Google API.")
        return translations[0].get("translatedText", "")
>>>>>>> origin/master
