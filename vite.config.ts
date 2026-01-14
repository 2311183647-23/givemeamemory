import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // GitHub Pages base 路径配置
    // 如果仓库名称是 username.github.io，base 应该是 '/'
    // 如果是其他名称（如 iseegreenray-blog），base 应该是 '/iseegreenray-blog/'
    // 可以通过环境变量 VITE_BASE_PATH 设置，默认为 '/'
    let base = '/';
    if (process.env.VITE_BASE_PATH) {
      base = process.env.VITE_BASE_PATH;
    } else if (process.env.GITHUB_REPOSITORY) {
      const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
      // 如果是 username.github.io 类型的仓库，使用根路径
      base = repoName.includes('.github.io') ? '/' : `/${repoName}/`;
    }
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
