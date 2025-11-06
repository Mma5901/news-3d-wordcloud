import React, { useState } from "react";

function UrlInput({ onData }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!url) {
      alert("Please enter a valid URL");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Error fetching or analyzing article");
      }

      const data = await response.json();
      onData(data.topics);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error fetching or analyzing article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter article URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "8px",
          border: "2px solid #007bff",
          marginRight: "10px",
          fontSize: "1rem",
        }}
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        style={{
          backgroundColor: loading ? "#6c757d" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "12px 20px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "1rem",
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {loading && (
        <div style={{ marginTop: "20px" }}>
          <div className="spinner"></div>
          <p style={{ color: "#ddd", fontSize: "1.1rem" }}>Analyzing article...</p>
        </div>
      )}
    </div>
  );
}

export default UrlInput;
