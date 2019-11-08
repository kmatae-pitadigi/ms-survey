# 環境
# サーバー: Node.js,NestJS,GraphQL,TypeORM,PostgreSQL
# ビルド環境
#   サーバー: webpack+gulp

# 使用するNode.jsのバージョンを設定(alpineではbycryptの関係でエラーになる)
FROM node:10.16.3-alpine

# パッケージインストールに必要なファイルをコピー
COPY package.json package-lock.json ./

# 必要なパッケージをインストールする
RUN npm ci

# PM2をインストールする
RUN npm install pm2 -g

# ソースをコピーする(コピーしないファイルは.dockerignoreで制御)
COPY . .

# ビルドする
RUN npm run build

# node.jsアプリケーションを実行する
CMD ["pm2-runtime", "/dist/www"]
