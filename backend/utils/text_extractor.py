import requests
from bs4 import BeautifulSoup

def extract_text(url):
    try:
        # Always use BeautifulSoup fallback directly (simpler + reliable)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")
        paragraphs = soup.find_all("p")
        text = " ".join(p.get_text() for p in paragraphs)
        if not text.strip():
            raise ValueError("No readable text found in page")
        print("✅ Extracted text using BeautifulSoup")
        return text
    except Exception as e:
        print(f"❌ Failed to extract text: {e}")
        raise RuntimeError(f"Failed to fetch article content: {e}")
