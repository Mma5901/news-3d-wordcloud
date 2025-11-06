from sklearn.feature_extraction.text import TfidfVectorizer

def get_keywords(text, top_n=20):
    vectorizer = TfidfVectorizer(stop_words='english', max_features=top_n)
    X = vectorizer.fit_transform([text])
    scores = X.toarray()[0]
    words = vectorizer.get_feature_names_out()
    result = [{"word": w, "weight": float(s)} for w, s in zip(words, scores)]
    result.sort(key=lambda x: x["weight"], reverse=True)
    return result
