# 環境
# サーバー: nginx
# クライアント: Angular8
# ビルド環境: ng build

# 使用するNode.jsのバージョンを設定
FROM node:10.16.3-alpine as builder

# 作業フォルダを指定
WORKDIR /app

# パッケージインストールに必要なファイルをコピー
COPY package.json package-lock.json /app/

# 必要なパッケージをインストールする
RUN npm install

# ソースをコピーする(コピーしないファイルは.dockerignoreで制御)
COPY ./ /app/

# 環境変数を設定する
ENV NODE_ENV=production

# Angularアプリケーションをビルドする
RUN npm run build

# NGINX環境をセットアップする
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
