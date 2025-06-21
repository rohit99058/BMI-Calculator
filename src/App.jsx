import { useMemo, useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleReset = () => {
    setWeight(0);
    setHeight(0);
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>💪 BMI Calculator 📏</h1>

      <div style={styles.inputSection}>
        <p style={styles.label}>⚖️ Weight: <strong>{weight} KG</strong></p>
        <input
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={handleWeight}
          style={styles.slider}
        />

        <p style={styles.label}>📏 Height: <strong>{height} cm</strong></p>
        <input
          type="range"
          min="120"
          max="220"
          value={height}
          onChange={handleHeight}
          style={styles.slider}
        />

        <button onClick={handleReset} style={styles.resetBtn}>🔄 Reset</button>
      </div>

      <div style={styles.outputBox}>
        <p style={styles.bmiLabel}>📊 Your BMI is:</p>
        <p style={styles.bmiValue}>
          {weight && height ? output : "0.0"} 🧠
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "2rem",
    background: "#f0f4f8",
    borderRadius: "1rem",
    width: "90%",
    maxWidth: "500px",
    margin: "2rem auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  inputSection: {
    marginBottom: "2rem",
  },
  label: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  },
  slider: {
    width: "100%",
    margin: "1rem 0",
  },
  resetBtn: {
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    background: "#ff5252",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  outputBox: {
    padding: "1rem",
    borderRadius: "0.8rem",
    backgroundColor: "#dff0d8",
    color: "#3c763d",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
  },
  bmiLabel: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  bmiValue: {
    fontSize: "2rem",
    color: "#2c3e50",
  },
};
