import React, { useState } from "react";
import UrlInput from "./components/UrlInput";
import WordCloud3D from "./components/WordCloud3D";

function App() {
  const [data, setData] = useState([]);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>📰 3D News Topic Visualizer</h1>
      <UrlInput onData={setData} />
      {data.length > 0 && <WordCloud3D data={data} />}
    </div>
  );
}

export default App;
