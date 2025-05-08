import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/32-pbk-uts-233510551/',
  plugins: [vue(),
    tailwindcss()
  ],
})
