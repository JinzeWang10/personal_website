#!/bin/bash
# 一键部署个人网站到服务器
# 用法: ./deploy.sh <用户名>@<服务器IP>
# 示例: ./deploy.sh root@123.45.67.89

set -e

# ---- 配置 ----
REMOTE_DIR="/var/www/intro_to_me"
SUBPATH="/intro_to_me"

if [ -z "$1" ]; then
  echo "用法: ./deploy.sh <用户名>@<服务器IP>"
  echo "示例: ./deploy.sh root@123.45.67.89"
  exit 1
fi

SERVER="$1"

echo "==> 构建项目..."
npm run build

echo "==> 上传到服务器 $SERVER:$REMOTE_DIR ..."
ssh "$SERVER" "mkdir -p $REMOTE_DIR"
rsync -avz --delete dist/ "$SERVER:$REMOTE_DIR/"

echo "==> 写入 Nginx 配置..."
ssh "$SERVER" "cat > /etc/nginx/conf.d/intro_to_me.conf << 'NGINX'
location $SUBPATH {
    alias $REMOTE_DIR;
    index index.html;
    try_files \\\$uri \\\$uri/ ${SUBPATH}/index.html;
}
NGINX"

echo "==> 测试并重载 Nginx..."
ssh "$SERVER" "nginx -t && nginx -s reload"

echo ""
echo "==> 部署完成！访问 https://knowyourself.com.cn${SUBPATH}/"
