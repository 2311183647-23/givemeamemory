# config/

用于集中放置“环境配置相关”的代码与说明，避免散落在各处。

## 环境变量

当前项目通过 `vite.config.ts` 从根目录 `.env` 读取 `GEMINI_API_KEY`，并注入到浏览器端的 `process.env.GEMINI_API_KEY`。

- 代码中统一从 `config/env.ts` 读取：`ENV.GEMINI_API_KEY` 或 `requireEnv('GEMINI_API_KEY')`
- 本地开发请在项目根目录创建 `.env`：

```ini
GEMINI_API_KEY=你的key
```




