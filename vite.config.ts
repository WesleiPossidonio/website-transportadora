import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://gaspartransportes.com.br', // substitua pelo domínio do seu site
      dynamicRoutes: [
        '/',
      ],
    }),

  ],
})