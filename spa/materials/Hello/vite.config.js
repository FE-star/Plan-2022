import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // 'react/jsx-runtime': 'React'
        }
      }
    },
    lib: {
      entry: './src/App.jsx',
      name: 'Hello',
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'amd', 'umd'],
    }
  }
})
