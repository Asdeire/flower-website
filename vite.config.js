import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin'; 

export default defineConfig({
  root: 'src',

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, 
      },
    },
    cssCodeSplit: true, 

    rollupOptions: {
      plugins: [
        viteImagemin({
          mozjpeg: {
            quality: 75, 
          },
          pngquant: {
            quality: [0.6, 0.8], 
          },
          svgo: {
            plugins: [
              { removeViewBox: false }, 
            ],
          },
        }),
      ],
    },
  },

  plugins: [react(), svgr()],
  base: "/flower-website",
});
