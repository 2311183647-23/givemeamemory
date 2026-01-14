# GitHub 部署完整指南

本指南将帮助你将博客项目上传到 GitHub 并自动部署到 GitHub Pages，让网站可以通过链接直接访问。

## 📋 前提条件

### 1. 安装 Git（如果还没有安装）

**方法一：使用 Git 命令行工具**

1. 下载 Git：https://git-scm.com/download/win
2. 安装时**务必勾选** "Add Git to PATH" 选项
3. 安装完成后，**关闭并重新打开** PowerShell
4. 验证安装：运行 `git --version`，应该显示版本号

**方法二：使用 GitHub Desktop（推荐新手）⭐**

1. 下载 GitHub Desktop：https://desktop.github.com/
2. 安装并使用 GitHub 账号登录
3. GitHub Desktop 会自动处理 Git 配置，操作更简单

### 2. 创建 GitHub 账号

- 访问 https://github.com
- 注册并登录你的账号

---

## 🚀 部署步骤

### 步骤 1：在 GitHub 上创建新仓库

1. 登录 GitHub
2. 点击右上角的 **"+"** 按钮，选择 **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `givemeamemory-blog`（或你喜欢的名字）
   - **Description**: 可选，填写项目描述，如"个人博客网站"
   - **Visibility**: 选择 **Public**（公开）或 **Private**（私有）
   - ⚠️ **重要**：**不要**勾选 "Initialize this repository with a README"（项目已有文件）
4. 点击 **"Create repository"**

### 步骤 2：在本地初始化 Git 并上传代码

打开 PowerShell 或命令提示符，进入项目目录：

```powershell
cd "D:\0Myweb\个人网页\givemeamemory-blog"
```

#### 2.1 初始化 Git 仓库

```powershell
git init
```

#### 2.2 添加所有文件到暂存区

```powershell
git add .
```

#### 2.3 创建第一次提交

```powershell
git commit -m "Initial commit: 个人博客网站"
```

**如果是第一次使用 Git，需要先配置用户名和邮箱：**

```powershell
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

#### 2.4 添加远程仓库地址

将 `YOUR_USERNAME` 替换为你的 GitHub 用户名：

```powershell
git remote add origin https://github.com/YOUR_USERNAME/givemeamemory-blog.git
```

例如，如果你的用户名是 `yourname`，则命令为：
```powershell
git remote add origin https://github.com/yourname/givemeamemory-blog.git
```

#### 2.5 推送到 GitHub

```powershell
git branch -M main
git push -u origin main
```

**如果推送时提示需要身份验证：**

GitHub 已不再支持密码验证，需要使用 Personal Access Token：

1. 访问 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 填写名称（如 "blog-deploy"），勾选 `repo` 权限
4. 点击 "Generate token"，**复制生成的 token**（只显示一次）
5. 推送时：
   - 用户名：填你的 GitHub 用户名
   - 密码：填刚才复制的 token

### 步骤 3：启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings**（设置）标签
2. 在左侧菜单中找到 **Pages**
3. 在 **Source** 部分：
   - 选择 **"GitHub Actions"**（推荐，自动部署）
   - 或者选择 **"Deploy from a branch"**，然后选择 `main` 分支和 `/ (root)` 文件夹
4. 点击 **Save**（保存）

### 步骤 4：等待自动部署

项目已经配置了 GitHub Actions 工作流（`.github/workflows/deploy.yml`），当你推送代码后：

1. GitHub 会自动触发构建和部署
2. 在仓库页面，点击 **Actions** 标签可以查看部署进度
3. 看到绿色的 ✅ 表示部署成功
4. 部署完成后，你的网站地址将是：
   - 如果仓库名是 `username.github.io`：`https://username.github.io/`
   - 如果仓库名是其他名称（如 `givemeamemory-blog`）：`https://username.github.io/givemeamemory-blog/`

---

## ✅ 验证部署

1. **查看 Actions 状态**：
   - 在仓库页面点击 **Actions** 标签
   - 确认最新的工作流运行显示 ✅（绿色）

2. **访问网站**：
   - 在仓库页面点击 **Settings** → **Pages**
   - 查看 "Your site is live at..." 下的链接
   - 点击链接访问你的网站

3. **如果页面显示空白**：
   - 等待几分钟（首次部署可能需要时间）
   - 检查浏览器控制台（F12）是否有错误
   - 参考 `TROUBLESHOOTING.md` 文件排查问题

---

## 🔄 更新网站内容

当你修改了代码后，需要重新推送到 GitHub：

```powershell
git add .
git commit -m "更新说明：描述你的更改"
git push
```

推送后，GitHub Actions 会自动重新构建和部署，通常几分钟后网站就会更新。

---

## 🛠️ 使用 GitHub Desktop（图形界面方式）

如果你不想使用命令行，可以使用 GitHub Desktop：

1. **打开 GitHub Desktop**，使用 GitHub 账号登录
2. **添加本地仓库**：
   - 点击 "File" → "Add Local Repository"
   - 点击 "Choose..." 选择项目文件夹：`D:\0Myweb\个人网页\givemeamemory-blog`
   - 点击 "Add repository"
3. **发布到 GitHub**：
   - 点击 "Publish repository" 按钮
   - 取消勾选 "Keep this code private"（如果需要公开）
   - 点击 "Publish Repository"
4. **后续更新**：
   - 修改文件后，在 GitHub Desktop 中会显示更改
   - 在左下角填写提交信息
   - 点击 "Commit to main"
   - 点击 "Push origin" 推送到 GitHub

---

## ❓ 常见问题

### Q: 提示 "'git'不是内部或外部命令"？

**A:** Git 没有安装或没有添加到 PATH：

1. 安装 Git：https://git-scm.com/download/win
2. 安装时勾选 "Add Git to PATH"
3. 安装后**关闭并重新打开** PowerShell
4. 或者使用 GitHub Desktop（不需要命令行）

### Q: 推送时提示需要身份验证？

**A:** 需要使用 Personal Access Token：

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token，勾选 `repo` 权限
3. 推送时，用户名填 GitHub 用户名，密码填生成的 token

### Q: GitHub Actions 构建失败？

**A:** 检查以下几点：

1. 确认 `package.json` 中有 `build` 脚本
2. 查看 Actions 标签中的错误信息
3. 确认所有依赖都已正确安装
4. 检查 `.github/workflows/deploy.yml` 文件是否存在

### Q: 网站显示 404 或空白页？

**A:** 参考 `TROUBLESHOOTING.md` 文件，常见原因：

1. 等待几分钟（首次部署需要时间）
2. 检查 GitHub Pages 设置是否正确
3. 确认 base 路径配置正确（项目已自动配置）
4. 查看浏览器控制台错误信息

### Q: 如何查看网站的访问地址？

**A:** 
- 在仓库页面点击 **Settings** → **Pages**
- 查看 "Your site is live at..." 下的链接

---

## 📝 快速命令参考

```powershell
# 初始化并上传（首次）
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/givemeamemory-blog.git
git branch -M main
git push -u origin main

# 更新网站（后续）
git add .
git commit -m "更新说明"
git push
```

---

## 📚 相关文件

- **GitHub Actions 配置**：`.github/workflows/deploy.yml`
- **构建配置**：`vite.config.ts`（已配置 GitHub Pages base 路径）
- **故障排查**：`TROUBLESHOOTING.md`

---

## ✨ 完成！

按照以上步骤操作后，你的博客网站就会自动部署到 GitHub Pages，可以通过链接直接访问了！

如果遇到问题，请查看 `TROUBLESHOOTING.md` 文件或 GitHub Actions 的日志信息。
