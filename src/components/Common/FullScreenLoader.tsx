import React from "react";

const FullScreenLoader = () => {
  return (
    <div style={styles.backdrop}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backdropFilter: "blur(8px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: "64px",
    height: "64px",
    border: "8px solid rgba(255, 255, 255, 0.3)",
    borderTop: "8px solid #ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// Append keyframes dynamically (optional if you're not using CSS files)
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default FullScreenLoader;
