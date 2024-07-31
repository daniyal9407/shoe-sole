import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    build: {
      outDir: 'dist',  // Default output directory
      assetsDir: 'assets',  // Directory for assets (js, css, etc.)
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',  // Customize entry file names
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
});
