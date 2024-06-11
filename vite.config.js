import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: [
        'chrome <= 119',
        'edge <= 119',
        'safari <= 17.1',
        'firefox <= 116',
        'opera <= 105',
        'ie <= 11',
        'ios_saf <= 17.1',
        'Samsung <= 25',
        'last 1 op_mini version',
        'op_mob <= 12.1',
        'last 1 and_uc version',
        'Android <= 4.4.4',
        'last 1 and_qq version',
        'last 1 Baidu version',
        'last 2 kaios versions']
      })]
})
