# 環境
# サーバー: Node.js,Express
# クライアント: Angular8
# ビルド環境: ng build

# 使用するNode.jsのバージョンを設定
FROM node:10.16.3-alpine

# 作業フォルダを指定
WORKDIR /app

# パッケージインストールに必要なファイルをコピー
COPY package.json package-lock.json ./

# 必要なパッケージをインストールする
RUN npm ci

# PM2をインストールする
RUN npm install pm2 -g

# Angular/cliをインストールする
RUN npm install @angular/cli -g

# ソースをコピーする(コピーしないファイルは.dockerignoreで制御)
COPY . .

# 環境変数を設定する
ENV NODE_ENV=production

# Angularアプリケーションをビルドする
RUN npm run build

# Angularアプリケーションを実行する
CMD ["pm2-runtime", "/app/bin/www"]
