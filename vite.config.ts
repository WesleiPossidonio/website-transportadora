import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Cria um chunk por pacote da node_modules
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Ajuste o limite para avisos de chunk
  },
})
