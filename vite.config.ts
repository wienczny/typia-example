import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        UnpluginTypia(),
        vue()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
})
