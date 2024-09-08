# 使用 Node.js 基礎映像
FROM node:20

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# 複製所有檔案
COPY . .

# 編譯 Nuxt 應用
RUN npm run build

# 暴露端口
EXPOSE 3000
ENV HOST 0.0.0.0

# 啟動 Nuxt 應用
CMD ["npm", "start"]
