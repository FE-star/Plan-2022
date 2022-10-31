import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { pre, post } from './plugins/namespace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pre(), vue(), post()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: './src/App.vue',
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    }
  }
});
