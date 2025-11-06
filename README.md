# News 3D Word Cloud Visualizer

An interactive full-stack web application that visualizes the main topics from any news article as a **3D word cloud**.

This project combines a **FastAPI backend** (for text extraction and topic modeling) with a **React + Three.js (React Three Fiber)** frontend for dynamic, visually engaging topic visualization.

---

## Features

- **Article Fetching:** Extracts article text from any valid URL.
- **Topic Modeling:** Identifies and weights the most significant keywords using TF-IDF.
- **3D Visualization:** Displays extracted topics as an interactive 3D word cloud.
- **Seamless Integration:** Connects the React frontend with FastAPI backend through REST APIs.

---

## Tech Stack

### **Frontend**
- React
- React Three Fiber (Three.js)
- Axios

### **Backend**
- Python 3
- FastAPI
- scikit-learn
- BeautifulSoup / Newspaper3k

---

##  Installation and Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/news-3d-wordcloud.git
cd news-3d-wordcloud
```

### 2️⃣ Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate        # macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend runs at → http://127.0.0.1:8000
### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
Frontend runs at → http://localhost:3000

## How It Works

1.Enter a news article URL in the input box on the frontend.

2.The frontend sends a POST request to the backend /analyze endpoint.

3.FastAPI fetches, cleans, and processes the article text.

4.The backend extracts top topics via TF-IDF and returns them as JSON.

5.The frontend renders these topics as a colorful 3D word cloud.

## Example Test URLs
https://en.wikipedia.org/wiki/Artificial_intelligence
https://en.wikipedia.org/wiki/Machine_learning



