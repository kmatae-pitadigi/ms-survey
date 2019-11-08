# 環境
# サーバー: nginx
# クライアント: Angular8
# ビルド環境: ng build

# 使用するNode.jsのバージョンを設定
FROM node:10.16.3-alpine as build-stage

# 作業フォルダを指定
WORKDIR /app

# パッケージインストールに必要なファイルをコピー
COPY package.json package-lock.json ./

# 必要なパッケージをインストールする
RUN npm install

# ソースをコピーする(コピーしないファイルは.dockerignoreで制御)
COPY . .

# 環境変数を設定する
ENV NODE_ENV=production

# Angularアプリケーションをビルドする
RUN npm run build

# NGINX環境をセットアップする
FROM nginx:latest

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf