FROM node:23-alpine

RUN npm install -g http-server

WORKDIR /home/node/app

COPY . .
COPY .env.production .

RUN chown -R node:node /home/node/app
USER "node"
RUN npm install
RUN npm run production

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]

## For now this is a static site, so we can remove node_modules after build.
RUN rm -fr node_modules

EXPOSE 8080
CMD ["http-server", "dist"]



