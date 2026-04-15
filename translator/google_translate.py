from __future__ import annotations

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

