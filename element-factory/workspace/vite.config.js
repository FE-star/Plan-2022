import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import vue from '@vitejs/plugin-vue'
import compile from '../src/index.mjs'

function plugin() {
    return {
        name: 'transform-tpl',
        transform(src, id) {
            if (/\.tpl$/.test(id)) {
                const code = compile(src, {})
                return { code }
            }
        }
    }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), plugin()],
  build: {
    rollupOptions: {
        external: [
            'vue',
        ],
        output: {
            globals: {
                'vue': 'Vue'
            },
        },
    },
    lib: {
        entry: './app.tpl',
        name: 'MyLib',
        // the proper extensions will be added
        fileName: (format) => `index.${format}.js`,
        formats: ['es', 'amd', 'umd'],
    }
  },
  resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  }
})
