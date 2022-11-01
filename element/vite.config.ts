import { fileURLToPath, URL } from "node:url";
// @ts-ignore
import pkg from './package.json'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
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
      external: Object.keys(pkg.dependencies),
    },
    lib: {
      entry: './src/App.vue',
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`,
      // amd is support !
      // @ts-ignore
      formats: ['es', 'amd', 'system'],
    }
  }
});
