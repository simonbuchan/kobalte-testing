import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  server: {
    port: 9972,
  },
  plugins: [
    devtools({
      autoname: true,
      locator: {
        targetIDE: "webstorm",
      },
    }),
    solid(),
  ],
});
