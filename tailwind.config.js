export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        // Main colors
        "main-clr": "#004876",
        "secondary-clr": "#3B2F2F",
        "dark-secondary-clr": "#292625",
        "light-secondary-clr": "#6F4336",

        // Backgrounds colors
        "main-bg": "#6F4336",
        "border-clr": "#6F4336",

        // Text colors
        "default-clr": "#3B2F2F",
        "grey-clr": "#8B8BA5",
        "light-clr": "#FFFFFF95",
      },
      fontFamily: {
        cormorant: ["Cormorant Infant", "ui-sans-serif", "system-ui"],
      },
    },
  },
};
