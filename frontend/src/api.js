import axios from "axios";

export const analyzeArticle = async (url) => {
  const response = await axios.post("http://127.0.0.1:8000/analyze", { url });
  return response.data.topics;
};
