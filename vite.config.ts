import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public', // 指定静态资源目录
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    hmr: true, // 热更新
  },
  assetsInclude: ['**/*.md'], // 将 .md 文件视为静态资源
  resolve: {
    // 导入以下文件时不用带后缀名
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      // 基础别名（@ 指向 src）
      '@': path.resolve(__dirname, 'src'),
      // 自定义路径别名
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@assets/styles/variables.scss" as *;
          @use "@assets/styles/mixins.scss" as *;
        `
      }
    }
  }
})
