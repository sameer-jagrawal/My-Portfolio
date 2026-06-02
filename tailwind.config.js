/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050008",
        carbon: "#12051d",
        violet: "#b13cff",
        rose: "#ff2a55",
        lavender: "#c77dff",
        soft: "#f9f4ff",
      },
      boxShadow: {
        glow: "0 0 48px rgba(177, 60, 255, 0.36)",
        rose: "0 0 52px rgba(255, 42, 85, 0.24)",
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        scan: "scan 7s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(177, 60, 255, 0.22)" },
          "50%": { boxShadow: "0 0 55px rgba(199, 125, 255, 0.38)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-35%)" },
          "50%": { transform: "translateY(145%)" },
        },
      },
    },
  },
  plugins: [],
};
