from __future__ import annotations

import json
import os
from typing import Iterable
from urllib import parse, request

DEFAULT_LIBRETRANSLATE_URL = "https://libretranslate.com/translate"


class LibreTranslateError(RuntimeError):
    """Raised when LibreTranslate returns an error response."""


class LibreTranslator:
    def __init__(
        self,
        api_key: str | None = None,
        source: str = "zh",
        target: str = "en",
        endpoint: str | None = None,
    ) -> None:
        self.api_key = api_key or os.getenv("LIBRETRANSLATE_API_KEY", "")
        self.source = source
        self.target = target
        self.endpoint = endpoint or os.getenv("LIBRETRANSLATE_URL", DEFAULT_LIBRETRANSLATE_URL)

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
        }
        if self.api_key:
            payload["api_key"] = self.api_key

        data = parse.urlencode(payload).encode("utf-8")
        req = request.Request(self.endpoint, data=data, method="POST")

        try:
            with request.urlopen(req, timeout=30) as response:
                body = response.read().decode("utf-8")
        except Exception as exc:
            raise LibreTranslateError(f"Request failed: {exc}") from exc

        parsed = json.loads(body)
        if "error" in parsed:
            raise LibreTranslateError(str(parsed["error"]))

        translated_text = parsed.get("translatedText")
        if translated_text is None:
            raise LibreTranslateError("No translatedText field returned by LibreTranslate.")
        return translated_text
