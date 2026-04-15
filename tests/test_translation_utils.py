import unittest

from translator.app import split_text


class SplitTextTests(unittest.TestCase):
    def test_split_text_respects_size_limit(self) -> None:
        text = "段落" * 3000
        chunks = split_text(text, max_chars=1000)
        self.assertGreater(len(chunks), 1)
        self.assertTrue(all(len(chunk) <= 1000 for chunk in chunks))

    def test_split_text_ignores_empty_paragraphs(self) -> None:
        text = "\n\n第一段\n\n\n\n第二段"
        chunks = split_text(text, max_chars=100)
        self.assertEqual(chunks, ["第一段", "第二段"])


if __name__ == "__main__":
    unittest.main()
