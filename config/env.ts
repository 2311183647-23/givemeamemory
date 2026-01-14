/**
 * 统一管理运行时环境变量（浏览器端）。
 *
 * 约定：
 * - 本项目通过 `vite.config.ts` 将 `.env` 里的 `GEMINI_API_KEY` 注入到 `process.env.GEMINI_API_KEY`。
 * - 业务代码请只从这里读取环境变量，避免到处散落 `process.env.xxx`。
 */

type EnvShape = {
  GEMINI_API_KEY?: string;
};

// Vite `define` 注入的是字符串字面量；这里做一次 safe 读取。
const rawEnv: EnvShape = (globalThis as any)?.process?.env ?? {};

export const ENV = {
  GEMINI_API_KEY: rawEnv.GEMINI_API_KEY,
} as const;

export function requireEnv<K extends keyof typeof ENV>(key: K): NonNullable<(typeof ENV)[K]> {
  const value = ENV[key];
  if (!value) {
    throw new Error(
      `[env] 缺少必要环境变量：${String(key)}。` +
        `\n请在项目根目录创建 .env，并设置：${String(key)}=...`
    );
  }
  return value as NonNullable<(typeof ENV)[K]>;
}




