import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        autoplay_video: resolve(__dirname, 'ai_video_cost_autoplay_video.html')
      }
    }
  }
});
