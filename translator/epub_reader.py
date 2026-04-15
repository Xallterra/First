from __future__ import annotations

import re
import zipfile
from html.parser import HTMLParser
from pathlib import PurePosixPath
from xml.etree import ElementTree as ET


class _HTMLTextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        cleaned = data.strip()
        if cleaned:
            self.parts.append(cleaned)


def _extract_text_from_html(html_content: str) -> str:
    parser = _HTMLTextExtractor()
    parser.feed(html_content)
    return "\n".join(parser.parts)


def extract_epub_text(epub_path: str) -> str:
    with zipfile.ZipFile(epub_path, "r") as archive:
        container_xml = archive.read("META-INF/container.xml")
        container_root = ET.fromstring(container_xml)

        namespace = {"c": "urn:oasis:names:tc:opendocument:xmlns:container"}
        rootfile = container_root.find(".//c:rootfile", namespace)
        if rootfile is None:
            raise ValueError("Invalid EPUB: package rootfile is missing.")

        opf_path = rootfile.attrib.get("full-path")
        if not opf_path:
            raise ValueError("Invalid EPUB: package path is missing.")

        opf_data = archive.read(opf_path)
        opf_root = ET.fromstring(opf_data)

        package_ns = {"opf": "http://www.idpf.org/2007/opf"}

        manifest = {
            item.attrib.get("id", ""): item.attrib.get("href", "")
            for item in opf_root.findall(".//opf:manifest/opf:item", package_ns)
        }

        ordered_paths: list[str] = []
        opf_base = PurePosixPath(opf_path).parent

        for itemref in opf_root.findall(".//opf:spine/opf:itemref", package_ns):
            item_id = itemref.attrib.get("idref", "")
            href = manifest.get(item_id)
            if not href:
                continue
            ordered_paths.append(str(opf_base / href))

        book_sections: list[str] = []
        for section_path in ordered_paths:
            if not section_path.lower().endswith((".xhtml", ".html", ".htm")):
                continue
            content = archive.read(section_path).decode("utf-8", errors="ignore")
            text = _extract_text_from_html(content)
            if text:
                book_sections.append(text)

        plain_text = "\n\n".join(book_sections)
        return re.sub(r"\n{3,}", "\n\n", plain_text).strip()
