import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { androidIconSvgPlugin } from './scripts/icon-svg-plugin';

export default defineConfig({
  plugins: [vue(), androidIconSvgPlugin()],
  clearScreen: false,
  server: {
    host: process.env.TAURI_DEV_HOST || '127.0.0.1',
    port: 17520,
    strictPort: true,
  },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri 浼氭妸鏁翠釜 dist 宓屽叆鍙墽琛屾枃浠讹紝蹇呴』娓呯┖鏃х殑鍝堝笇璧勬簮锛岄伩鍏嶅崟鏂囦欢鎸佺画鑶ㄨ儉銆?    emptyOutDir: true,
    target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
    minify: !process.env.TAURI_DEBUG ? 'oxc' : false,
    sourcemap: !!process.env.TAURI_DEBUG,
    // 褰撳墠妗岄潰绔皢椤甸潰涓?Font Awesome 璧勬簮鍚堝苟涓哄崟涓€涓诲寘锛屽厑璁稿叾鍦?Tauri 鍗曟枃浠跺満鏅笅淇濇寔瀹屾暣銆?    chunkSizeWarningLimit: 2500,
  },
});
