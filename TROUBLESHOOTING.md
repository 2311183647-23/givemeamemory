# 网站空白页问题排查指南

## 已修复的问题

✅ **Base 路径配置** - 已添加 GitHub Pages 的 base 路径支持
✅ **GitHub Actions 配置** - 已更新构建配置
✅ **HTML 资源路径** - 已清理无效的 CSS 引用

## 检查步骤

### 1. 确认 GitHub Pages 已启用

1. 打开你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 确认 **Source** 设置为 **GitHub Actions**
5. 如果显示 "Your site is live at..."，说明已启用

### 2. 检查 GitHub Actions 构建状态

1. 在仓库页面，点击 **Actions** 标签
2. 查看最新的工作流运行状态
3. 如果显示 ❌（红色），点击查看错误信息
4. 如果显示 ✅（绿色），说明构建成功

### 3. 检查构建产物

如果构建成功但页面仍空白：

1. 在仓库页面，点击 **Settings** → **Pages**
2. 查看部署的 URL
3. 访问该 URL，打开浏览器开发者工具（F12）
4. 查看 **Console**（控制台）标签，看是否有错误信息
5. 查看 **Network**（网络）标签，检查资源是否加载失败

### 4. 确认仓库名称

如果你的仓库名称是 `username.github.io`（例如 `iseegreenray.github.io`），需要特殊配置：

**修改 `vite.config.ts`**：
```typescript
base: '/',  // 对于 username.github.io 类型的仓库
```

如果你的仓库名称是其他名称（例如 `iseegreenray-blog`），base 路径应该是 `/iseegreenray-blog/`（已自动配置）。

### 5. 手动触发重新部署

1. 在 GitHub Desktop 中，提交并推送刚才的修复
2. 或者访问仓库的 **Actions** 标签
3. 选择 "Deploy to GitHub Pages" 工作流
4. 点击 **Run workflow** 手动触发

## 常见错误及解决方案

### 错误：404 Not Found

**原因**：Base 路径配置不正确

**解决**：
1. 确认你的仓库名称
2. 如果是 `username.github.io`，修改 `vite.config.ts` 中的 base 为 `/`
3. 如果是其他名称，确保 base 是 `/repository-name/`

### 错误：资源加载失败（CSS/JS 文件 404）

**原因**：路径配置问题

**解决**：
1. 检查 `vite.config.ts` 中的 `base` 配置
2. 重新构建并推送代码

### 错误：构建失败

**原因**：依赖问题或配置错误

**解决**：
1. 查看 Actions 中的错误日志
2. 确认 `package.json` 中的依赖都正确
3. 尝试在本地运行 `npm install` 和 `npm run build` 检查是否有错误

### 页面空白但无错误

**可能原因**：
1. React 应用没有正确挂载
2. 路由配置问题

**解决**：
1. 打开浏览器开发者工具（F12）
2. 查看 Console 是否有 JavaScript 错误
3. 检查 Network 标签，确认所有资源都已加载
4. 查看 Elements 标签，确认 `<div id="root">` 中是否有内容

## 测试本地构建

在推送修复之前，可以先在本地测试：

```powershell
# 安装依赖（如果还没有）
npm install

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

如果本地预览正常，说明配置正确，问题可能在 GitHub Pages 设置。

## 需要帮助？

如果以上步骤都无法解决问题，请提供以下信息：

1. 你的 GitHub 仓库名称
2. GitHub Actions 的构建日志（如果有错误）
3. 浏览器控制台的错误信息（F12 → Console）
4. 你的网站 URL

