from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from utils.text_extractor import extract_text
from utils.topic_model import get_keywords

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Article(BaseModel):
    url: str

@app.post("/analyze")
def analyze_article(article: Article):
    try:
        text = extract_text(article.url)
        keywords = get_keywords(text)
        return {"topics": keywords}
    except Exception as e:
        print(f"❌ ERROR: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
