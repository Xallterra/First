from __future__ import annotations

import textwrap
import tkinter as tk
from pathlib import Path
from tkinter import filedialog, messagebox, ttk

<<<<<<< HEAD
import os

from translator.epub_reader import extract_epub_text
from translator.google_translate import GoogleTranslateError, GoogleTranslator
from translator.libre_translate import LibreTranslateError, LibreTranslator
=======
from translator.epub_reader import extract_epub_text
from translator.google_translate import GoogleTranslateError, GoogleTranslator
>>>>>>> origin/master

MAX_CHARS_PER_REQUEST = 4000


def split_text(text: str, max_chars: int = MAX_CHARS_PER_REQUEST) -> list[str]:
    chunks: list[str] = []
    for paragraph in text.split("\n\n"):
        paragraph = paragraph.strip()
        if not paragraph:
            continue
        if len(paragraph) <= max_chars:
            chunks.append(paragraph)
        else:
            wrapped = textwrap.wrap(paragraph, width=max_chars, break_long_words=False)
            if len(wrapped) == 1 and len(wrapped[0]) > max_chars:
                wrapped = [paragraph[i : i + max_chars] for i in range(0, len(paragraph), max_chars)]
            chunks.extend(wrapped)
    return chunks


class TranslatorApp:
    def __init__(self, root: tk.Tk) -> None:
        self.root = root
<<<<<<< HEAD
        self.root.title("Chinese to English Translator (TXT/EPUB)")
=======
        self.root.title("Chinese to English Translator (TXT/EPUB + Google API)")
>>>>>>> origin/master
        self.root.geometry("980x760")

        self.input_path: Path | None = None

        container = ttk.Frame(root, padding=16)
        container.pack(fill=tk.BOTH, expand=True)

        actions = ttk.Frame(container)
        actions.pack(fill=tk.X)

        ttk.Button(actions, text="Open TXT", command=self.open_txt).pack(side=tk.LEFT, padx=(0, 8))
        ttk.Button(actions, text="Open EPUB", command=self.open_epub).pack(side=tk.LEFT, padx=(0, 8))
        ttk.Button(actions, text="Translate", command=self.translate).pack(side=tk.LEFT, padx=(0, 8))
        ttk.Button(actions, text="Save English Output", command=self.save_output).pack(side=tk.LEFT)

        self.status_var = tk.StringVar(value="Load Chinese text or EPUB, then click Translate.")
        ttk.Label(container, textvariable=self.status_var).pack(anchor=tk.W, pady=(10, 8))

        panes = ttk.Panedwindow(container, orient=tk.HORIZONTAL)
        panes.pack(fill=tk.BOTH, expand=True)

        left = ttk.Labelframe(panes, text="Source (Chinese)", padding=8)
        right = ttk.Labelframe(panes, text="Translation (English)", padding=8)
        panes.add(left, weight=1)
        panes.add(right, weight=1)

        self.source_text = tk.Text(left, wrap=tk.WORD)
        self.source_text.pack(fill=tk.BOTH, expand=True)

        self.target_text = tk.Text(right, wrap=tk.WORD)
        self.target_text.pack(fill=tk.BOTH, expand=True)

    def open_txt(self) -> None:
        path = filedialog.askopenfilename(filetypes=[("Text files", "*.txt")])
        if not path:
            return
        self.input_path = Path(path)
        text = self.input_path.read_text(encoding="utf-8", errors="ignore")
        self.source_text.delete("1.0", tk.END)
        self.source_text.insert(tk.END, text)
        self.status_var.set(f"Loaded TXT: {self.input_path.name}")

    def open_epub(self) -> None:
        path = filedialog.askopenfilename(filetypes=[("EPUB files", "*.epub")])
        if not path:
            return
        self.input_path = Path(path)
        try:
            text = extract_epub_text(path)
        except Exception as exc:
            messagebox.showerror("EPUB Parse Error", str(exc))
            return

        self.source_text.delete("1.0", tk.END)
        self.source_text.insert(tk.END, text)
        self.status_var.set(f"Loaded EPUB: {self.input_path.name}")

    def translate(self) -> None:
        source = self.source_text.get("1.0", tk.END).strip()
        if not source:
            messagebox.showwarning("No source text", "Load or paste Chinese text before translating.")
            return

        chunks = split_text(source)
        if not chunks:
            messagebox.showwarning("No text", "No usable text was detected.")
            return

<<<<<<< HEAD
        self.status_var.set("Translating...")
        self.root.update_idletasks()

        try:
            backend = os.getenv("TRANSLATION_BACKEND", "libre").strip().lower()
            if backend == "google":
                translator = GoogleTranslator(source="zh", target="en")
            else:
                translator = LibreTranslator(source="zh", target="en")
            translated_chunks = translator.translate_chunks(chunks)
        except (ValueError, LibreTranslateError, GoogleTranslateError) as exc:
=======
        self.status_var.set("Translating with Google API...")
        self.root.update_idletasks()

        try:
            translator = GoogleTranslator(source="zh", target="en")
            translated_chunks = translator.translate_chunks(chunks)
        except (ValueError, GoogleTranslateError) as exc:
>>>>>>> origin/master
            messagebox.showerror("Translation Error", str(exc))
            self.status_var.set("Translation failed.")
            return

        translated = "\n\n".join(translated_chunks)
        self.target_text.delete("1.0", tk.END)
        self.target_text.insert(tk.END, translated)
        self.status_var.set("Translation complete.")

    def save_output(self) -> None:
        translated = self.target_text.get("1.0", tk.END).strip()
        if not translated:
            messagebox.showwarning("No output", "Translate text before saving output.")
            return

        destination = filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Text files", "*.txt")])
        if not destination:
            return

        Path(destination).write_text(translated, encoding="utf-8")
        self.status_var.set(f"Saved translation: {Path(destination).name}")


def main() -> None:
    root = tk.Tk()
    app = TranslatorApp(root)
    app.root.mainloop()


if __name__ == "__main__":
    main()
