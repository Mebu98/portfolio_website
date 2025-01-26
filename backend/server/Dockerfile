FROM node:23-alpine
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

COPY package*.json ./
COPY src src

RUN chown -R node:node /home/node/app
USER "node"
RUN npm i --package-lock-only
RUN npm ci --only=production

EXPOSE 5050


CMD ["node", "./src/app.mjs"]


