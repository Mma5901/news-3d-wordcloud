import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

// --- Single Word Component ---
function Word({ word, weight }) {
  // Smaller, balanced scaling for clear readability
  const size = 1.2 + weight * 2.5;
  const color = `hsl(${Math.random() * 360}, 90%, 75%)`;

  return (
    <Text
      position={[
        (Math.random() - 0.5) * 15, // tight horizontal spread
        (Math.random() - 0.5) * 15, // tight vertical spread
        0, // all in same Z plane for clarity
      ]}
      fontSize={size}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {word}
    </Text>
  );
}

// --- Main Word Cloud Component ---
function WordCloud3D({ data }) {
  return (
    <div
      style={{
        width: "400px", // perfect square
        height: "400px",
        margin: "60px auto",
        borderRadius: "20px",
        background:
          "radial-gradient(circle at center, #0f172a 0%, #1e293b 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 25px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 30], // zoomed for full visibility
          fov: 50,
        }}
      >
        <ambientLight intensity={2.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* ✅ All words rendered inside visible space */}
        {data.map((d, i) => (
          <Word key={i} word={d.word} weight={d.weight} />
        ))}
      </Canvas>
    </div>
  );
}

export default WordCloud3D;
