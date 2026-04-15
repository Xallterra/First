import unittest

from translator.epub_reader import _extract_text_from_html


class EpubReaderTests(unittest.TestCase):
    def test_extract_text_from_html(self) -> None:
        html = "<html><body><h1>标题</h1><p>第一句。</p><p>第二句。</p></body></html>"
        text = _extract_text_from_html(html)
        self.assertIn("标题", text)
        self.assertIn("第一句。", text)
        self.assertIn("第二句。", text)


if __name__ == "__main__":
    unittest.main()
