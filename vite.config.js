import { defineConfig } from 'vite'

export default defineConfig({
  base: '/christmas-tree/',
  build: {
    chunkSizeWarningLimit: 50000, // 单位 KB，调到比最大 chunk 大即可
  },
})