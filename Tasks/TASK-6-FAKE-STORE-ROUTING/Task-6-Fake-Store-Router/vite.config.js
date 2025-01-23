import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000, // Change to a different port if 5173 is in use
  },
  plugins: [react()],
});
