import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 新增

// __dirname = 'F:\\web\\vite-project\\'
const dirname = __dirname;
console.log(dirname)
// https://vitejs.dev/config/
export default defineConfig({
    assetsInclude: ['**/*.png'],
    base: path.resolve(dirname, './dist/'), // not work
    // base: 'F:\\\\web\\\\vite-project\\\\dist\\\\', // work
    plugins: [vue()],
})