# 部署说明

本项目用"本地 build + 推 deploy 分支 → ECS git pull"的方式部署到 `https://knowyourself.com.cn/intro_to_me/`。

## 分支约定

- `master`：源码分支
- `deploy`：构建产物分支（只放 `dist/` 内容，每次 force push 覆盖）

## 用户说"更新并提交" / "部署" / "上线"等指令时，按以下流程执行

1. 先确认有未提交的改动（`git status`）。如果没有改动可提交，跳过 commit 步骤。
2. `git add .` + `git commit -m "<根据 diff 内容生成简洁的中文提交信息>"`
3. 运行本地部署脚本：`.\deploy.ps1`（PowerShell）
   - 这会执行 `git push` + `npm run deploy`
   - `npm run deploy` 会 build 并把 `dist/` force push 到 GitHub 的 `deploy` 分支
4. 提示用户在 ECS Workbench 上执行 `intro_to_me_pull.sh` 完成服务器侧拉取。

## 关键脚本

- 本地：`deploy.ps1`（仓库根目录）
- 服务器：`/usr/local/bin/intro_to_me_pull.sh`（已部署在 ECS 上，做 `git fetch + reset --hard origin/deploy + chown www-data`）

## 服务器架构

- ECS 公网 IP：`39.102.120.6`
- 站点根目录：`/var/www/intro_to_me`（是 `deploy` 分支的 git clone）
- Nginx 主配置：`/etc/nginx/sites-available/knowyourself.conf`
  - 在 `location /` 之前有一个 `location /intro_to_me/` 块，`alias /var/www/intro_to_me/` + SPA fallback
- ECS 上不装 Node，构建在本地完成
- ECS 通过 SSH Deploy Key 从 GitHub 拉取（只读）

## 注意事项

- `vite.config.ts` 里的 `base: '/intro_to_me/'` 不要改，否则资源路径会全坏
- `package.json` 里 `deploy` 脚本用 HTTPS 推送，依赖 Windows 凭据管理器记住的 GitHub 凭据
- ECS 上 22 端口**没有**对公网开放，所以不能从本地 SSH 推送到 ECS。所有部署都走 GitHub 中转
