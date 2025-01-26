FROM node:23-alpine

RUN npm install -g http-server

RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app

COPY package*.json ./
COPY . .

RUN chown -R node:node /home/node/app
USER "node"
RUN npm i
RUN npm run build

## For now this is a static site, so we can remove node_modules after build.
RUN rm -fr node_modules

EXPOSE 8080
CMD ["http-server", "dist"]



