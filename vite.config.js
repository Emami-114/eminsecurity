import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const indexPath = path.resolve(__dirname, 'dist', 'index.html');
        const notFoundPath = path.resolve(__dirname, 'dist', '404.html');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
        }
      }
    }
  ],
  base: '/eminsecurity/',
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true,
      interval: 100
    }
  }
});
